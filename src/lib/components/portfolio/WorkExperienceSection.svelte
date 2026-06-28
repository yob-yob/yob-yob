<script lang="ts">
	import { Briefcase } from 'lucide-svelte';
	import { portfolio } from '$lib/data/portfolio';
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardContent } from '$lib/components/ui/card';
	import SectionHeading from './SectionHeading.svelte';
</script>

<SectionHeading title="Work Experience" icon={Briefcase}>
	{#each portfolio.workExperience as job}
		<Card
			class="mb-6 shadow-lg border-slate-700 {job.highlighted
				? 'bg-emerald-900/25'
				: 'bg-slate-800'}"
		>
			<CardContent class="p-6">
				<h3 class="text-xl font-semibold text-white">{job.title}</h3>
				<p class={job.highlighted ? 'text-slate-200' : 'text-slate-400'}>
					{job.company} · {job.employmentType}
				</p>
				<p class={job.highlighted ? 'text-slate-300' : 'text-slate-500'}>
					{job.dateRange}
				</p>
				<p class={job.highlighted ? 'text-slate-300' : 'text-slate-500'}>{job.location}</p>

				{#if job.note}
					<p class="mt-3 text-slate-300 italic text-sm">{job.note}</p>
				{/if}

				{#if job.careerJourney?.length}
					<div class="mt-4 text-slate-300">
						<p class="mb-3 font-medium">Career Journey & Growth:</p>
						<ul class="list-disc list-inside space-y-1 text-sm">
							{#each job.careerJourney as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				{/if}

				{#if job.keyResponsibilities?.length}
					<div class="mt-4 text-slate-300">
						<p class="mb-3 font-medium">Key Responsibilities:</p>
						<ul class="list-disc list-inside space-y-1 text-sm">
							{#each job.keyResponsibilities as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				{/if}

				{#if job.skills?.length}
					<p class="mt-2 text-slate-300">Skills: {job.skills.join(', ')}</p>
				{/if}

				{#if job.description}
					<div class="mt-4 text-slate-300">
						<p class="mb-3 leading-relaxed">{job.description}</p>
						{#if job.impact}
							<p class="leading-relaxed">{job.impact}</p>
						{/if}
					</div>
				{/if}

				{#if job.techStack?.length}
					<div class="mt-4">
						<p class="mb-2 text-slate-300 font-medium">
							{job.id === 'copyandpaste' ? 'Company Tech Stack:' : 'Tech Stack:'}
						</p>
						<div class="flex flex-wrap gap-2">
							{#each job.techStack as tech}
								<Badge variant="job">{tech}</Badge>
							{/each}
						</div>
					</div>
				{/if}
			</CardContent>
		</Card>
	{/each}
</SectionHeading>
