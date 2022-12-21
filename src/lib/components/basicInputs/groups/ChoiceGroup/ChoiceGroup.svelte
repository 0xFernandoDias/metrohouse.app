<script lang="ts">
	import Choice from '../../Choice/Choice.svelte'
	export let title = 'Title'
	export let options: {
		id?: string
		name: string
		value: string
		label: string
		disabled?: boolean
		key: string
	}[] = [
		{
			id: 'choiceGroup',
			name: 'choiceGroup',
			value: 'string',
			label: 'string',
			disabled: false,
			key: '1'
		}
	]
</script>

<!-- Title and options container -->
<div class="flex-col gap-3.5">
	<span class="text-smSemibold text-grey190">{title}</span>
	<!-- Options list container -->
	<div class="flex-col gap-2">
		{#each options as option (option.key)}
			{@const { id, name, value, label, disabled } = option}
			<!-- Radio button -->
			<Choice {id} {name} {value} {label} {disabled} />
		{/each}
	</div>
</div>

<style>
	div {
		@apply flex;
	}
</style>
