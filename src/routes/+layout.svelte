<script lang="ts">
	// import "../app.css"
</script>

<nav>
	<h6 href=".">Home</h6>
	<h6 href="about">About</h6>
	<h6 href="settings">Settings</h6>
</nav>

<slot />

<style windi:preflights:global windi:safelist:global>
	:global(span) {
		@apply text-pink-100;
	}
</style>
