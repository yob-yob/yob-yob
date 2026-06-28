<script lang="ts">
	import BrandedProfileLink from './BrandedProfileLink.svelte';
	import AwsIcon from './icons/AwsIcon.svelte';

	type Props = {
		href: string;
		label: string;
	};

	let { href, label }: Props = $props();
</script>

<BrandedProfileLink
	{href}
	{label}
	icon={AwsIcon}
	class="bg-[#232f3e] text-[#ff9900] hover:bg-[#1a242f] border border-[#ff9900]/30"
/>
