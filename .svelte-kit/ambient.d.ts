
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const GITHUB_TOKEN: string;
	export const NODE_ENV: string;
	export const VP_TOOL_RECURSION: string;
	export const COLORTERM: string;
	export const OSLogRateLimit: string;
	export const HERD_PHP_74_INI_SCAN_DIR: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const GIT_ASKPASS: string;
	export const npm_config_user_agent: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const LESS: string;
	export const SHLVL: string;
	export const VSCODE_INJECTION: string;
	export const XPC_SERVICE_NAME: string;
	export const CURSOR_CLI_MODE: string;
	export const LANG: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_package_version: string;
	export const P9K_TTY: string;
	export const npm_package_name: string;
	export const EDITOR: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_lifecycle_event: string;
	export const VSCODE_NONCE: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const XPC_FLAGS: string;
	export const npm_command: string;
	export const USER: string;
	export const __CFBundleIdentifier: string;
	export const npm_package_json: string;
	export const LaunchInstanceID: string;
	export const HERD_PHP_84_INI_SCAN_DIR: string;
	export const TERM_SESSION_ID: string;
	export const PATH: string;
	export const HERD_PHP_83_INI_SCAN_DIR: string;
	export const npm_execpath: string;
	export const LSCOLORS: string;
	export const HERD_PHP_80_INI_SCAN_DIR: string;
	export const HERD_PHP_82_INI_SCAN_DIR: string;
	export const FZF_DEFAULT_OPTS: string;
	export const HERD_PHP_81_INI_SCAN_DIR: string;
	export const VSCODE_PROFILE_INITIALIZED: string;
	export const SECURITYSESSIONID: string;
	export const CURSOR_CLI: string;
	export const SSH_AUTH_SOCK: string;
	export const COMMAND_MODE: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const USER_ZDOTDIR: string;
	export const npm_lifecycle_script: string;
	export const LS_COLORS: string;
	export const NVM_DIR: string;
	export const ZSH: string;
	export const TMPDIR: string;
	export const TERM: string;
	export const MallocNanoZone: string;
	export const LOGNAME: string;
	export const npm_config_local_prefix: string;
	export const SHELL: string;
	export const ZDOTDIR: string;
	export const TERM_PROGRAM_VERSION: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const PWD: string;
	export const NVM_CD_FLAGS: string;
	export const NODE: string;
	export const P9K_SSH: string;
	export const FPATH: string;
	export const BUN_INSTALL: string;
	export const _P9K_TTY: string;
	export const PAGER: string;
	export const PNPM_HOME: string;
	export const NVM_BIN: string;
	export const HOMEBREW_PREFIX: string;
	export const HOMEBREW_REPOSITORY: string;
	export const HERD_PHP_85_INI_SCAN_DIR: string;
	export const _P9K_SSH_TTY: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const HOME: string;
	export const TERM_PROGRAM: string;
	export const NVM_INC: string;
	export const VSCODE_GIT_IPC_AUTH_TOKEN: string;
	export const SVELTEKIT_FORK: string;
	export const npm_node_execpath: string;
	export const _: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		GITHUB_TOKEN: string;
		NODE_ENV: string;
		VP_TOOL_RECURSION: string;
		COLORTERM: string;
		OSLogRateLimit: string;
		HERD_PHP_74_INI_SCAN_DIR: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		GIT_ASKPASS: string;
		npm_config_user_agent: string;
		VSCODE_GIT_IPC_HANDLE: string;
		LESS: string;
		SHLVL: string;
		VSCODE_INJECTION: string;
		XPC_SERVICE_NAME: string;
		CURSOR_CLI_MODE: string;
		LANG: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_package_version: string;
		P9K_TTY: string;
		npm_package_name: string;
		EDITOR: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_lifecycle_event: string;
		VSCODE_NONCE: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		XPC_FLAGS: string;
		npm_command: string;
		USER: string;
		__CFBundleIdentifier: string;
		npm_package_json: string;
		LaunchInstanceID: string;
		HERD_PHP_84_INI_SCAN_DIR: string;
		TERM_SESSION_ID: string;
		PATH: string;
		HERD_PHP_83_INI_SCAN_DIR: string;
		npm_execpath: string;
		LSCOLORS: string;
		HERD_PHP_80_INI_SCAN_DIR: string;
		HERD_PHP_82_INI_SCAN_DIR: string;
		FZF_DEFAULT_OPTS: string;
		HERD_PHP_81_INI_SCAN_DIR: string;
		VSCODE_PROFILE_INITIALIZED: string;
		SECURITYSESSIONID: string;
		CURSOR_CLI: string;
		SSH_AUTH_SOCK: string;
		COMMAND_MODE: string;
		FZF_DEFAULT_COMMAND: string;
		USER_ZDOTDIR: string;
		npm_lifecycle_script: string;
		LS_COLORS: string;
		NVM_DIR: string;
		ZSH: string;
		TMPDIR: string;
		TERM: string;
		MallocNanoZone: string;
		LOGNAME: string;
		npm_config_local_prefix: string;
		SHELL: string;
		ZDOTDIR: string;
		TERM_PROGRAM_VERSION: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		PWD: string;
		NVM_CD_FLAGS: string;
		NODE: string;
		P9K_SSH: string;
		FPATH: string;
		BUN_INSTALL: string;
		_P9K_TTY: string;
		PAGER: string;
		PNPM_HOME: string;
		NVM_BIN: string;
		HOMEBREW_PREFIX: string;
		HOMEBREW_REPOSITORY: string;
		HERD_PHP_85_INI_SCAN_DIR: string;
		_P9K_SSH_TTY: string;
		__CF_USER_TEXT_ENCODING: string;
		HOME: string;
		TERM_PROGRAM: string;
		NVM_INC: string;
		VSCODE_GIT_IPC_AUTH_TOKEN: string;
		SVELTEKIT_FORK: string;
		npm_node_execpath: string;
		_: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
