<script lang="ts">
	export let data: any

	$: console.log('data ++page reactive', data)
</script>

<svelte:head>
	<title>Main page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>Hi</div>

<style>
</style>
