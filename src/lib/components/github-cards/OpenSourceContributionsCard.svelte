<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import type { GitHubStats } from '$lib/types/github-stats';

	type Props = {
		contributions: GitHubStats['openSourceContributions'];
	};

	let { contributions }: Props = $props();

	function formatDate(isoDate: string): string {
		return new Date(isoDate).toLocaleDateString(undefined, {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}
</script>

<Card>
	<CardHeader>
		<CardTitle>Open source pull requests</CardTitle>
	</CardHeader>
	<CardContent>
		{#if contributions.length === 0}
			<p class="text-sm text-muted-foreground">
				No merged pull requests to public repositories with 10+ stars in the last 5 years.
			</p>
		{:else}
			<ul class="space-y-3">
				{#each contributions as pullRequest (pullRequest.url)}
					<li class="space-y-1 text-sm">
						<a
							href={pullRequest.url}
							class="line-clamp-2 font-medium text-primary underline-offset-4 hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							{pullRequest.title}
						</a>
						<div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground">
							<a
								href={pullRequest.repoUrl}
								class="hover:text-foreground hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								{pullRequest.owner}/{pullRequest.repo}
							</a>
							<span aria-hidden="true">·</span>
							<time datetime={pullRequest.createdAt}>{formatDate(pullRequest.createdAt)}</time>
						</div>
					</li>
				{/each}
			</ul>
		{/if}
	</CardContent>
</Card>
