<script lang="ts">
	import { enhance } from '$app/forms';

  export let form;
</script>

<main class="container">
	<h1>Sign in</h1>

	<form method="POST" use:enhance>
		<label for="email">Email</label><br />
		<input type="email" id="email" name="email" /><br />

		<label for="password">Password</label><br />
		<input type="password" id="password" name="password" /><br />

		<button type="submit">Sign in</button>

    {#if form?.message}
      <p style="color: red">{form.message}</p>
    {/if}
	</form>

	<span>
		Not yet a user? Click here to <a href="/signup">sign up</a>.
	</span>
</main>
