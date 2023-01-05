<script lang="ts">
	import { client } from '$lib/lensCall'
	import { setContextClient } from '@urql/svelte'

	setContextClient(client)
</script>

<slot />

<style global windi:global windi:preflights:global windi:safelist:global>
</style>
