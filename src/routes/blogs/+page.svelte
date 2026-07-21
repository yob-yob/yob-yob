<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog Posts</title>
	<meta name="description" content="Blog posts about self-hosting, development, and tech." />
</svelte:head>

<div class="relative container mx-auto px-4 py-12 max-w-4xl z-10">
	<a href="/" class="text-slate-400 hover:text-slate-200 transition-colors text-sm mb-8 inline-block">
		&larr; Back to home
	</a>

	<h1 class="text-4xl font-bold mb-2">Blog</h1>
	<p class="text-slate-400 mb-10">Thoughts on self-hosting, dev tools, and things that break.</p>

	<div class="space-y-6">
		{#each data.posts as post}
			<a
				href="/blogs/{post.slug}/"
				class="block group rounded-xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-6 hover:border-slate-600 hover:bg-slate-800/60 transition-all"
			>
				<div class="flex items-start gap-5">
					{#if post.image}
						<img
							src={post.image}
							alt={post.title}
							class="w-16 h-16 rounded-lg object-contain bg-slate-700/50 p-2 shrink-0"
						/>
					{/if}
					<div class="flex-1 min-w-0">
						<h2 class="text-xl font-semibold text-slate-100 group-hover:text-white transition-colors">
							{post.title}
						</h2>
						{#if post.subtitle}
							<p class="text-slate-400 mt-1">{post.subtitle}</p>
						{/if}
						{#if post.tags}
							<div class="flex flex-wrap gap-2 mt-3">
								{#each post.tags as tag}
									<span class="text-xs px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-300">
										{tag}
									</span>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
