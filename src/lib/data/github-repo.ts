import type { Project } from '$lib/data/portfolio';

export function resolveGithubRepo(project: Pick<Project, 'githubRepo' | 'url'>): string | null {
	if (project.githubRepo) {
		return project.githubRepo;
	}

	const match = project.url.match(/github\.com\/([^/?#]+\/[^/?#]+)/);
	return match?.[1]?.replace(/\.git$/, '') ?? null;
}
