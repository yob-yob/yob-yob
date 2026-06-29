export interface ProjectBranchUpdate {
	lastUpdatedAt: string;
	branch: string;
}

export function formatProjectLastUpdated(isoDate: string): string {
	return new Date(isoDate).toLocaleString(undefined, {
		dateStyle: 'medium',
		timeStyle: 'short'
	});
}
