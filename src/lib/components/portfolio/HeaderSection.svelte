<script lang="ts">
	import { FileText } from 'lucide-svelte';
	import { portfolio } from '$lib/data/portfolio';
	import { trackInternalLinkClick } from '$lib/openpanel';
	import profilePhoto from '$lib/assets/profile.jpg';
	import PhilippinesFlagIcon from '$lib/components/icons/PhilippinesFlagIcon.svelte';
	import GitHubIcon from '$lib/components/links/icons/GitHubIcon.svelte';
	import LinkedInIcon from '$lib/components/links/icons/LinkedInIcon.svelte';
</script>

<header class="text-center mb-12">
	<img
		src={profilePhoto}
		alt={portfolio.personal.name}
		class="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-slate-700 shadow-xl"
	/>
	<h1 class="text-4xl font-bold mb-2 text-white">{portfolio.personal.name}</h1>
	<p class="text-lg text-sky-400 mb-4 max-w-2xl mx-auto">{portfolio.personal.title}</p>
	<div class="text-slate-400 space-y-1">
		<p>📧 {portfolio.personal.primaryEmail}</p>
		<p class="inline-flex items-center justify-center gap-2">
			<PhilippinesFlagIcon class="size-5 rounded-sm shadow-sm" />
			<span>{portfolio.personal.address}</span>
		</p>
		<div class="flex items-center justify-center gap-4 mt-4">
			<a
				href="/resume"
				class="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
				onclick={() =>
					trackInternalLinkClick({ href: '/resume', label: 'Resume', section: 'header' })}
			>
				<FileText class="size-4" />
				Resume
			</a>
			<a
				href={portfolio.personal.githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="text-slate-400 hover:text-white transition-colors"
				aria-label="GitHub profile"
			>
				<GitHubIcon class="size-5" />
			</a>
			<a
				href={portfolio.personal.linkedinUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="text-slate-400 hover:text-[#0a66c2] transition-colors"
				aria-label="LinkedIn profile"
			>
				<LinkedInIcon class="size-5" />
			</a>
		</div>
	</div>
</header>
