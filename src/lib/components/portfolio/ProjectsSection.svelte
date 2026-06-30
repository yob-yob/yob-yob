<script lang="ts">
	import { onMount } from 'svelte';
	import { Clock, Trophy } from 'lucide-svelte';
	import { portfolio } from '$lib/data/portfolio';
	import { formatProjectLastUpdated, type ProjectBranchUpdate } from '$lib/data/github-branch';
	import { fetchGitHubStats } from '$lib/data/github-stats';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import SectionHeading from './SectionHeading.svelte';
	import posthog from 'posthog-js';

	let projectUpdates = $state<Record<string, ProjectBranchUpdate>>({});

	onMount(async () => {
		try {
			const stats = await fetchGitHubStats();
			projectUpdates = stats.projectBranchUpdates;
		} catch {
			projectUpdates = {};
		}
	});
</script>

<SectionHeading id="projects" title="Projects" icon={Trophy}>
	{#each portfolio.projects as project (project.id)}
		{@const update = projectUpdates[project.id]}
		<Card class="mb-6 bg-slate-800 border-slate-700 shadow-lg">
			<CardHeader class="flex flex-row items-start justify-between space-y-0 pb-2">
				<div class="space-y-1">
					<CardTitle class="text-xl text-white">{project.name}</CardTitle>
					{#if update}
						<p class="inline-flex items-center gap-1.5 text-xs text-slate-400">
							<Clock class="size-3.5 shrink-0" aria-hidden="true" />
							<span>
								Last updated {formatProjectLastUpdated(update.lastUpdatedAt)}
								<span class="text-slate-500">({update.branch})</span>
							</span>
						</p>
					{/if}
				</div>
				<Button
					variant="pill"
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					onclick={() => posthog.capture('project_link_clicked', { project_name: project.name, project_url: project.url })}
				>
					{project.linkText}
				</Button>
			</CardHeader>
			<CardContent>
				<p class="text-slate-300 mb-4">{project.description}</p>
				<div class="flex flex-wrap gap-2">
					{#each project.tags as tag (tag)}
						<Badge variant="tag">{tag}</Badge>
					{/each}
				</div>
			</CardContent>
		</Card>
	{/each}
</SectionHeading>
