<script lang="ts">
	import { Wrench } from 'lucide-svelte';
	import { getAllTechStackItems } from '$lib/data/portfolio';
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardContent } from '$lib/components/ui/card';
	import SectionHeading from './SectionHeading.svelte';
</script>

<SectionHeading title="Tech Stack" icon={Wrench}>
	<Card class="bg-slate-800 border-slate-700 shadow-lg">
		<CardContent class="p-6">
			<div class="flex flex-wrap gap-2">
				{#each getAllTechStackItems() as item}
					<Badge variant="tech">{item}</Badge>
				{/each}
			</div>
		</CardContent>
	</Card>
</SectionHeading>
