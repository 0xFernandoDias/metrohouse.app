<script lang="ts">
	import "../app.css"
</script>

<nav>
	<span href=".">Home</span>
	<span href="about">About</span>
	<span href="settings">Settings</span>
</nav>

<slot />

<style windi:preflights:global windi:safelist:global>
	:global(span) {
		@apply text-pink-100 font-segoe font-light;
	}
</style>
