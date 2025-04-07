<script lang="ts">
	import { quotes } from '$lib/data/quotes';
	import KyleQuote from '$lib/components/KyleQuote.svelte';
</script>

<svelte:head>
	<title>Kyle Quotes</title>
</svelte:head>

<main>
	<h1>Kyle's Greatest Hits</h1>
	<p class="subtitle">The most memorable quotes from Kyle</p>

	<div class="quotes-container">
		{#each quotes as quote, idx (idx)}
			<KyleQuote {quote} />
		{/each}
	</div>
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		color: #ff3e00;
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		text-align: center;
		color: #666;
		margin-bottom: 2rem;
	}

	.quotes-container {
		display: grid;
		gap: 1.5rem;
	}
</style>
