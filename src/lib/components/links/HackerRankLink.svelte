<script lang="ts">
	import BrandedProfileLink from './BrandedProfileLink.svelte';
	import HackerRankIcon from './icons/HackerRankIcon.svelte';

	type Props = {
		href: string;
		label: string;
	};

	let { href, label }: Props = $props();
</script>

<BrandedProfileLink
	{href}
	{label}
	icon={HackerRankIcon}
	class="bg-[#101517] text-[#00ea64] hover:bg-[#1a2128] border border-[#00ea64]/30"
/>
