<script lang="ts">
	import { client as clientLens } from '$lib/lensCall'
	import { setContextClient } from '@urql/svelte'

	export let data: any

	setContextClient(clientLens)

	$: console.log('data ++layout reactive: ', data)
</script>

<slot />

<style global windi:global windi:preflights:global windi:safelist:global>
	span {
		@apply first-letter:uppercase;
	}
</style>
