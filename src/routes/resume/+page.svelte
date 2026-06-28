<script lang="ts">
	import { getResumeView } from '$lib/data/resume';
	import profilePhoto from '$lib/assets/profile.jpg';

	const resume = getResumeView();
</script>

<header class="flex items-start gap-4 mb-4 pb-3 border-b-2 border-sky-500">
	<img
		src={profilePhoto}
		alt={resume.personal.name}
		class="w-20 h-20 rounded-full object-cover border-2 border-sky-500 shrink-0"
	/>
	<div class="flex-1">
		<h1 class="text-2xl font-bold mb-1">{resume.personal.name.toUpperCase()}</h1>
		<div class="text-xs text-slate-700 mb-1">
			{#each resume.personal.emails as email, i}
				{#if i > 0}<span class="mx-2">|</span>{/if}
				<span>📧 {email}</span>
			{/each}
			<span class="mx-2">|</span>
			<span>🎂 {resume.personal.birthday}</span>
		</div>
		<div class="text-xs flex flex-wrap gap-2">
			<a
				href={resume.personal.portfolioUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600 hover:text-blue-800 underline"
			>
				🌐 Portfolio: yob-yob.com
			</a>
			<span class="text-slate-600">|</span>
			<a
				href={resume.personal.githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600 hover:text-blue-800 underline"
			>
				🐙 GitHub: github.com/yob-yob
			</a>
		</div>
	</div>
</header>

<section class="mb-3">
	<h2 class="text-sm font-bold uppercase border-b-2 border-emerald-500 pb-1 mb-2">
		Professional Summary
	</h2>
	<p class="compact-text text-justify">{resume.summary}</p>
</section>

<div class="section-divider"></div>

<div class="grid grid-cols-3 gap-x-4">
	<div class="col-span-1">
		<section class="mb-3">
			<h2 class="text-sm font-bold uppercase border-b-2 border-violet-500 pb-1 mb-2">Core Skills</h2>
			<ul class="compact-list">
				{#each resume.coreSkills as skill}
					<li>{skill}</li>
				{/each}
			</ul>
		</section>

		<section class="mb-3">
			<h2 class="text-sm font-bold uppercase border-b-2 border-amber-500 pb-1 mb-2">
				Technical Expertise
			</h2>
			<div class="compact-text">
				{#each resume.techStackCategories as category}
					<div class="mb-1">
						<strong class="text-xs">{category.name}:</strong><br />
						{#each category.items as item}
							<span class="tech-pill">{item}</span>
						{/each}
					</div>
				{/each}
			</div>
		</section>
	</div>

	<div class="col-span-2">
		<section class="mb-3">
			<h2 class="text-sm font-bold uppercase border-b-2 border-cyan-500 pb-1 mb-2">
				Work Experience
			</h2>
			{#each resume.workExperience as job}
				<div class="mb-2">
					<div class="flex justify-between mb-1 items-center">
						<div>
							<h3 class="compact-heading">{job.title}</h3>
							<p class="compact-text text-slate-700">{job.company} · {job.employmentType}</p>
						</div>
						<p class="compact-text text-slate-600">{job.resumeDateRange}</p>
					</div>
					{#if job.resumeSummary}
						<p class="compact-text text-slate-600">{job.resumeSummary}</p>
					{:else}
						<p class="compact-text text-slate-600 mb-1">{job.location}</p>
					{/if}
					{#if job.resumeResponsibilities?.length}
						<ul class="compact-list">
							{#each job.resumeResponsibilities as item}
								<li>{item}</li>
							{/each}
						</ul>
					{/if}
					{#if job.resumeTechStack}
						<p class="compact-text mt-1 text-slate-600">
							<strong>Tech:</strong>
							{job.resumeTechStack}
						</p>
					{/if}
				</div>
			{/each}
		</section>

		<div class="section-divider"></div>

		<section class="mb-3">
			<h2 class="text-sm font-bold uppercase border-b-2 border-pink-500 pb-1 mb-2">
				Notable Projects
			</h2>
			{#each resume.projects as project}
				<div class="mb-1">
					<h3 class="compact-heading">{project.name}</h3>
					<p class="compact-text">{project.resumeDescription}</p>
				</div>
			{/each}
		</section>

		<div class="section-divider"></div>

		<section class="mb-3">
			<h2 class="text-sm font-bold uppercase border-b-2 border-emerald-500 pb-1 mb-2">Education</h2>
			{#each resume.education as school}
				<div class="mb-1">
					<div class="flex justify-between items-start mb-1">
						<div>
							<h3 class="compact-heading">{school.degree}</h3>
							<p class="compact-text text-slate-700">{school.institution}</p>
						</div>
						<p class="compact-text text-slate-600">{school.yearRange}</p>
					</div>
					<p class="compact-text text-slate-600">{school.address}</p>
				</div>
			{/each}
		</section>
	</div>
</div>
