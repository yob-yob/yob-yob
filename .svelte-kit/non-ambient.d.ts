
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/designs" | "/designs/canva" | "/exercise" | "/resume";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/designs": Record<string, never>;
			"/designs/canva": Record<string, never>;
			"/exercise": Record<string, never>;
			"/resume": Record<string, never>
		};
		Pathname(): "/" | "/designs/canva/" | "/exercise/" | "/resume/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/CNAME" | "/apple-touch-icon-precomposed.png" | "/apple-touch-icon.png" | "/data/github-stats.json" | "/favicon-32x32.png" | "/favicon.ico" | "/favicons/rocket.svg" | string & {};
	}
}