export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","apple-touch-icon-precomposed.png","apple-touch-icon.png","data/github-stats.json","favicon-32x32.png","favicon.ico","favicons/rocket.svg"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BjCh2RKE.js",app:"_app/immutable/entry/app.DVbVK5UV.js",imports:["_app/immutable/entry/start.BjCh2RKE.js","_app/immutable/chunks/C36rzVfT.js","_app/immutable/chunks/CvnyNdeJ.js","_app/immutable/chunks/Dr-Srf26.js","_app/immutable/entry/app.DVbVK5UV.js","_app/immutable/chunks/0NDYxwLv.js","_app/immutable/chunks/CvnyNdeJ.js","_app/immutable/chunks/CGkJNhQj.js","_app/immutable/chunks/Cet9fq4w.js","_app/immutable/chunks/x6hNtP01.js","_app/immutable/chunks/Dr-Srf26.js","_app/immutable/chunks/pLJjJrYb.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/designs/canva/","/exercise/","/resume/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
