<script lang="ts">
	import BrandedProfileLink from './BrandedProfileLink.svelte';
	import FacebookIcon from './icons/FacebookIcon.svelte';

	type Props = {
		href: string;
		label: string;
	};

	let { href, label }: Props = $props();
</script>

<BrandedProfileLink
	{href}
	{label}
	icon={FacebookIcon}
	class="bg-[#1877f2] text-white hover:bg-[#166fe5]"
/>
