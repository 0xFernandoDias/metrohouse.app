<script lang="ts">
	import { createClient, setContextClient } from '@urql/svelte'

	export const client = createClient({
		url: 'https://api.lens.dev'
	})
	setContextClient(client)
</script>

<slot />

<style global windi:global windi:preflights:global windi:safelist:global>
	span {
		@apply first-letter:uppercase;
	}
</style>
