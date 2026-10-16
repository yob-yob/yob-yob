<script lang="ts">
	import { onMount } from 'svelte';

	let { data } = $props();

	// Standalone HTML posts ship their own inline <script>. Markup inserted via
	// {@html} never executes script tags, so run it ourselves once the post's
	// DOM is on the page. Wrapped in an IIFE so top-level declarations don't
	// collide when navigating between posts client-side.
	onMount(() => {
		if (data.format !== 'html' || !data.script) return;
		const el = document.createElement('script');
		el.textContent = `(function(){\n${data.script}\n})();`;
		document.body.appendChild(el);
		return () => el.remove();
	});
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.description} />
	{#if data.format === 'html' && data.styles}
		{@html `<style>${data.styles}</style>`}
	{/if}
</svelte:head>

{#if data.format === 'html'}
	<div class="relative container mx-auto px-4 py-12 max-w-5xl z-10">
		<a href="/blogs/" class="text-slate-400 hover:text-slate-200 transition-colors text-sm mb-8 inline-block">
			&larr; Back to blog
		</a>

		<div class="html-post rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
			{@html data.content}
		</div>

		{#if data.post.tags}
			<div class="flex flex-wrap gap-2 mt-10 pt-6 border-t border-slate-700/50">
				{#each data.post.tags as tag}
					<span class="text-xs px-2.5 py-1 rounded-full bg-slate-700/60 text-slate-300">
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</div>
{:else}
	<div class="relative container mx-auto px-4 py-12 max-w-3xl z-10">
		<a href="/blogs/" class="text-slate-400 hover:text-slate-200 transition-colors text-sm mb-8 inline-block">
			&larr; Back to blog
		</a>

		{#if data.post.image}
			<div class="mb-8 flex justify-center">
				<img
					src={data.post.image}
					alt={data.post.title}
					class="w-24 h-24 rounded-xl object-contain bg-slate-800/60 p-3"
				/>
			</div>
		{/if}

		<article class="prose prose-invert prose-slate max-w-none
			prose-headings:text-slate-100
			prose-p:text-slate-300
			prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
			prose-strong:text-slate-200
			prose-code:text-orange-300 prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
			prose-pre:bg-slate-800/80 prose-pre:border prose-pre:border-slate-700/50 prose-pre:rounded-xl
			prose-blockquote:border-slate-600 prose-blockquote:text-slate-400
			prose-li:text-slate-300
			prose-hr:border-slate-700
		">
			{@html data.content}
		</article>

		{#if data.post.tags}
			<div class="flex flex-wrap gap-2 mt-10 pt-6 border-t border-slate-700/50">
				{#each data.post.tags as tag}
					<span class="text-xs px-2.5 py-1 rounded-full bg-slate-700/60 text-slate-300">
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</div>
{/if}

<style>
	/*
	 * Tailwind's preflight strips heading sizes/weights and list styles.
	 * Restore browser-like defaults inside standalone HTML posts so their own
	 * stylesheet (which assumes a plain document) renders as the author intended.
	 * Kept at low specificity (:where) so the post's own rules always win.
	 */
	:global(:where(.html-post) h1) {
		font-size: 2em;
		font-weight: 700;
	}
	:global(:where(.html-post) h2) {
		font-size: 1.5em;
		font-weight: 700;
	}
	:global(:where(.html-post) h3) {
		font-size: 1.17em;
		font-weight: 700;
	}
	:global(:where(.html-post) h4) {
		font-weight: 700;
	}
	:global(:where(.html-post) ul) {
		list-style: disc;
		padding-left: 1.5em;
		margin: 1em 0;
	}
	:global(:where(.html-post) ol) {
		list-style: decimal;
		padding-left: 1.5em;
		margin: 1em 0;
	}
	:global(:where(.html-post) th) {
		font-weight: 700;
	}
	:global(:where(.html-post) a) {
		text-decoration: underline;
	}
</style>
