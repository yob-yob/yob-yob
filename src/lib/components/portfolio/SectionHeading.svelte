<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Star } from 'lucide-svelte';

	type IconComponent = typeof Star;

	type Props = {
		title: string;
		icon?: IconComponent;
		children: Snippet;
		class?: string;
	};

	let { title, icon: IconComponent, children, class: className = 'mb-12' }: Props = $props();
</script>

<section class={className}>
	<h2 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">
		{#if IconComponent}
			<IconComponent class="w-10 h-10 shrink-0" />
		{/if}
		{title}
	</h2>
	{@render children()}
</section>
