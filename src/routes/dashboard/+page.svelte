<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="container">
	<article>
		<hgroup>
			<h1>Dasboard</h1>
			<h2>Welcome back, {data.user.username}!</h2>
		</hgroup>

		<a href="logout" role="button">Log out</a>
	</article>
</main>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}

	a:visited {
		color: inherit;
	}
</style>
