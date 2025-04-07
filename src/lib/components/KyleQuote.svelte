<script lang="ts">
	import type { Quote } from '$lib/data/quotes';

	export let quote: Quote;
</script>

<div class="quote-card">
	<blockquote>
		"{quote.text}"
	</blockquote>

	<div class="metadata">
		{#if quote.context}
			<div class="context">{quote.context}</div>
		{/if}

		{#if quote.date}
			<div class="date">{new Date(quote.date).toLocaleDateString()}</div>
		{/if}
	</div>
</div>

<style>
	.quote-card {
		background-color: #f9f9f9;
		border-left: 4px solid #ff3e00;
		padding: 1.5rem;
		border-radius: 0 8px 8px 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s ease;
	}

	.quote-card:hover {
		transform: translateY(-3px);
	}

	blockquote {
		font-size: 1.2rem;
		font-style: italic;
		margin: 0 0 1rem 0;
		line-height: 1.5;
	}

	.metadata {
		display: flex;
		justify-content: space-between;
		font-size: 0.9rem;
		color: #666;
	}
</style>
