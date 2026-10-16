import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const HTML_SCOPE = '.html-post';

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

/**
 * Prefix every selector in a stylesheet with `scope` so a standalone HTML
 * post's styles cannot leak into the rest of the site. `:root`, `html` and
 * `body` selectors are mapped onto the scope element itself. Nested at-rules
 * (@media, @supports, ...) are walked recursively.
 */
function scopeCss(css: string, scope: string): string {
	const src = css.replace(/\/\*[\s\S]*?\*\//g, '');
	let pos = 0;

	const scopeSelector = (selector: string): string => {
		const s = selector.trim();
		if (s === ':root' || s === 'html' || s === 'body') return scope;
		return `${scope} ${s.replace(/^(html|body)\s+/, '')}`;
	};

	const parseRules = (): string => {
		let out = '';
		while (pos < src.length) {
			while (pos < src.length && /\s/.test(src[pos])) pos++;
			if (pos >= src.length || src[pos] === '}') break;

			const braceIdx = src.indexOf('{', pos);
			if (braceIdx === -1) break;
			const prelude = src.slice(pos, braceIdx).trim();
			pos = braceIdx + 1;

			if (prelude.startsWith('@')) {
				if (/^@(media|supports|container|layer)\b/.test(prelude)) {
					const inner = parseRules();
					pos++; // closing brace of the at-rule
					out += `${prelude}{${inner}}`;
				} else {
					// @font-face, @keyframes, ...: copy verbatim up to the matching brace
					const start = pos;
					let depth = 1;
					while (pos < src.length && depth > 0) {
						if (src[pos] === '{') depth++;
						else if (src[pos] === '}') depth--;
						pos++;
					}
					out += `${prelude}{${src.slice(start, pos - 1)}}`;
				}
				continue;
			}

			const endIdx = src.indexOf('}', pos);
			const declarations = src.slice(pos, endIdx === -1 ? src.length : endIdx);
			pos = endIdx === -1 ? src.length : endIdx + 1;

			const selectors = prelude.split(',').map(scopeSelector).filter(Boolean);
			out += `${selectors.join(',')}{${declarations}}`;
		}
		return out;
	};

	return parseRules();
}

/** Split a standalone HTML document into body markup, scoped CSS and inline JS. */
function parseHtmlPost(html: string) {
	const pick = (re: RegExp) => [...html.matchAll(re)].map((m) => m[1]).join('\n');
	const styles = pick(/<style[^>]*>([\s\S]*?)<\/style>/gi);
	const script = pick(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi);
	const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1];

	const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
	const content = (bodyMatch ? bodyMatch[1] : html)
		.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
		.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
		.trim();

	return { content, styles: scopeCss(styles, HTML_SCOPE), script, description };
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

	const filePath = resolve('blog', post.file);
	let raw: string;

	try {
		raw = readFileSync(filePath, 'utf-8');
	} catch {
		error(404, 'Post content not found');
	}

	if (post.file.endsWith('.html')) {
		const parsed = parseHtmlPost(raw);
		return {
			post: { ...post, slug: params.slug },
			format: 'html' as const,
			content: parsed.content,
			styles: parsed.styles,
			script: parsed.script,
			description: parsed.description ?? post.subtitle ?? post.title
		};
	}

	const content = marked.parse(raw) as string;

	return {
		post: { ...post, slug: params.slug },
		format: 'markdown' as const,
		content,
		styles: '',
		script: '',
		description: post.subtitle || post.title
	};
};
