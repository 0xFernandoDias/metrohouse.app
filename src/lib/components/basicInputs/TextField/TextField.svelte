<script lang="ts">
	// Do later: ARIA

	export let componentType: 'text' | 'search' | 'dropdown' | 'spin' | 'multiline' = 'text'
	export let type: 'text' | 'search' | 'password' = 'text'
	export let appearance: 'normal' | 'underlined' = 'normal'
	export let required = true
	export let disabled = false
	export let value = ''
	export let label = 'label'
	export let placeholder = 'Type here'
	export let name = 'textField'
	export let id = 'textField'
	// export let defaultValue = ''
	// export let options = []
	// export let readOnly = false
	// export let ...position: 'left' | 'right' = 'left'
</script>

<form>
	<label for={name} class="">{label}</label>
	<div>
		<svg />
		<input {type} {name} {value} {id} {placeholder} class="" {disabled} {required} />
		<!-- <button type="submit" class="">Search</button> -->
	</div>
</form>

<!-- Do later: Needs to be styled -->
<!-- Do later: on error -->
<!-- Do later: on focus -->
<!-- Do later: Prefix -->

<!-- Do later: Mask -->
<style>
</style>
