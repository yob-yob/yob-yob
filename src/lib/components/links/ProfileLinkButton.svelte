<script lang="ts">
	import type { ProfileLink } from '$lib/data/portfolio';
	import { getWebsiteLinkComponent } from './website-links';

	type Props = {
		link: ProfileLink;
	};

	let { link }: Props = $props();

	const LinkComponent = $derived(getWebsiteLinkComponent(link.website));
</script>

<LinkComponent href={link.url} label={link.label} />
