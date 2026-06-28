/// <reference types="@sveltejs/kit" />

declare global {
	interface Window {
		particlesJS?: (id: string, config: unknown) => void;
	}
}

export {};
