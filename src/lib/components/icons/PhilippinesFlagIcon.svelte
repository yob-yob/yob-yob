<script lang="ts">
	type Props = {
		class?: string;
	};

	let { class: className = 'size-5 shrink-0' }: Props = $props();
</script>

<svg class={className} viewBox="0 0 900 450" aria-hidden="true">
	<rect width="900" height="225" fill="#0038a8" />
	<rect y="225" width="900" height="225" fill="#ce1126" />
	<polygon points="0,0 450,225 0,450" fill="#ffffff" />
	<circle cx="180" cy="225" r="52" fill="#fcd116" />
	<polygon
		points="180,178 188,205 216,205 193,222 201,249 180,232 159,249 167,222 144,205 172,205"
		fill="#fcd116"
	/>
	<polygon points="75,55 79,68 93,68 82,76 86,89 75,81 64,89 68,76 57,68 71,68" fill="#fcd116" />
	<polygon points="115,95 119,108 133,108 122,116 126,129 115,121 104,129 108,116 97,108 111,108" fill="#fcd116" />
	<polygon points="115,321 119,334 133,334 122,342 126,355 115,347 104,355 108,342 97,334 111,334" fill="#fcd116" />
	<polygon points="75,361 79,374 93,374 82,382 86,395 75,387 64,395 68,382 57,374 71,374" fill="#fcd116" />
</svg>
