<script lang="ts">
	import { client } from '$lib/lensCall'
	import { setContextClient } from '@urql/svelte'
	// import Moralis from 'moralis'

	setContextClient(client)
</script>

<slot />

<style global windi:global windi:preflights:global windi:safelist:global>
	span {
		@apply first-letter:uppercase;
	}
</style>
