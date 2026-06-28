<script lang="ts">
	import { portfolio } from '$lib/data/portfolio';
	import profilePhoto from '$lib/assets/profile.jpg';
</script>

<header class="text-center mb-12">
	<img
		src={profilePhoto}
		alt={portfolio.personal.name}
		class="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-slate-700 shadow-xl"
	/>
	<h1 class="text-4xl font-bold mb-4 text-white">{portfolio.personal.name}</h1>
	<div class="text-slate-400">
		<p>📧 {portfolio.personal.primaryEmail}</p>
		<p>🎂 {portfolio.personal.birthday}</p>
	</div>
</header>
