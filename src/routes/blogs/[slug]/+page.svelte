<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.subtitle || data.post.title} />
</svelte:head>

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
