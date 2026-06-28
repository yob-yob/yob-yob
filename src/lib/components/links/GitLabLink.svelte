<script lang="ts">
	import BrandedProfileLink from './BrandedProfileLink.svelte';
	import GitLabIcon from './icons/GitLabIcon.svelte';

	type Props = {
		href: string;
		label: string;
	};

	let { href, label }: Props = $props();
</script>

<BrandedProfileLink
	{href}
	{label}
	icon={GitLabIcon}
	class="bg-white text-slate-800 hover:bg-slate-100 border border-slate-300"
/>
