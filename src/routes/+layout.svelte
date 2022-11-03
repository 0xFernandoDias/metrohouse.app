<script lang="ts">
	import "../app.css"
</script>

<slot />

<style windi:preflights:global windi:safelist:global>
	:global(span) {
		@apply font-segoe;
	}
</style>
