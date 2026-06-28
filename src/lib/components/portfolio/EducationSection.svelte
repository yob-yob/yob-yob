<script lang="ts">
	import { GraduationCap } from 'lucide-svelte';
	import { portfolio } from '$lib/data/portfolio';
	import { Card, CardContent } from '$lib/components/ui/card';
	import SectionHeading from './SectionHeading.svelte';
</script>

<SectionHeading id="education" title="Education" icon={GraduationCap}>
	{#each portfolio.education as school}
		<Card class="mb-6 bg-slate-800 border-slate-700 shadow-lg">
			<CardContent class="p-6">
				<h3 class="text-xl font-semibold text-white">{school.degree}</h3>
				<p class="text-slate-200">{school.institution}</p>
				<p class="text-slate-300">{school.yearRange}</p>
				<p class="text-slate-400 text-sm mt-2">{school.address}</p>
				{#if school.description}
					<div class="mt-4 text-slate-300">
						<p class="mb-3 leading-relaxed">{school.description}</p>
						{#if school.impact}
							<p class="leading-relaxed">{school.impact}</p>
						{/if}
					</div>
				{/if}
			</CardContent>
		</Card>
	{/each}
</SectionHeading>
