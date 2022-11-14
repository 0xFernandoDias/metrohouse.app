<script>
	import Button from '$lib/components/basicInputs/Button/Button.svelte'
	import Checkbox from '$lib/components/basicInputs/Checkbox/Checkbox.svelte'
</script>

<svelte:head>
	<title>Feed</title>
</svelte:head>

<!-- <div class="grid grid-cols-12"> -->

<!-- Button -->
<!-- <div class="flex flex-col">
	<Button leftIcon rightIcon dropdownButton
		><svelte:fragment slot="secondaryText">secondary text</svelte:fragment></Button
	>
	<Button leftIcon rightIcon dropdownButton appearance="secondary"
		><svelte:fragment slot="secondaryText">secondary text</svelte:fragment></Button
	>
	<Button leftIcon rightIcon dropdownButton appearance="textButton"
		><svelte:fragment slot="secondaryText">secondary text</svelte:fragment></Button
	>
	<Button leftIcon rightIcon dropdownButton appearance="transparent"
		><svelte:fragment slot="secondaryText">secondary text</svelte:fragment></Button
	>
	<Button leftIcon rightIcon dropdownButton disabled
		><svelte:fragment slot="secondaryText">secondary text</svelte:fragment></Button
	>
	<Button leftIcon rightIcon dropdownButton disabled appearance="secondary"
		><svelte:fragment slot="secondaryText">secondary text</svelte:fragment></Button
	>
	<Button leftIcon rightIcon dropdownButton disabled appearance="textButton"
		><svelte:fragment slot="secondaryText">secondary text</svelte:fragment></Button
	>
	<Button leftIcon rightIcon dropdownButton disabled appearance="transparent"
		><svelte:fragment slot="secondaryText">secondary text</svelte:fragment></Button
	>
</div> -->

<div class="flex flex-col">
	<Checkbox>Check me</Checkbox>
</div>

<style>
</style>