<script lang="ts">
	import { Newspaper } from 'lucide-svelte';
	import SectionHeading from './SectionHeading.svelte';
	import posts from '../../../../blog/posts.json';

	function slugify(title: string): string {
		return title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');
	}

	const latestPosts = posts.slice(0, 3).map((post) => ({
		...post,
		slug: slugify(post.title)
	}));
</script>

<SectionHeading id="blogs" title="Blogs" icon={Newspaper} class="mb-12">
	<div class="space-y-4">
		{#each latestPosts as post}
			<a
				href="/blogs/{post.slug}/"
				class="block group rounded-xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-5 hover:border-slate-600 hover:bg-slate-800/60 transition-all"
			>
				<div class="flex items-center gap-4">
					{#if post.image}
						<img
							src={post.image}
							alt={post.title}
							class="w-12 h-12 rounded-lg object-contain bg-slate-700/50 p-1.5 shrink-0"
						/>
					{/if}
					<div class="flex-1 min-w-0">
						<h3 class="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors truncate">
							{post.title}
						</h3>
						{#if post.subtitle}
							<p class="text-sm text-slate-400 mt-0.5">{post.subtitle}</p>
						{/if}
					</div>
				</div>
			</a>
		{/each}

		<a
			href="/blogs/"
			class="inline-block text-sm text-slate-400 hover:text-slate-200 transition-colors mt-2"
		>
			View all posts &rarr;
		</a>
	</div>
</SectionHeading>
