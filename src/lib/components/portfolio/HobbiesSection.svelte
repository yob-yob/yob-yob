<script lang="ts">
	import { Sparkles } from 'lucide-svelte';
	import { portfolio } from '$lib/data/portfolio';
	import SectionHeading from './SectionHeading.svelte';
</script>

<SectionHeading id="hobbies" title="Hobbies & Interests" icon={Sparkles} class="mb-12">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div>
			<h3 class="text-xl font-semibold text-white mb-4">Hobbies</h3>
			<ul class="space-y-2 text-slate-300">
				{#each portfolio.hobbies.hobbies as hobby}
					<li class="flex items-center gap-2">
						<span class="text-xl">{hobby.icon}</span>
						<span>
							{hobby.name}
							{#if hobby.note}
								<span class="text-slate-500 text-sm">({hobby.note})</span>
							{/if}
						</span>
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<h3 class="text-xl font-semibold text-white mb-4">Interests</h3>
			<ul class="space-y-2 text-slate-300">
				{#each portfolio.hobbies.interests as interest}
					<li class="flex items-center gap-2">
						<span class="text-xl">{interest.icon}</span>
						<span>{interest.name}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</SectionHeading>
