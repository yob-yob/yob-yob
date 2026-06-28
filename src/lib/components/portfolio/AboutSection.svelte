<script lang="ts">
	import { portfolio } from '$lib/data/portfolio';
	import SectionHeading from './SectionHeading.svelte';
</script>

<SectionHeading id="about" title="About Me">
	<p class="text-slate-300 leading-relaxed">{portfolio.about.summary}</p>
</SectionHeading>
