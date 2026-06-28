/// <reference types="@sveltejs/kit" />

declare global {
	interface Window {
		particlesJS?: (id: string, config: unknown) => void;
	}

	interface Object {
		deepExtend?: (
			destination: Record<string, unknown>,
			source: Record<string, unknown>
		) => Record<string, unknown>;
	}
}

export {};
