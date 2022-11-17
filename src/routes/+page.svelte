<script lang="ts">
	import Button from '$lib/components/basicInputs/Button/Button.svelte'
	import Switch from '$lib/components/basicInputs/Switch/Switch.svelte'

	let switchValue
	let sliderValue: any
	let multiValue
</script>

<svelte:head>
	<title>Feed</title>
</svelte:head>

<div class="flex flex-col">
	<Switch label="Enable dark mode" bind:value={sliderValue} />
</div>

<style>
</style>
