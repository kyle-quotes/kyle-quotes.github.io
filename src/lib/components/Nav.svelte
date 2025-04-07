<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav>
	<div class="logo">Kyle Quotes</div>
	<ul>
		<li class:active={$page.url.pathname === '/'}>
			<a href="/">All Quotes</a>
		</li>
		<li class:active={$page.url.pathname === '/random'}>
			<a href="/random">Random Quote</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		background-color: #333;
		color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
		height: 60px;
	}

	.logo {
		font-weight: bold;
		font-size: 1.2rem;
	}

	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin-left: 1.5rem;
	}

	a {
		color: #ccc;
		text-decoration: none;
		transition: color 0.2s;
	}

	a:hover,
	.active a {
		color: white;
	}
</style>
