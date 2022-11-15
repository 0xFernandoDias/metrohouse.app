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
			class="absolute min-h-5 w-5 m-1 accent-grey130 hover:accent-grey160"
		/>
	</div>
	<label
		for={name}
		class="flex w-24 h-24 bg-grey20 rounded-sm hover:border hover:border-solid hover:border-grey160"
	/>
</div>

<style>
</style>
