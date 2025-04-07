<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
</script>

<div class="app">
	<Nav />
	<slot />

	<footer>
		<p>© {new Date().getFullYear()} Kyle Quotes</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	footer {
		margin-top: auto;
		text-align: center;
		padding: 1rem;
		background-color: #f3f3f3;
		font-size: 0.9rem;
		color: #666;
	}
</style>
