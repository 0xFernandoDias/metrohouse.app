<script>
	import Button from '$lib/components/basicInputs/Button/Button.svelte'
	import Checkbox from '$lib/components/basicInputs/Checkbox/Checkbox.svelte'
	import ChoiceGroup from '$lib/components/basicInputs/ChoiceGroup/ChoiceGroup.svelte'
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
	<ChoiceGroup
		title="Label"
		options={[
			{ id: 'option1', label: 'option 1', disabled: false },
			{ id: 'option2', label: 'option 2', disabled: false },
			{ id: 'option3', label: 'option 3', disabled: false }
		]}
	/>
</div>

<style>
</style>
