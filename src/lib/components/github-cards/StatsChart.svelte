<script lang="ts">
	import * as Chart from '$lib/components/ui/chart/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import type { GitHubStats } from '$lib/types/github-stats';
	import { scaleBand } from 'd3-scale';
	import { BarChart } from 'layerchart';

	type Props = {
		statsByYear: GitHubStats['statsByYear'];
	};

	let { statsByYear }: Props = $props();

	const chartData = $derived(
		[...statsByYear]
			.sort((a, b) => a.year - b.year)
			.slice(-5)
			.map((stat) => ({
				year: String(stat.year),
				contributions: stat.contributions,
				commits: stat.commits
			}))
	);

	const chartConfig = {
		contributions: {
			label: 'Contributions',
			color: 'var(--chart-1)'
		},
		commits: {
			label: 'Commits',
			color: 'var(--chart-2)'
		}
	} satisfies Chart.ChartConfig;
</script>

<Card class="h-full">
	<CardHeader>
		<CardTitle>General stats</CardTitle>
	</CardHeader>
	<CardContent>
		{#if chartData.length === 0}
			<p class="text-sm text-muted-foreground">No yearly stats available yet.</p>
		{:else}
			<Chart.Container config={chartConfig} class="aspect-auto h-[300px] w-full">
				<BarChart
					data={chartData}
					xScale={scaleBand().padding(0.25)}
					x="year"
					axis="x"
					grid={true}
					legend={true}
					seriesLayout="group"
					bandPadding={0.35}
					series={[
						{
							key: 'contributions',
							label: chartConfig.contributions.label,
							color: chartConfig.contributions.color
						},
						{
							key: 'commits',
							label: chartConfig.commits.label,
							color: chartConfig.commits.color
						}
					]}
				>
					{#snippet tooltip()}
						<Chart.Tooltip />
					{/snippet}
				</BarChart>
			</Chart.Container>
		{/if}
	</CardContent>
</Card>
