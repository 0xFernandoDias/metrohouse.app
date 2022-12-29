<script lang="ts">
	//Do NOW: AUTH

	// async function logOut() {
	// 	await Moralis.User.logOut()
	// 	console.log('logged out')
	// }
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style global windi:global windi:preflights:global windi:safelist:global>
	span {
		@apply first-letter:uppercase;
	}
</style>
