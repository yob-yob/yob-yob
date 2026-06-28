<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	export const badgeVariants = tv({
		base: 'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
		variants: {
			variant: {
				default: 'border-transparent bg-primary text-primary-foreground shadow',
				secondary: 'border-transparent bg-secondary text-secondary-foreground',
				destructive: 'border-transparent bg-destructive text-white shadow',
				outline: 'text-foreground',
				tech: 'border-transparent bg-blue-900 text-blue-100 rounded',
				tag: 'border-transparent bg-slate-700 text-slate-300 rounded text-sm',
				job: 'border-transparent bg-green-800 text-green-100 rounded text-sm'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type Props = {
		variant?: BadgeVariant;
		href?: string;
		class?: string;
		children?: import('svelte').Snippet;
	} & HTMLAnchorAttributes;

	let { variant = 'default', href, class: className, children, ...restProps }: Props = $props();
</script>

{#if href}
	<a {href} class={cn(badgeVariants({ variant }), className)} {...restProps}>
		{@render children?.()}
	</a>
{:else}
	<span class={cn(badgeVariants({ variant }), className)}>
		{@render children?.()}
	</span>
{/if}
