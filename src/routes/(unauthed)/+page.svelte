<script lang="ts">
	import { onMount } from 'svelte'

	export let data: any

	onMount(() => {
		console.log('data', data)
	})

	$: console.log('data', data)
</script>

<svelte:head>
	<title>Main page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<style>
</style>
