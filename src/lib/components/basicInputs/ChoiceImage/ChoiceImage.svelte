<script lang="ts">
	export let id: string = 'choiceGroupImage'
	export let name: string = 'choiceGroupImage'
	export let value: string = ''
	export let disabled = false
</script>

<div class="relative max-w-min">
	<div class="flex flex-row-reverse">
		<input
			as="div"
			type="radio"
			{id}
			bind:group={name}
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
