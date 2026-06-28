<script lang="ts">
	import { Star } from 'lucide-svelte';
	import { portfolio } from '$lib/data/portfolio';
	import SectionHeading from './SectionHeading.svelte';
</script>

<SectionHeading title="Skills" icon={Star}>
	<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
		{#each portfolio.skills.categories as category}
			<ul class="list-disc list-inside text-slate-300">
				{#each category.items as item}
					<li>{item}</li>
				{/each}
			</ul>
		{/each}
	</div>
</SectionHeading>
