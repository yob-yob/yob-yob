<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type Props = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		children?: import('svelte').Snippet;
	};

	let { class: className, children, ...restProps }: Props = $props();
</script>

<div class={cn('rounded-xl border bg-card text-card-foreground shadow', className)} {...restProps}>
	{@render children?.()}
</div>
