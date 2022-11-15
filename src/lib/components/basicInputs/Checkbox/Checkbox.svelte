<script lang="ts">
	export let id: string = 'checkbox'
	export let name: string = 'checkbox'
	export let value: string = ''
	export let checked = false
	export let disabled = false
</script>

<!-- Checkbox and label container -->
<div class="flex gap-2">
	<input
		as="div"
		type="checkbox"
		{id}
		{name}
		{value}
		{checked}
		{disabled}
		class="group flex min-h-5 w-5 rounded-sm border border-solid border-grey160 accent-themePrimary hover:accent-themeDarkAlt disabled:border-grey90 disabled:hover:accent-grey90"
	/>
	<span as="label" for={id} class="smRegular text-grey190" class:text-grey90={disabled}><slot>string</slot></span>
</div>

<style>
</style>
