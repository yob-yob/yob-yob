<script lang="ts">
	import { Trophy } from 'lucide-svelte';
	import { portfolio } from '$lib/data/portfolio';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import SectionHeading from './SectionHeading.svelte';
</script>

<SectionHeading title="Projects" icon={Trophy}>
	{#each portfolio.projects as project}
		<Card class="mb-6 bg-slate-800 border-slate-700 shadow-lg">
			<CardHeader class="flex flex-row items-start justify-between space-y-0 pb-2">
				<CardTitle class="text-xl text-white">{project.name}</CardTitle>
				<Button variant="pill" href={project.url} target="_blank" rel="noopener noreferrer">
					{project.linkText}
				</Button>
			</CardHeader>
			<CardContent>
				<p class="text-slate-300 mb-4">{project.description}</p>
				<div class="flex flex-wrap gap-2">
					{#each project.tags as tag}
						<Badge variant="tag">{tag}</Badge>
					{/each}
				</div>
			</CardContent>
		</Card>
	{/each}
</SectionHeading>
