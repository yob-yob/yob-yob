<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type Props = HTMLAttributes<HTMLHeadingElement> & {
		class?: string;
		children?: import('svelte').Snippet;
	};

	let { class: className, children, ...restProps }: Props = $props();
</script>

<h3 class={cn('font-semibold leading-none tracking-tight', className)} {...restProps}>
	{@render children?.()}
</h3>
