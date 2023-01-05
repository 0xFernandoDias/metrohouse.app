<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>Main page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	{#each data.nfts as nft}
		{nft.name}
	{/each}
</div>

<style>
</style>
