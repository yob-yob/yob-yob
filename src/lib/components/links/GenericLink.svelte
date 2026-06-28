<script lang="ts">
	import BrandedProfileLink from './BrandedProfileLink.svelte';
	import GenericIcon from './icons/GenericIcon.svelte';

	type Props = {
		href: string;
		label: string;
	};

	let { href, label }: Props = $props();
</script>

<BrandedProfileLink
	{href}
	{label}
	icon={GenericIcon}
	class="bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-600"
/>
