<script lang="ts">
	import * as Chart from '$lib/components/ui/chart/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import type { GitHubStats } from '$lib/types/github-stats';
	import { PieChart } from 'layerchart';

	type Props = {
		languages: GitHubStats['languagesByRepo'];
	};

	let { languages }: Props = $props();

	const chartData = $derived(
		languages.slice(0, 8).map((language, index) => ({
			key: language.name,
			label: language.name,
			value: language.bytes,
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
</script>

<Card class="h-full">
	<CardHeader>
		<CardTitle>Top languages by repo</CardTitle>
	</CardHeader>
	<CardContent>
		{#if chartData.length === 0}
			<p class="text-sm text-muted-foreground">No language data available yet.</p>
		{:else}
			<Chart.Container config={chartConfig} class="mx-auto aspect-square max-h-[280px]">
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
						<Chart.Tooltip hideLabel />
					{/snippet}
				</PieChart>
			</Chart.Container>
			<ul class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
				{#each chartData as item}
					<li class="flex items-center gap-2">
						<span class="size-2.5 rounded-sm" style="background-color: {item.color}"></span>
						{item.label}
					</li>
				{/each}
			</ul>
		{/if}
	</CardContent>
</Card>
