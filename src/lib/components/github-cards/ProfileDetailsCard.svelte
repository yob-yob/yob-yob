<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import type { GitHubStats } from '$lib/types/github-stats';

	type Props = {
		profile: GitHubStats['profile'];
		username: string;
	};

	type TooltipState = {
		date: string;
		count: number;
		x: number;
		y: number;
	};

	let { profile, username }: Props = $props();

	let tooltip = $state<TooltipState | null>(null);

	const weeks = $derived(groupContributionsByWeek(profile.contributions));
	const maxCount = $derived(
		Math.max(1, ...profile.contributions.map((day) => day.count))
	);

	function groupContributionsByWeek(contributions: GitHubStats['profile']['contributions']) {
		const chunkSize = 7;
		const result: GitHubStats['profile']['contributions'][] = [];

		for (let i = 0; i < contributions.length; i += chunkSize) {
			result.push(contributions.slice(i, i + chunkSize));
		}

		return result;
	}

	function cellLevel(count: number): string {
		if (count === 0) return 'bg-secondary/40';
		const ratio = count / maxCount;
		if (ratio <= 0.25) return 'bg-emerald-900/80';
		if (ratio <= 0.5) return 'bg-emerald-700/80';
		if (ratio <= 0.75) return 'bg-emerald-500/80';
		return 'bg-emerald-400/90';
	}

	function formatContributionLabel(date: string, count: number): string {
		const formatted = new Date(`${date}T00:00:00`).toLocaleDateString(undefined, {
			weekday: 'short',
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});

		if (count === 0) return `No contributions on ${formatted}`;
		const label = count === 1 ? 'contribution' : 'contributions';
		return `${count} ${label} on ${formatted}`;
	}

	function showTooltipFromMouse(event: MouseEvent, date: string, count: number) {
		tooltip = {
			date,
			count,
			x: event.clientX,
			y: event.clientY
		};
	}

	function showTooltipFromFocus(event: FocusEvent, date: string, count: number) {
		const target = event.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		tooltip = {
			date,
			count,
			x: rect.left + rect.width / 2,
			y: rect.top
		};
	}

	function moveTooltip(event: MouseEvent) {
		if (!tooltip) return;
		tooltip = { ...tooltip, x: event.clientX, y: event.clientY };
	}

	function hideTooltip() {
		tooltip = null;
	}
</script>

<Card>
	<CardHeader>
		<CardTitle>{profile.name ?? username}</CardTitle>
	</CardHeader>
	<CardContent class="space-y-5">
		<dl class="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 lg:grid-cols-6">
			<div>
				<dt class="text-muted-foreground">Stars</dt>
				<dd class="text-lg font-semibold tabular-nums">{profile.totalStars.toLocaleString()}</dd>
			</div>
			<div>
				<dt class="text-muted-foreground">Repos</dt>
				<dd class="text-lg font-semibold tabular-nums">
					{profile.totalPublicRepos.toLocaleString()}
				</dd>
			</div>
			<div>
				<dt class="text-muted-foreground">Pull requests</dt>
				<dd class="text-lg font-semibold tabular-nums">
					{profile.totalPullRequests.toLocaleString()}
				</dd>
			</div>
			<div>
				<dt class="text-muted-foreground">Issues</dt>
				<dd class="text-lg font-semibold tabular-nums">
					{profile.totalIssues.toLocaleString()}
				</dd>
			</div>
			<div>
				<dt class="text-muted-foreground">Contributed repos</dt>
				<dd class="text-lg font-semibold tabular-nums">
					{profile.totalContributedRepos.toLocaleString()}
				</dd>
			</div>
			<div>
				<dt class="text-muted-foreground">Active years</dt>
				<dd class="text-lg font-semibold tabular-nums">{profile.contributionYears.length}</dd>
			</div>
		</dl>

		<div>
			<p class="mb-2 text-sm text-muted-foreground">Contribution activity</p>
			<div class="relative overflow-x-auto pb-1">
				<div class="flex min-w-max justify-around py-1">
					{#each weeks as week}
						<div class="flex flex-col gap-1">
							{#each week as day}
								<button
									type="button"
									class="size-2.5 rounded-sm {cellLevel(day.count)} transition-transform hover:scale-125 hover:ring-1 hover:ring-emerald-300/60 focus-visible:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
									aria-label={formatContributionLabel(day.date, day.count)}
									onmouseenter={(event) => showTooltipFromMouse(event, day.date, day.count)}
									onmousemove={moveTooltip}
									onmouseleave={hideTooltip}
									onfocus={(event) => showTooltipFromFocus(event, day.date, day.count)}
									onblur={hideTooltip}
								></button>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</CardContent>
</Card>

{#if tooltip}
	<div
		class="pointer-events-none fixed z-50 rounded-md border border-border bg-popover px-2.5 py-1.5 text-xs text-popover-foreground shadow-lg"
		style:left="{tooltip.x + 12}px"
		style:top="{tooltip.y - 36}px"
		role="tooltip"
	>
		{formatContributionLabel(tooltip.date, tooltip.count)}
	</div>
{/if}
