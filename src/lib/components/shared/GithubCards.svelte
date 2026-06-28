<script lang="ts">
	const cards = [
		{
			src: 'https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=yob-yob&theme=default',
			alt: 'Profile details badge',
			class: 'col-span-3 w-full'
		},
		{
			src: 'https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=yob-yob&theme=default',
			alt: 'Top languages by repo badge',
			class: 'w-full'
		},
		{
			src: 'https://github-profile-summary-cards.vercel.app/api/cards/stats?username=yob-yob&theme=default',
			alt: 'General stats badge',
			class: 'w-full'
		},
		{
			src: 'https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=yob-yob&theme=default&utcOffset=8',
			alt: 'Commits per day badge',
			class: 'w-full'
		}
	];
</script>

<section>
	<h2 class="text-2xl font-bold mb-6 text-white">Github Cards</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
		{#each cards as card}
			<img src={card.src} alt={card.alt} class={card.class} loading="lazy" />
		{/each}
	</div>
</section>
