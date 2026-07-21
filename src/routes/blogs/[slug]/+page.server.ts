import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function slugify(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

function getPosts() {
	const postsPath = resolve('blog/posts.json');
	return JSON.parse(readFileSync(postsPath, 'utf-8'));
}

export function entries() {
	const posts = getPosts();
	return posts.map((post: { title: string }) => ({ slug: slugify(post.title) }));
}

export const load: PageServerLoad = async ({ params }) => {
	const posts = getPosts();
	const post = posts.find((p: { title: string }) => slugify(p.title) === params.slug);

	if (!post) {
		error(404, 'Post not found');
	}

	const mdPath = resolve('blog', post.file);
	let rawMarkdown: string;

	try {
		rawMarkdown = readFileSync(mdPath, 'utf-8');
	} catch {
		error(404, 'Post content not found');
	}

	const content = marked.parse(rawMarkdown) as string;

	return {
		post: { ...post, slug: params.slug },
		content
	};
};
