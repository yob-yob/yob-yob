<script lang="ts">
	type Props = {
		class?: string;
	};

	let { class: className = 'size-5 shrink-0' }: Props = $props();
</script>

<span class={className}>🇵🇭</span>
