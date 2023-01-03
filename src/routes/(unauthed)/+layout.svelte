<script lang="ts">
	import { client } from '$lib/lensCall'
	import { setContextClient } from '@urql/svelte'
	import { onMount } from 'svelte'

	export let data: any

	onMount(() => {
		console.log('data', data)
	})

	setContextClient(client)

	$: console.log('data', data)
</script>

<slot />

<style global windi:global windi:preflights:global windi:safelist:global>
	span {
		@apply first-letter:uppercase;
	}
</style>
