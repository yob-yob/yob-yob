import { portfolio, type Portfolio, type WorkExperience } from './portfolio';

export interface ResumeView {
	personal: Portfolio['personal'];
	summary: string;
	coreSkills: string[];
	techStackCategories: Portfolio['techStack']['categories'];
	workExperience: WorkExperience[];
	projects: Portfolio['projects'];
	education: Portfolio['education'];
}

export function getResumeView(): ResumeView {
	return {
		personal: portfolio.personal,
		summary: portfolio.about.resumeSummary,
		coreSkills: portfolio.resumeCoreSkills,
		techStackCategories: portfolio.techStack.categories.map((category) => ({
			...category,
			items: category.items.map((item) => {
				if (item === 'Google Sheets API') return 'Google Sheets';
				if (item === 'Slack Webhook') return 'Slack';
				return item;
			})
		})),
		workExperience: portfolio.workExperience,
		projects: portfolio.projects,
		education: portfolio.education
	};
}

export function formatExperienceDateRange(job: WorkExperience): string {
	return job.resumeDateRange;
}

export function getExperienceBullets(job: WorkExperience): string[] {
	return job.resumeResponsibilities ?? [];
}

export function getExperienceTech(job: WorkExperience): string | null {
	return job.resumeTechStack ?? null;
}

export function getExperienceSubtitle(job: WorkExperience): string | null {
	if (job.resumeSummary) return job.resumeSummary;
	if (job.skills?.length) return `${job.location} · ${job.skills.join(', ')}`;
	return job.location;
}
