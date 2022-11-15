<script lang="ts">
	export let name = 'checkbox'
	export let id = 'checkbox'
	export let value = 'string'
	export let label = 'string'
	export let disabled = false
	export let checked = false
</script>

<!-- Checkbox and label container -->
<label class="flex gap-2">
	<input
		as="div"
		type="checkbox"
		bind:group={name}
		{id}
		{value}
		{disabled}
		{checked}
		class="min-h-5 border-grey160 accent-themePrimary hover:accent-themeDarkAlt disabled:border-grey90 disabled:hover:accent-grey90 flex w-5 rounded-sm border border-solid"
	/>
	<span as="label" for={name} class="text-smRegular text-grey190" class:text-grey90={disabled}
		>{label}</span
	>
</label>

<style>
</style>
