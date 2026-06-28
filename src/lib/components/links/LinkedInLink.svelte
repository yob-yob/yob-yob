<script lang="ts">
	import BrandedProfileLink from './BrandedProfileLink.svelte';
	import LinkedInIcon from './icons/LinkedInIcon.svelte';

	type Props = {
		href: string;
		label: string;
	};

	let { href, label }: Props = $props();
</script>

<BrandedProfileLink
	{href}
	{label}
	icon={LinkedInIcon}
	class="bg-[#0a66c2] text-white hover:bg-[#004182]"
/>
