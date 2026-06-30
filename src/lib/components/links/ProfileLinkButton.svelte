<script lang="ts">
	import posthog from 'posthog-js';
	import type { ProfileLink } from '$lib/data/portfolio';
	import { getWebsiteLinkComponent } from './website-links';

	type Props = {
		link: ProfileLink;
	};

	let { link }: Props = $props();

	const LinkComponent = $derived(getWebsiteLinkComponent(link.website));
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<span onclick={() => posthog.capture('social_link_clicked', { url: link.url, label: link.label, website: link.website })}>
	<LinkComponent href={link.url} label={link.label} />
</span>
