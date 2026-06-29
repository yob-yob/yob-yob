<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { portfolio } from '$lib/data/portfolio';
	import { trackInternalLinkClick } from '$lib/openpanel';
</script>

<div class="relative container mx-auto px-4 py-16 max-w-4xl z-10 text-center">
	<p class="text-8xl mb-6" aria-hidden="true">🚀</p>
	<h1 class="text-6xl font-bold mb-2 text-white">404</h1>
	<h2 class="text-2xl font-semibold mb-4 text-slate-200">Page not found</h2>
	<p class="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
		The page you are looking for does not exist or may have moved. Head back to the portfolio
		or resume.
	</p>
	<div class="flex flex-wrap justify-center gap-3">
		<Button
			href="/"
			variant="pill"
			onclick={() =>
				trackInternalLinkClick({ href: '/', label: 'Back to Portfolio', section: 'not_found' })}
		>
			Back to Portfolio
		</Button>
		<Button
			href="/resume/"
			variant="outline"
			class="border-slate-600 text-slate-200 hover:bg-slate-800"
			onclick={() =>
				trackInternalLinkClick({ href: '/resume/', label: 'View Resume', section: 'not_found' })}
		>
			View Resume
		</Button>
	</div>
	<p class="mt-12 text-sm text-slate-500">{portfolio.personal.name}</p>
</div>
