import type { Project } from '$lib/data/portfolio';

const GITHUB_BRANCH = 'main';

interface GitHubBranchResponse {
	name: string;
	commit: {
		commit: {
			committer: {
				date: string;
			};
		};
	};
}

export interface ProjectBranchUpdate {
	lastUpdatedAt: string;
	branch: string;
}

function resolveGithubRepo(project: Project): string | null {
	if (project.githubRepo) {
		return project.githubRepo;
	}

	const match = project.url.match(/github\.com\/([^/?#]+\/[^/?#]+)/);
	return match?.[1]?.replace(/\.git$/, '') ?? null;
}

export async function fetchProjectBranchUpdate(
	project: Project
): Promise<ProjectBranchUpdate | null> {
	const githubRepo = resolveGithubRepo(project);
	if (!githubRepo) {
		return null;
	}

	const response = await fetch(
		`https://api.github.com/repos/${githubRepo}/branches/${GITHUB_BRANCH}`,
		{
			headers: {
				Accept: 'application/vnd.github+json'
			}
		}
	);

	if (!response.ok) {
		return null;
	}

	const branch = (await response.json()) as GitHubBranchResponse;
	const lastUpdatedAt = branch.commit?.commit?.committer?.date;

	if (!lastUpdatedAt) {
		return null;
	}

	return { lastUpdatedAt, branch: branch.name };
}

export function formatProjectLastUpdated(isoDate: string): string {
	return new Date(isoDate).toLocaleString(undefined, {
		dateStyle: 'medium',
		timeStyle: 'short'
	});
}
