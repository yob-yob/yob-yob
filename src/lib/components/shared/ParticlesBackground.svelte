<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { particlesHomeConfig } from '$lib/data/particles-config';

	let mounted = $state(false);

	onMount(async () => {
		if (!browser) return;

		await import('particles.js');
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
