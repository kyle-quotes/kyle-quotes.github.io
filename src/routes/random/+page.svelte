<script lang="ts">
	import { quotes } from '$lib/data/quotes';
	import KyleQuote from '$lib/components/KyleQuote.svelte';
	import { onMount } from 'svelte';

	let randomQuote = quotes[0];

	function getRandomQuote() {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		randomQuote = quotes[randomIndex];
	}

	onMount(getRandomQuote);
</script>

<svelte:head>
	<title>Random Kyle Quote</title>
</svelte:head>

<main>
	<h1>Random Kyle Wisdom</h1>

	<div class="quote-container">
		<KyleQuote quote={randomQuote} />
	</div>

	<button on:click={getRandomQuote}>Get Another Quote</button>

	<a href="/" class="back-link">Back to all quotes</a>
</main>

<style>
	main {
		max-width: 600px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	h1 {
		color: #ff3e00;
		margin-bottom: 2rem;
	}

	.quote-container {
		margin-bottom: 2rem;
	}

	button {
		background-color: #ff3e00;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	button:hover {
		background-color: #e03600;
	}

	.back-link {
		display: block;
		margin-top: 2rem;
		color: #666;
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}
</style>
