<script lang="ts">
	import * as Chart from '$lib/components/ui/chart/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import type { GitHubStats } from '$lib/types/github-stats';
	import { CircleHelp } from 'lucide-svelte';
	import { PieChart } from 'layerchart';

	type Props = {
		languages: GitHubStats['languagesByRepo'];
	};

	let { languages }: Props = $props();

	const dataNote =
		'Counts public, non-fork repositories I own by GitHub’s primary language label (one language per repo). Framework boilerplate is not weighted by file size.';

	const chartData = $derived(
		languages.slice(0, 8).map((language, index) => ({
			key: language.name,
			label: language.name,
			value: language.repoCount,
			color: language.color || `var(--chart-${(index % 5) + 1})`
		}))
	);

	const chartConfig = $derived(
		Object.fromEntries(
			chartData.map((item) => [
				item.key,
				{
					label: item.label,
					color: item.color
				}
			])
		) satisfies Chart.ChartConfig
	);

	function repoLabel(count: number): string {
		return count === 1 ? '1 repo' : `${count} repos`;
	}
</script>

{#snippet tooltipRow({ value, name }: { value: unknown; name: string })}
	{@const count = typeof value === 'number' ? value : Number(value)}
	<div class="flex w-full items-center justify-between gap-4 leading-none">
		<span class="text-muted-foreground">{name}</span>
		<span class="font-mono font-medium tabular-nums text-foreground">{repoLabel(count)}</span>
	</div>
{/snippet}

<Card class="h-full">
	<CardHeader class="space-y-0">
		<div class="flex items-center gap-2">
			<CardTitle>Top languages by repo</CardTitle>
			<span class="group relative inline-flex">
				<button
					type="button"
					class="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					aria-label="How this chart is calculated"
				>
					<CircleHelp class="size-4" />
				</button>
				<span
					role="tooltip"
					class="pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden w-64 -translate-x-1/2 rounded-md border border-border bg-popover px-3 py-2 text-xs font-normal leading-snug text-popover-foreground shadow-lg group-hover:block group-focus-within:block"
				>
					{dataNote}
				</span>
			</span>
		</div>
	</CardHeader>
	<CardContent>
		{#if chartData.length === 0}
			<p class="text-sm text-muted-foreground">No language data available yet.</p>
		{:else}
			<Chart.Container config={chartConfig} class="mx-auto aspect-square max-h-[280px]" title={dataNote}>
				<PieChart
					data={chartData}
					key="key"
					label="label"
					value="value"
					c="color"
					innerRadius={0.55}
					padAngle={0.02}
				>
					{#snippet tooltip()}
						<Chart.Tooltip hideLabel formatter={tooltipRow} />
					{/snippet}
				</PieChart>
			</Chart.Container>
			<ul class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
				{#each chartData as item}
					<li class="flex items-center gap-2">
						<span class="size-2.5 rounded-sm" style="background-color: {item.color}"></span>
						<span>{item.label}</span>
						<!-- <span class="text-muted-foreground">· {repoLabel(item.value)}</span> -->
					</li>
				{/each}
			</ul>
		{/if}
	</CardContent>
</Card>
