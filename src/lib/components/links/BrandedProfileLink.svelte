<script lang="ts">
	import { Link } from 'lucide-svelte';
	import type { Component } from 'svelte';
	import { cn } from '$lib/utils';

	type Props = {
		href: string;
		label: string;
		icon: Component<{ class?: string }>;
		class?: string;
		iconClass?: string;
	};

	let { href, label, icon: Icon, class: className, iconClass }: Props = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class={cn(
		'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
		className
	)}
>
	<Icon class={iconClass ?? 'size-4 shrink-0'} />
	<span>{label}</span>
</a>
