<script lang="ts">
	import Choice from '$lib/components/basicInputs/Choice/Choice.svelte'
	import ChoiceGroup from '$lib/components/basicInputs/groups/ChoiceGroup/ChoiceGroup.svelte'
</script>

<svelte:head>
	<title>Feed</title>
</svelte:head>

<div class="flex flex-col">
	<!-- Choice Group -->
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
