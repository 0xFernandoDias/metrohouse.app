<!-- https://www.figma.com/file/gB5Xr9f8ql3ehnAzaynNzB/Microsoft-Fluent-Web-(Community)?node-id=3194%3A10322
https://developer.microsoft.com/en-us/fluentui#/controls/web/button
https://react.fluentui.dev/?path=/docs/components-button-button--default 
https://www.w3schools.com/tags/tag_button.asp -->
<script lang="ts">
	// export let appearance: 'subtle' | 'secondary' | 'primary' | 'transparent' = 'primary'
	// export let checked: boolean = false
	// export let colors: object = {}
	// export let data: any
	// export let dropdownIcon: boolean = false
	// export let dropdownSplit: boolean = false
	// export let href: string = ''
	// export let iconPosition: 'before' | 'after' = 'before'
	// export let iconProps: any
	// export let keytipProps: any
	// export let menuIconProps: any
	// export let menuProps: any
	// export let onClick: () => void = () => {}
	// export let primaryIcon: boolean = false
	// export let shape: 'circular' | 'rounded' | 'square' = 'rounded'
	// export let size: 'small' | 'medium' | 'large' = 'medium'
</script>

<!-- 
...restProps, styleProps
disabled onHover active focused -->

<!-- emit event -->

<div
	class="flex justify-center items-center rounded-sm bg-themePrimary disabled:bg-grey20 shadow-sm cursor-pointer"
>
	<div
		type="button"
		class="flex py-1.5 px-5 gap-2 justify-center items-center rounded-l-sm hover:bg-themeDarkAlt active:bg-themeDark"
	>
		<svg width="16" height="16" viewBox="0 0 22 22"
			><circle
				cx="10"
				cy="10"
				r="10"
				fill="none"
				fill-rule="evenodd"
				stroke="#fff"
				class="disabled:stroke-grey90"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				transform="translate(1 1)"
			/></svg
		>
		<span class="text-smSemibold text-white disabled:text-grey90">Click me</span>
		<!-- <svg width="12" height="16" viewBox="0 2 14 1"
			><path
				fill="none"
				stroke="#fff"
                class="disabled:stroke-grey90"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m1 1 6 6 6-6"
			/></svg
		> -->
		</div>
	<div
		type="button"
		class="flex py-1.5 pr-2 gap-2 justify-center items-center rounded-r-sm hover:bg-themeDarkAlt active:bg-themeDark"
	>
		<span class="flex text-smRegular text-white disabled:text-grey90">|</span>
	</div>
</div>
