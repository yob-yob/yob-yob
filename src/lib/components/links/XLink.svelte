<script lang="ts">
	import BrandedProfileLink from './BrandedProfileLink.svelte';
	import XIcon from './icons/XIcon.svelte';

	type Props = {
		href: string;
		label: string;
	};

	let { href, label }: Props = $props();
</script>

<BrandedProfileLink
	{href}
	{label}
	icon={XIcon}
	class="bg-black text-white hover:bg-slate-900 border border-slate-700"
/>
