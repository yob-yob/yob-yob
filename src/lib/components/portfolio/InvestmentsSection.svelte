<script lang="ts">
	import { portfolio } from '$lib/data/portfolio';
	import { Card, CardContent } from '$lib/components/ui/card';
	import SectionHeading from './SectionHeading.svelte';

	const borderColors: Record<string, string> = {
		blue: 'border-blue-500',
		green: 'border-green-500',
		purple: 'border-purple-500',
		yellow: 'border-yellow-500',
		indigo: 'border-indigo-500'
	};
</script>

<SectionHeading id="investments" title="Investment in Myself" class="mb-12">
	<Card class="bg-slate-800 border-slate-700 shadow-lg">
		<CardContent class="p-6">
			<p class="text-slate-300 mb-6 leading-relaxed">{portfolio.investments.description}</p>
			<div class="space-y-4">
				{#each portfolio.investments.items as item}
					<div class="border-l-4 {borderColors[item.borderColor]} pl-4">
						<h3 class="text-lg font-semibold text-white mb-1">{item.name}</h3>
						<p class="text-slate-300 text-sm">
							{item.description}
							{#if item.url}
								{' '}
								<a
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									class="text-blue-400 hover:text-blue-300 underline"
								>
									Learn more
								</a>
							{/if}
						</p>
					</div>
				{/each}
			</div>
		</CardContent>
	</Card>
</SectionHeading>
