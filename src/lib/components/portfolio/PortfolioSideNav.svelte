<script lang="ts">
	import { onMount } from 'svelte';
	import { portfolioSections } from '$lib/data/portfolio-sections';
	import { trackSectionNavClick } from '$lib/openpanel';

	const SCROLL_OFFSET = 120;

	let activeId = $state(portfolioSections[0].id);

	function scrollToSection(id: string) {
		const section = portfolioSections.find((s) => s.id === id);
		if (section) trackSectionNavClick(section.id, section.label);

		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	function updateActiveSection() {
		let current = portfolioSections[0].id;

		for (const section of portfolioSections) {
			const element = document.getElementById(section.id);
			if (element && element.getBoundingClientRect().top <= SCROLL_OFFSET) {
				current = section.id;
			}
		}

		activeId = current;
	}

	onMount(() => {
		updateActiveSection();
		window.addEventListener('scroll', updateActiveSection, { passive: true });

		return () => {
			window.removeEventListener('scroll', updateActiveSection);
		};
	});
</script>

<nav
	class="fixed left-4 top-1/2 z-20 hidden -translate-y-1/2 xl:block"
	aria-label="Portfolio sections"
>
	<ul
		class="max-h-[calc(100vh-4rem)] overflow-y-auto rounded-lg border border-slate-700/80 bg-slate-900/85 py-2 pl-2 pr-3 shadow-xl backdrop-blur-sm"
	>
		{#each portfolioSections as section (section.id)}
			<li>
				<button
					type="button"
					onclick={() => scrollToSection(section.id)}
					class="group relative flex w-full items-center gap-2 rounded-md py-1.5 pl-3 pr-2 text-left text-xs transition-colors {activeId ===
					section.id
						? 'text-sky-400'
						: 'text-slate-400 hover:text-slate-200'}"
					aria-current={activeId === section.id ? 'location' : undefined}
				>
					<span
						class="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full transition-colors {activeId ===
						section.id
							? 'bg-sky-400'
							: 'bg-transparent group-hover:bg-slate-600'}"
						aria-hidden="true"
					></span>
					{section.label}
				</button>
			</li>
		{/each}
	</ul>
</nav>
