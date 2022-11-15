<script lang="ts">
    export let name: string = ''
    export let option: {
        id?: string
        value?: string
        label: string
        disabled?: boolean
    } = { id: 'choiceGroup', label: 'string', disabled: false }
</script>

<!-- Checkbox and label container -->
<div class="flex gap-2">
    <input
        as="div"
        type="radio"
        {name}
        id={option.id}
        value={option.value}
        disabled={option.disabled}
        class="flex min-h-5 w-5 accent-themePrimary hover:accent-themeDarkAlt"
    />
    <span as="label" for={name} class="smRegular text-grey190 first-letter:uppercase" class:text-grey90={option.disabled}
        >{option.label}</span
    >
</div>

<style>
</style>