<script lang="ts">
	import { Link } from 'lucide-svelte';
	import { portfolio } from '$lib/data/portfolio';
	import ProfileLinkButton from '$lib/components/links/ProfileLinkButton.svelte';
	import SectionHeading from './SectionHeading.svelte';
</script>

<SectionHeading title="Links" icon={Link} class="mb-12">
	<div class="space-y-8">
		<div>
			<h3 class="text-xl font-semibold text-white mb-4">Social Links</h3>
			<div class="flex flex-wrap gap-3">
				{#each portfolio.links.social as link (link.id)}
					<ProfileLinkButton {link} />
				{/each}
			</div>
		</div>

		{#if portfolio.links.certificates.length > 0}
			<div>
				<h3 class="text-xl font-semibold text-white mb-4">Certificates</h3>
				<div class="flex flex-wrap gap-3">
					{#each portfolio.links.certificates as link (link.id)}
						<ProfileLinkButton {link} />
					{/each}
				</div>
			</div>
		{/if}
	</div>
</SectionHeading>
