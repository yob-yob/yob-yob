import type { PageServerLoad } from './$types';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export const load: PageServerLoad = async () => {
	const postsPath = resolve('blog/posts.json');
	const posts = JSON.parse(readFileSync(postsPath, 'utf-8'));

	return {
		posts: posts.map((post: { title: string; [key: string]: unknown }) => ({
			...post,
			slug: post.title
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, '-')
				.replace(/(^-|-$)/g, '')
		}))
	};
};
