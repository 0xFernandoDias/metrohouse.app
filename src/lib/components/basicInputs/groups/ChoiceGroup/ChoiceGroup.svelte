<script lang="ts">
	import Choice from "../../Choice/Choice.svelte"

	export let title = 'Title'
	export let name = 'choiceGroup'
	export let options: {
		id?: string
		value?: string
		label: string
		disabled?: boolean
	}[] = [{ id: 'choiceGroup', label: 'string', disabled: false }]
</script>

<!-- Title and options container -->
<div class="flex-col gap-3.5">
	<span class="smSemibold text-grey190 first-letter:uppercase">{title}</span>
	<!-- Options list container -->
	<div class="flex-col gap-2">
		{#each options as option}
			<!-- Radio button -->
			<Choice {name} {option} />
		{/each}
	</div>
</div>

<style>
	div {
		@apply flex;
	}
</style>
