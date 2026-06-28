<script lang="ts">
	import BrandedProfileLink from './BrandedProfileLink.svelte';
	import StackOverflowIcon from './icons/StackOverflowIcon.svelte';

	type Props = {
		href: string;
		label: string;
	};

	let { href, label }: Props = $props();
</script>

<BrandedProfileLink
	{href}
	{label}
	icon={StackOverflowIcon}
	class="bg-[#f48024] text-white hover:bg-[#e4721a]"
/>
