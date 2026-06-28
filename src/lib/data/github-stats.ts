import type { GitHubStats } from '$lib/types/github-stats';

const PROD_URL =
	'https://raw.githubusercontent.com/yob-yob/yob-yob/main/static/data/github-stats.json';

export async function fetchGitHubStats(): Promise<GitHubStats> {
	const url = import.meta.env.DEV ? '/data/github-stats.json' : PROD_URL;
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Failed to load stats: ${res.status}`);
	}

	return res.json() as Promise<GitHubStats>;
}
