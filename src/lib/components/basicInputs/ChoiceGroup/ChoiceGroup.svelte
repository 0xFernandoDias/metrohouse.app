<script lang="ts">
	export let title = 'Title'
	export let name = 'choiceGroup'
	export let options: {
		id?: string
		value?: string
		label: string
		disabled?: boolean
	}[] = [{ id: 'choiceGroup', label: 'string', disabled: false }]
</script>

<div class="flex-col gap-3.5">
	<span class="smSemibold">{title}</span>
	<!-- Options list -->
	<div class="flex-col gap-2">
		{#each options as option}
			<!-- Radio button -->
			<div class="gap-2">
				<input
					as="div"
					type="radio"
					{name}
					{...option}
					class="min-h-5 w-5 accent-themePrimary hover:accent-themeDarkAlt"
				/>
				<span as="label" for={name} class="smRegular" class:text-grey90={option.disabled}
					>{option.label}</span
				>
			</div>
		{/each}
	</div>
</div>

<style>
	div,
	input {
		@apply flex;
	}
	span {
		@apply text-grey190 first-letter:uppercase;
	}
</style>
