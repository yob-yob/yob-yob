<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>Grover Sean Reyes - Resume</title>
</svelte:head>

<div class="legal-paper text-slate-900">
	{@render children()}
</div>

<div class="no-print text-center mt-4 text-slate-600 text-sm">
	<p>Press Ctrl+P (or Cmd+P on Mac) to print this resume</p>
</div>

<style>
	@media print {
		@page {
			size: 8.5in 14in;
			margin: 0.5in;
		}

		:global(*) {
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}

		:global(body) {
			background: white !important;
			margin: 0;
			padding: 0;
		}

		.legal-paper {
			width: 100%;
			max-width: 8.5in;
			height: auto;
			max-height: 14in;
			border: 1px solid black;
			background: white;
			box-shadow: none;
			margin: 0;
			padding: 0.5in;
			overflow: hidden;
			page-break-after: avoid;
			page-break-inside: avoid;
			box-sizing: border-box;
		}

		.no-print {
			display: none;
		}
	}

	@media screen {
		:global(body) {
			background: #f3f4f6 !important;
		}

		.legal-paper {
			width: 8.5in;
			min-height: 14in;
			background: white;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
			margin: 20px auto;
			padding: 0.5in;
		}
	}

	:global(.section-divider) {
		border-top: 2px solid #3b82f6;
		margin: 0.5rem 0;
	}

	:global(.compact-text) {
		font-size: 0.75rem;
		line-height: 1.3;
	}

	:global(.compact-heading) {
		font-size: 0.875rem;
		font-weight: 600;
		margin-top: 0.5rem;
		margin-bottom: 0.25rem;
	}

	:global(.compact-list) {
		font-size: 0.7rem;
		line-height: 1.2;
		margin-left: 0.75rem;
	}

	:global(.tech-pill) {
		display: inline-block;
		padding: 0.15rem 0.5rem;
		margin: 0.15rem 0.2rem 0.15rem 0;
		background-color: #e5e7eb;
		border-radius: 9999px;
		font-size: 0.65rem;
		color: #374151;
		border: 1px solid #d1d5db;
	}
</style>
