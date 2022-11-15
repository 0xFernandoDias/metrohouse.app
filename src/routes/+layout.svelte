<script lang="ts">
	import "../app.css"
</script>

<slot />

<!-- Do later: AriaLabel -->

<style windi:preflights:global windi:safelist:global>
	:global(span) {
		@apply first-letter:uppercase;
	}
</style>
