<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { particlesHomeConfig } from '$lib/data/particles-config';

	let mounted = $state(false);

	function patchParticlesDeepExtend() {
		Object.deepExtend = function deepExtend(
			destination: Record<string, unknown>,
			source: Record<string, unknown>
		) {
			for (const property in source) {
				const value = source[property];
				if (value && typeof value === 'object' && value.constructor === Object) {
					destination[property] = (destination[property] as Record<string, unknown>) ?? {};
					deepExtend(
						destination[property] as Record<string, unknown>,
						value as Record<string, unknown>
					);
				} else {
					destination[property] = value;
				}
			}
			return destination;
		};
	}

	onMount(async () => {
		if (!browser) return;

		await import('particles.js');
		patchParticlesDeepExtend();

		const particlesJS = (window as Window & { particlesJS?: (id: string, config: unknown) => void })
			.particlesJS;

		if (particlesJS) {
			particlesJS('particles-js', particlesHomeConfig);
			mounted = true;
		}
	});
</script>

<div
	id="particles-js"
	class="print:hidden absolute top-0 left-0 bottom-0 right-0 z-0 {mounted ? 'opacity-100' : 'opacity-0'}"
	aria-hidden="true"
></div>
