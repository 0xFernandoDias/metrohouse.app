<script lang="ts">
</script>

<div class="app">
	<slot />
</div>

<style global windi:global windi:preflights:global windi:safelist:global>
	span {
		@apply first-letter:uppercase;
	}
</style>
