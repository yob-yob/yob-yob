import portfolioData from './portfolio.json';

export interface Personal {
	name: string;
	emails: string[];
	primaryEmail: string;
	birthday: string;
	portfolioUrl: string;
	githubUrl: string;
	linkedinVanity: string;
}

export interface SkillCategory {
	name: string;
	items: string[];
}

export interface TechStackCategory {
	name: string;
	items: string[];
}

export interface Project {
	id: string;
	name: string;
	description: string;
	resumeDescription: string;
	url: string;
	linkText: string;
	tags: string[];
}

export interface HobbyItem {
	name: string;
	icon: string;
	note?: string;
}

export interface WorkExperience {
	id: string;
	title: string;
	company: string;
	employmentType: string;
	startDate: string;
	endDate: string;
	duration: string;
	dateRange: string;
	resumeDateRange: string;
	location: string;
	highlighted: boolean;
	keyResponsibilities?: string[];
	resumeResponsibilities?: string[];
	careerJourney?: string[];
	techStack?: string[];
	resumeTechStack?: string;
	skills?: string[];
	resumeSummary?: string;
	note?: string;
	description?: string;
	impact?: string;
	fullTimeEndDate?: string;
	contractorStartDate?: string;
}

export interface Education {
	id: string;
	degree: string;
	institution: string;
	startYear: number;
	endYear: number;
	yearRange: string;
	address: string;
	description?: string;
	impact?: string;
}

export interface InvestmentItem {
	id: string;
	name: string;
	description: string;
	borderColor: string;
	url?: string;
}

export type WebsiteKey =
	| 'github'
	| 'linkedin'
	| 'google'
	| 'facebook'
	| 'x'
	| 'aws'
	| 'stackoverflow'
	| 'gitlab'
	| 'hackerrank'
	| 'generic';

export interface ProfileLink {
	id: string;
	website: WebsiteKey;
	label: string;
	url: string;
}

export interface ProfileLinks {
	social: ProfileLink[];
	certificates: ProfileLink[];
}

export interface Portfolio {
	personal: Personal;
	about: { summary: string; resumeSummary: string };
	skills: { categories: SkillCategory[] };
	resumeCoreSkills: string[];
	techStack: { categories: TechStackCategory[] };
	projects: Project[];
	hobbies: { hobbies: HobbyItem[]; interests: HobbyItem[] };
	workExperience: WorkExperience[];
	education: Education[];
	investments: { description: string; items: InvestmentItem[] };
	links: ProfileLinks;
	meta: { lastUpdated: string; copyright: string; version: string };
}

export const portfolio = portfolioData as Portfolio;

export function getAllTechStackItems(): string[] {
	return portfolio.techStack.categories.flatMap((category) => category.items);
}

export function getTechStackByCategory(): TechStackCategory[] {
	return portfolio.techStack.categories;
}
