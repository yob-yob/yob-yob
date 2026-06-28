<script lang="ts">
	import { page } from '$app/state';
	import NotFound from '$lib/components/shared/NotFound.svelte';
</script>

<svelte:head>
	<title>{page.status === 404 ? '404 - Page Not Found' : `Error ${page.status}`} | Grover Sean Reyes</title>
	<meta name="robots" content="noindex" />
</svelte:head>

{#if page.status === 404}
	<NotFound />
{:else}
	<div class="relative container mx-auto px-4 py-16 max-w-4xl z-10 text-center">
		<h1 class="text-4xl font-bold mb-4 text-white">Something went wrong</h1>
		<p class="text-slate-400 mb-6">Error {page.status}: {page.error?.message ?? 'Unexpected error'}</p>
		<a href="/" class="text-blue-400 hover:text-blue-300 underline">Return home</a>
	</div>
{/if}
