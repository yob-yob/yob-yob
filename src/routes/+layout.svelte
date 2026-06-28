<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { portfolio } from '$lib/data/portfolio';

	let { children } = $props();

	const isResume = $derived(page.url.pathname.startsWith('/resume'));
</script>

<svelte:head>
	<title>{isResume ? `${portfolio.personal.name} - Resume` : `${portfolio.personal.name} - Portfolio`}</title>
	<meta
		name="description"
		content={isResume ? portfolio.about.resumeSummary : portfolio.about.summary}
	/>
</svelte:head>

<div class="dark min-h-screen {isResume ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-slate-100 relative'}">
	{#if !isResume}
		<nav class="relative z-10 container mx-auto px-4 pt-4 max-w-4xl">
			<div class="flex gap-4 text-sm text-slate-400">
				<a href="/" class="hover:text-white transition-colors">Portfolio</a>
				<a href="/resume" class="hover:text-white transition-colors">Resume</a>
			</div>
		</nav>
	{/if}

	{@render children()}

	{#if !isResume}
		<footer class="relative z-10 text-center py-6 text-slate-400">
			<p>{portfolio.meta.copyright}</p>
		</footer>
	{/if}
</div>
