<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchGitHubStats } from '$lib/data/github-stats';
	import type { GitHubStats } from '$lib/types/github-stats';
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import LanguagesChart from '$lib/components/github-cards/LanguagesChart.svelte';
	import OpenSourceContributionsCard from '$lib/components/github-cards/OpenSourceContributionsCard.svelte';
	import ProfileDetailsCard from '$lib/components/github-cards/ProfileDetailsCard.svelte';
	import StatsChart from '$lib/components/github-cards/StatsChart.svelte';

	const GITHUB_PROFILE_URL = 'https://github.com/yob-yob';

	let stats = $state<GitHubStats | null>(null);
	let error = $state<string | null>(null);
	let loading = $state(true);

	onMount(async () => {
		try {
			stats = await fetchGitHubStats();
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to load GitHub stats';
		} finally {
			loading = false;
		}
	});

	const updatedLabel = $derived(
		stats
			? new Date(stats.generatedAt).toLocaleString(undefined, {
					dateStyle: 'medium',
					timeStyle: 'short'
				})
			: null
	);
</script>

<section>
	<div class="mb-6 flex flex-wrap items-end justify-between gap-2">
		<h2 class="text-2xl font-bold text-white">Github Cards</h2>
		{#if updatedLabel}
			<p class="text-sm text-muted-foreground">Updated {updatedLabel}</p>
		{/if}
	</div>

	{#if loading}
		<div class="flex flex-col gap-5">
			<Card>
				<CardHeader>
					<div class="h-6 w-40 animate-pulse rounded bg-secondary/60"></div>
				</CardHeader>
				<CardContent>
					<div class="h-48 animate-pulse rounded bg-secondary/40"></div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<div class="h-6 w-40 animate-pulse rounded bg-secondary/60"></div>
				</CardHeader>
				<CardContent>
					<div class="h-32 animate-pulse rounded bg-secondary/40"></div>
				</CardContent>
			</Card>
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
				{#each Array.from({ length: 2 }) as _, index (index)}
					<Card>
						<CardHeader>
							<div class="h-6 w-40 animate-pulse rounded bg-secondary/60"></div>
						</CardHeader>
						<CardContent>
							<div class="h-48 animate-pulse rounded bg-secondary/40"></div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	{:else if error || !stats}
		<Card>
			<CardContent class="py-8 text-center">
				<p class="text-muted-foreground">{error ?? 'Unable to load GitHub stats.'}</p>
				<a
					href={GITHUB_PROFILE_URL}
					class="mt-3 inline-block text-primary underline-offset-4 hover:underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					View profile on GitHub
				</a>
			</CardContent>
		</Card>
	{:else}
		<div class="flex flex-col gap-5">
			<ProfileDetailsCard profile={stats.profile} username={stats.username} />
			<OpenSourceContributionsCard contributions={stats.openSourceContributions} />
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
				<LanguagesChart languages={stats.languagesByRepo} />
				<StatsChart statsByYear={stats.statsByYear} />
			</div>
		</div>
	{/if}
</section>
