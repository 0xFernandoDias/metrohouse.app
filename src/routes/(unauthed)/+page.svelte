<script lang="ts">
	export let data: any = ''

	// import Button from '$lib/components/basicInputs/Button/Button.svelte'
	import Switch from '$lib/components/basicInputs/Switch/Switch.svelte'

	// let switchValue
	// let multiValue
	let sliderValue: any
</script>

<svelte:head>
	<title>Main page</title>
</svelte:head>

<div class="flex flex-col">
	<Switch label="Enable dark mode" bind:value={sliderValue} />
</div>

<style>
</style>
