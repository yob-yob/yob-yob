export interface PortfolioSection {
	id: string;
	label: string;
}

export const portfolioSections: PortfolioSection[] = [
	{ id: 'about', label: 'About Me' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'tech-stack', label: 'Tech Stack' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'hobbies', label: 'Hobbies & Interests' },
	{ id: 'work-experience', label: 'Work Experience' },
	{ id: 'education', label: 'Education' },
	{ id: 'investments', label: 'Investment in Myself' },
	{ id: 'links', label: 'Links' },
	{ id: 'github-cards', label: 'Github Cards' }
];
