<script lang="ts">
	import type { PageData } from './$types'

	// import Button from '$lib/components/basicInputs/Button/Button.svelte'
	import Switch from '$lib/components/basicInputs/Switch/Switch.svelte'

	// export let data: PageData
	// let switchValue
	// let multiValue
	let sliderValue: any
</script>

<svelte:head>
	<title>Main page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Switch label="Enable dark mode" bind:value={sliderValue} />
</section>

<style>
</style>
