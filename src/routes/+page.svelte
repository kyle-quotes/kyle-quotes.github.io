<script lang="ts">
	import { quotes } from '$lib/data/quotes';
	import KyleQuote from '$lib/components/KyleQuote.svelte';
</script>

<svelte:head>
	<title>Kyle Quotes</title>
</svelte:head>

<main>
	<div class="header-section">
		<div class="kyle-portrait-container">
			<img src="/kyle.jpg" alt="The legendary Kyle" class="kyle-portrait" />
			<div class="kyle-decoration">
				<span class="decoration-item">⭐</span>
				<span class="decoration-item">✨</span>
				<span class="decoration-item">🔥</span>
				<span class="decoration-item">💯</span>
				<span class="decoration-item">🧠</span>
				<span class="decoration-item">⭐</span>
			</div>
		</div>

		<div class="title-section">
			<h1>Kyle's Greatest Hits</h1>
			<p class="subtitle">The most memorable quotes from Kyle</p>
			<p class="kyle-bio">Philosopher. Visionary.</p>
		</div>
	</div>

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

	.header-section {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.kyle-portrait-container {
		position: relative;
		width: 180px;
		height: 180px;
		flex-shrink: 0;
	}

	.kyle-portrait {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
		border: 4px solid #ff3e00;
		box-shadow: 0 8px 20px rgba(255, 62, 0, 0.3);
	}

	.kyle-decoration {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		pointer-events: none;
	}

	.decoration-item {
		position: absolute;
		font-size: 1.5rem;
		animation: float 3s infinite alternate ease-in-out;
	}

	.decoration-item:nth-child(1) {
		top: -15px;
		left: 50%;
		transform: translateX(-50%);
		animation-delay: 0s;
	}

	.decoration-item:nth-child(2) {
		top: 20%;
		right: -15px;
		animation-delay: 0.5s;
	}

	.decoration-item:nth-child(3) {
		bottom: -10px;
		left: 50%;
		transform: translateX(-50%);
		animation-delay: 1s;
	}

	.decoration-item:nth-child(4) {
		top: 20%;
		left: -15px;
		animation-delay: 1.5s;
	}

	.decoration-item:nth-child(5) {
		top: 0;
		right: 10%;
		animation-delay: 0.7s;
	}

	.decoration-item:nth-child(6) {
		bottom: 10%;
		left: -10px;
		animation-delay: 1.2s;
	}

	@keyframes float {
		0% {
			transform: translateY(0) rotate(0deg);
		}
		100% {
			transform: translateY(-10px) rotate(10deg);
		}
	}

	.title-section {
		text-align: center;
	}

	h1 {
		color: #ff3e00;
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
	}

	.subtitle {
		color: #666;
		margin-bottom: 0.5rem;
		font-size: 1.1rem;
	}

	.kyle-bio {
		color: #ff3e00;
		font-weight: bold;
		font-style: italic;
		font-size: 1.2rem;
	}

	.quotes-container {
		display: grid;
		gap: 1.5rem;
	}

	@media (max-width: 600px) {
		.header-section {
			flex-direction: column;
			text-align: center;
		}

		h1 {
			font-size: 2rem;
		}
	}
</style>
