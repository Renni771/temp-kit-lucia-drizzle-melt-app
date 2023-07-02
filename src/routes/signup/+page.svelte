<script lang="ts">
	import { enhance } from '$app/forms';

  export let form;
</script>

<main class="container">
	<h1>Create an account</h1>

	<form method="POST" use:enhance>
		<label for="email">Email</label><br />
		<input type="email" id="email" name="email" /><br />

		<label for="username">Username</label><br />
		<input type="username" id="username" name="username" /><br />

		<label for="password">Password</label><br />
		<input type="password" id="password" name="password" /><br />

		<button type="submit">Sign up</button>

    {#if form?.message}
      <p style="color: red">{form.message}</p>
    {/if}
	</form>

	<span>
		Already have an account? Click here to <a href="/">sign in</a>.
	</span>
</main>
