<script lang="ts">
	type Props = {
		class?: string;
	};

	let { class: className = 'size-4 shrink-0' }: Props = $props();
</script>

<svg class={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
	<path
		d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.615 18.5h-1.77V5.5h1.77v13zm4.615 0h-1.77v-7.5h1.77v7.5zm-9.23 0H4.385V9.5h1.77v9z"
	/>
</svg>
