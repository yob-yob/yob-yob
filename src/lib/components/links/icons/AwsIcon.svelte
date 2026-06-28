<script lang="ts">
	type Props = {
		class?: string;
	};

	let { class: className = 'size-4 shrink-0' }: Props = $props();
</script>

<svg class={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
	<path
		d="M6.763 10.036h8.884L18.89 4H5.113l1.65 6.036zm-.654 1.097H14.8l-1.674 6.051H3.435l2.674-6.05zM14.013 4 12 10.066 9.987 4H2.25l3.263 11.903L2.25 20h7.737L12 13.934 13.513 20h7.737l-3.263-4.097L21.75 4h-7.737z"
	/>
</svg>
