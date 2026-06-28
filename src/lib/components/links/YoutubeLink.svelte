<script lang="ts">
	import BrandedProfileLink from './BrandedProfileLink.svelte';
	import YoutubeIcon from './icons/YoutubeIcon.svelte';

	type Props = {
		href: string;
		label: string;
	};

	let { href, label }: Props = $props();
</script>

<BrandedProfileLink
	{href}
	{label}
	icon={YoutubeIcon}
	class="bg-[#ffffff] text-black hover:bg-[#ffe3e7]"
/>
