<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { portfolio } from '$lib/data/portfolio';
	import { initOpenPanel } from '$lib/openpanel';

	let { children } = $props();

	onMount(() => {
		initOpenPanel();
	});

	const isResume = $derived(page.url.pathname.startsWith('/resume'));
	const currentYear = new Date().getFullYear();
</script>

<svelte:head>
	<title>{isResume ? `${portfolio.personal.name} - Resume` : `${portfolio.personal.name} - Portfolio`}</title>
	<meta
		name="description"
		content={isResume ? portfolio.about.resumeSummary : portfolio.about.summary}
	/>
</svelte:head>

<div class="dark min-h-screen {isResume ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-slate-100 relative'}">
	{@render children()}

	{#if !isResume}
		<footer class="relative z-10 text-center py-6 text-slate-400 space-y-2">
			<p>© {currentYear} {portfolio.personal.name}. All rights reserved.</p>
			<p class="text-sm">
				Made with ❤️ by Sean
			</p>
		</footer>
	{/if}
</div>
