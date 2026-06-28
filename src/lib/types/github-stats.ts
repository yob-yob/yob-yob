export interface GitHubStats {
	generatedAt: string;
	username: string;
	profile: {
		name: string | null;
		totalPublicRepos: number;
		totalStars: number;
		totalPullRequests: number;
		totalIssues: number;
		totalContributedRepos: number;
		contributionYears: number[];
		contributions: { date: string; count: number }[];
	};
	languagesByRepo: { name: string; bytes: number; percent: number; color: string }[];
	statsByYear: { year: number; commits: number; contributions: number }[];
	openSourceContributions: {
		title: string;
		url: string;
		owner: string;
		repo: string;
		repoUrl: string;
		createdAt: string;
	}[];
}
