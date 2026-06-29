<script lang="ts">
	import { portfolio } from '$lib/data/portfolio';
	import HeaderSection from '$lib/components/portfolio/HeaderSection.svelte';
	import AboutSection from '$lib/components/portfolio/AboutSection.svelte';
	import SkillsSection from '$lib/components/portfolio/SkillsSection.svelte';
	import TechStackSection from '$lib/components/portfolio/TechStackSection.svelte';
	import ProjectsSection from '$lib/components/portfolio/ProjectsSection.svelte';
	import HobbiesSection from '$lib/components/portfolio/HobbiesSection.svelte';
	import WorkExperienceSection from '$lib/components/portfolio/WorkExperienceSection.svelte';
	import EducationSection from '$lib/components/portfolio/EducationSection.svelte';
	import InvestmentsSection from '$lib/components/portfolio/InvestmentsSection.svelte';
	import LinksSection from '$lib/components/portfolio/LinksSection.svelte';
	import GithubCards from '$lib/components/shared/GithubCards.svelte';
	import ParticlesBackground from '$lib/components/shared/ParticlesBackground.svelte';
	import PortfolioSideNav from '$lib/components/portfolio/PortfolioSideNav.svelte';
	import PortfolioSectionTracker from '$lib/components/portfolio/PortfolioSectionTracker.svelte';
	import profilePhoto from '$lib/assets/profile.jpg';
</script>

<svelte:head>
	<meta property="og:title" content="{portfolio.personal.name} - Portfolio" />
	<meta property="og:description" content={portfolio.about.summary} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={portfolio.personal.portfolioUrl} />
	<meta property="og:image" content={profilePhoto} />
</svelte:head>

<ParticlesBackground />

<PortfolioSideNav />
<PortfolioSectionTracker />

<div class="relative container mx-auto px-4 py-8 max-w-4xl z-10">
	<HeaderSection />
	<AboutSection />
	<SkillsSection />
	<TechStackSection />
	<ProjectsSection />
	<HobbiesSection />
	<WorkExperienceSection />
	<EducationSection />
	<InvestmentsSection />
	<LinksSection />
	<GithubCards />
</div>
