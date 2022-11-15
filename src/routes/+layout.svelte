<script lang="ts">
	import '../app.css'
</script>

<slot />

<!-- Do later: AriaLabel -->
<style global windi:global windi:preflights:global windi:safelist:global>
	span {
		@apply first-letter:uppercase;
	}
</style>
