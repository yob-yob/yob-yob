import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { GitHubStats } from '../src/lib/types/github-stats.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, '../static/data/github-stats.json');

const USERNAME = process.env.GITHUB_USERNAME ?? 'yob-yob';
const TOKEN = process.env.GITHUB_TOKEN;

interface GraphQLResponse<T> {
	data?: T;
	errors?: { message: string }[];
}

async function graphqlRequest<T>(
	query: string,
	variables: Record<string, unknown> = {}
): Promise<T> {
	if (!TOKEN) {
		throw new Error('GITHUB_TOKEN is required');
	}

	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `bearer ${TOKEN}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query, variables })
	});

	if (!response.ok) {
		throw new Error(`GitHub API HTTP ${response.status}: ${await response.text()}`);
	}

	const json = (await response.json()) as GraphQLResponse<T>;
	if (json.errors?.length) {
		throw new Error(json.errors[0]?.message ?? 'GraphQL request failed');
	}

	if (!json.data) {
		throw new Error('GraphQL response missing data');
	}

	return json.data;
}

async function fetchProfileDetails(username: string) {
	const data = await graphqlRequest<{
		user: {
			name: string | null;
			repositories: {
				totalCount: number;
				nodes: { stargazers: { totalCount: number } }[];
			};
			contributionsCollection: {
				contributionYears: number[];
				contributionCalendar: {
					weeks: {
						contributionDays: { contributionCount: number; date: string }[];
					}[];
				};
			};
			repositoriesContributedTo: { totalCount: number };
			pullRequests: { totalCount: number };
			issues: { totalCount: number };
		};
	}>(
		`
		query UserDetails($login: String!) {
			user(login: $login) {
				name
				repositories(first: 100, privacy: PUBLIC, isFork: false, ownerAffiliations: OWNER, orderBy: { direction: DESC, field: STARGAZERS }) {
					totalCount
					nodes {
						stargazers {
							totalCount
						}
					}
				}
				contributionsCollection {
					contributionYears
					contributionCalendar {
						weeks {
							contributionDays {
								contributionCount
								date
							}
						}
					}
				}
				repositoriesContributedTo(first: 1, includeUserRepositories: true, privacy: PUBLIC, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
					totalCount
				}
				pullRequests(first: 1) {
					totalCount
				}
				issues(first: 1) {
					totalCount
				}
			}
		}
		`,
		{ login: username }
	);

	const user = data.user;
	const contributions: { date: string; count: number }[] = [];

	for (const week of user.contributionsCollection.contributionCalendar.weeks) {
		for (const day of week.contributionDays) {
			contributions.push({ date: day.date, count: day.contributionCount });
		}
	}

	return {
		name: user.name,
		totalPublicRepos: user.repositories.totalCount,
		totalStars: user.repositories.nodes.reduce(
			(sum, repo) => sum + repo.stargazers.totalCount,
			0
		),
		totalPullRequests: user.pullRequests.totalCount,
		totalIssues: user.issues.totalCount,
		totalContributedRepos: user.repositoriesContributedTo.totalCount,
		contributionYears: user.contributionsCollection.contributionYears,
		contributions
	};
}

async function fetchLanguagesByRepo(username: string) {
	const languageMap = new Map<string, { repoCount: number; color: string }>();
	let cursor: string | null = null;
	let hasNextPage = true;

	while (hasNextPage) {
		const data = await graphqlRequest<{
			user: {
				repositories: {
					nodes: {
						primaryLanguage: { name: string; color: string | null } | null;
					}[];
					pageInfo: { endCursor: string | null; hasNextPage: boolean };
				};
			};
		}>(
			`
			query ReposPerLanguage($login: String!, $endCursor: String) {
				user(login: $login) {
					repositories(isFork: false, first: 100, after: $endCursor, ownerAffiliations: OWNER, privacy: PUBLIC) {
						nodes {
							primaryLanguage {
								name
								color
							}
						}
						pageInfo {
							endCursor
							hasNextPage
						}
					}
				}
			}
			`,
			{ login: username, endCursor: cursor }
		);

		for (const repo of data.user.repositories.nodes) {
			if (!repo.primaryLanguage) continue;

			const { name, color } = repo.primaryLanguage;
			const existing = languageMap.get(name);

			if (existing) {
				existing.repoCount += 1;
			} else {
				languageMap.set(name, {
					repoCount: 1,
					color: color ?? '#586e75'
				});
			}
		}

		cursor = data.user.repositories.pageInfo.endCursor;
		hasNextPage = data.user.repositories.pageInfo.hasNextPage;
	}

	const totalRepos = [...languageMap.values()].reduce((sum, lang) => sum + lang.repoCount, 0);

	return [...languageMap.entries()]
		.map(([name, { repoCount, color }]) => ({
			name,
			repoCount,
			color,
			percent: totalRepos > 0 ? Math.round((repoCount / totalRepos) * 1000) / 10 : 0
		}))
		.sort((a, b) => b.repoCount - a.repoCount);
}

async function fetchStatsByYear(username: string, years: number[]) {
	const statsByYear: GitHubStats['statsByYear'] = [];

	for (const year of years) {
		const data = await graphqlRequest<{
			user: {
				contributionsCollection: {
					totalCommitContributions: number;
					contributionCalendar: { totalContributions: number };
				};
			};
		}>(
			`
			query ContributionsByYear($login: String!) {
				user(login: $login) {
					contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
						totalCommitContributions
						contributionCalendar {
							totalContributions
						}
					}
				}
			}
			`,
			{ login: username }
		);

		statsByYear.push({
			year,
			commits: data.user.contributionsCollection.totalCommitContributions,
			contributions: data.user.contributionsCollection.contributionCalendar.totalContributions
		});
	}

	return statsByYear.sort((a, b) => a.year - b.year);
}

type PullRequestContributionEntry = {
	repository: {
		name: string;
		url: string;
		isPrivate: boolean;
		stargazers: { totalCount: number };
		owner: { login: string };
	};
	contributions: {
		nodes: {
			occurredAt: string;
			pullRequest: {
				title: string;
				url: string;
				createdAt: string;
				merged: boolean;
			} | null;
		}[];
	};
};

const MIN_REPO_STARS = 10;
const MAX_PULL_REQUESTS = 3;
const PULL_REQUEST_YEARS = 5;

function pullRequestContributionWindows(years: number): { from: string; to: string }[] {
	const format = (date: Date) => date.toISOString().replace(/\.\d{3}Z$/, 'Z');
	const windows: { from: string; to: string }[] = [];
	const now = new Date();

	for (let i = 0; i < years; i++) {
		const to = new Date(now);
		to.setUTCFullYear(to.getUTCFullYear() - i);

		const from = new Date(to);
		from.setUTCFullYear(from.getUTCFullYear() - 1);

		windows.push({ from: format(from), to: format(to) });
	}

	return windows;
}

async function fetchPullRequestsForWindow(
	username: string,
	from: string,
	to: string
): Promise<PullRequestContributionEntry[]> {
	const data = await graphqlRequest<{
		user: {
			contributionsCollection: {
				pullRequestContributionsByRepository: PullRequestContributionEntry[];
			};
		};
	}>(
		`
		query OpenSourcePullRequests($login: String!, $from: DateTime!, $to: DateTime!) {
			user(login: $login) {
				contributionsCollection(from: $from, to: $to) {
					pullRequestContributionsByRepository(maxRepositories: 100) {
						repository {
							name
							url
							isPrivate
							stargazers {
								totalCount
							}
							owner {
								login
							}
						}
						contributions(first: 100) {
							nodes {
								occurredAt
								pullRequest {
									title
									url
									createdAt
									merged
								}
							}
						}
					}
				}
			}
		}
		`,
		{ login: username, from, to }
	);

	return data.user.contributionsCollection.pullRequestContributionsByRepository;
}

async function fetchOpenSourceContributions(username: string) {
	const pullRequests: GitHubStats['openSourceContributions'] = [];
	const seenUrls = new Set<string>();

	for (const { from, to } of pullRequestContributionWindows(PULL_REQUEST_YEARS)) {
		const entries = await fetchPullRequestsForWindow(username, from, to);

		for (const entry of entries) {
			const { repository, contributions } = entry;

			if (
				repository.isPrivate ||
				repository.owner.login === username ||
				repository.stargazers.totalCount < MIN_REPO_STARS
			) {
				continue;
			}

			for (const node of contributions.nodes) {
				const pullRequest = node.pullRequest;
				if (!pullRequest || !pullRequest.merged || seenUrls.has(pullRequest.url)) continue;

				seenUrls.add(pullRequest.url);
				pullRequests.push({
					title: pullRequest.title,
					url: pullRequest.url,
					owner: repository.owner.login,
					repo: repository.name,
					repoUrl: repository.url,
					createdAt: pullRequest.createdAt
				});
			}
		}
	}

	return pullRequests
		.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
		.slice(0, MAX_PULL_REQUESTS);
}

async function main() {
	console.log(`Generating GitHub stats for ${USERNAME}...`);

	const profile = await fetchProfileDetails(USERNAME);
	const languagesByRepo = await fetchLanguagesByRepo(USERNAME);
	const statsByYear = await fetchStatsByYear(USERNAME, profile.contributionYears);
	const openSourceContributions = await fetchOpenSourceContributions(USERNAME);

	const stats: GitHubStats = {
		generatedAt: new Date().toISOString(),
		username: USERNAME,
		profile,
		languagesByRepo,
		statsByYear,
		openSourceContributions
	};

	await mkdir(dirname(OUTPUT_PATH), { recursive: true });
	await writeFile(OUTPUT_PATH, `${JSON.stringify(stats, null, 2)}\n`, 'utf8');

	console.log(`Wrote ${OUTPUT_PATH}`);
}

main().catch((error: unknown) => {
	console.error(error);
	process.exit(1);
});
