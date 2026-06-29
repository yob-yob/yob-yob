<script lang="ts">
	import { onMount } from 'svelte';
	import { initPortfolioSectionTracking } from '$lib/track-portfolio-sections';

	onMount(() => initPortfolioSectionTracking());
</script>
