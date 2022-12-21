<script lang="ts">
	export let name = 'choiceGroupImage'
	export let id = 'choiceGroupImage'
	export let value = 'image'
	export let disabled = false
</script>

<!-- Image as a radio button -->
<div class="relative max-w-min">
	<div class="flex flex-row-reverse">
		<input
			as="div"
			type="radio"
			bind:group={name}
			{id}
			{value}
			{disabled}
			class="min-h-5 accent-grey130 hover:accent-grey160 absolute m-1 w-5"
		/>
	</div>
	<label
		for={name}
		class="bg-grey20 hover:border-grey160 flex h-24 w-24 rounded-sm hover:border hover:border-solid"
	/>
</div>

<style>
</style>
