import { portfolioSections } from '$lib/data/portfolio-sections';
import { trackEvent } from '$lib/openpanel';

export function initPortfolioSectionTracking(): () => void {
	const viewed = new Set<string>();

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;

				const id = entry.target.id;
				if (!id || viewed.has(id)) continue;

				const section = portfolioSections.find((s) => s.id === id);
				if (!section) continue;

				viewed.add(id);
				trackEvent('section_viewed', {
					section_id: section.id,
					section_label: section.label
				});
			}
		},
		{ threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
	);

	for (const section of portfolioSections) {
		const element = document.getElementById(section.id);
		if (element) observer.observe(element);
	}

	return () => observer.disconnect();
}
