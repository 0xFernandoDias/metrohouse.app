<script lang="ts">
	export let name = ''
	export let id = 'choiceGroup'
	export let value = 'string'
	export let label = 'string'
	export let disabled = false
</script>

<!-- Checkbox and label container -->
<label class="flex gap-2">
	<input
		as="div"
		type="radio"
		bind:group={name}
		{id}
		{value}
		{disabled}
		class="flex min-h-5 w-5 accent-themePrimary hover:accent-themeDarkAlt"
	/>
	<span as="label" for={name} class="text-smRegular text-grey190" class:text-grey90={disabled}
		>{label}</span
	>
</label>

<style>
</style>
