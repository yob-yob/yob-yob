<script lang="ts">
	import BrandedProfileLink from './BrandedProfileLink.svelte';
	import GitHubIcon from './icons/GitHubIcon.svelte';

	type Props = {
		href: string;
		label: string;
	};

	let { href, label }: Props = $props();
</script>

<BrandedProfileLink
	{href}
	{label}
	icon={GitHubIcon}
	class="bg-[#24292f] text-white hover:bg-[#32383f] border border-[#30363d]"
/>
