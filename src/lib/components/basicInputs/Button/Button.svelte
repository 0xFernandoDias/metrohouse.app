<!-- https://www.figma.com/file/gB5Xr9f8ql3ehnAzaynNzB/Microsoft-Fluent-Web-(Community)?node-id=3194%3A10322
https://developer.microsoft.com/en-us/fluentui#/controls/web/button
https://react.fluentui.dev/?path=/docs/components-button-button--default 
https://www.w3schools.com/tags/tag_button.asp -->
<script lang="ts">
	export let appearance: 'primary' | 'secondary' | 'subtle' | 'transparent' = 'primary'
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

<div class="flex justify-center items-center rounded-sm shadow-sm {appearance === 'secondary' && 'border-1 border-inputBorder border-solid disabled:border-none'}">
	<button
		type="button"
		class:primary={appearance === 'primary'}
		class:secondary={appearance === 'secondary'}
		class:subtle={appearance === 'subtle'}
		class:transparent={appearance === 'transparent'}
		class="px-5 rounded-l-sm"
		
	>
		<svg width="16" height="16" viewBox="0 0 22 22">
			<circle
				cx="10"
				cy="10"
				r="10"
				fill="none"
				fill-rule="evenodd"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				transform="translate(1 1)"
			/>
		</svg>
		<span class="smSemibold">Click me</span>
		<!-- <svg width="12" height="16" viewBox="0 2 14 1">
				<path
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 6 6 6-6"
				/>
			</svg> -->
	</button>
	<button 
		type="button" 
		class:primary={appearance === 'primary'}
		class:secondary={appearance === 'secondary'}
		class:subtle={appearance === 'subtle'}
		class:transparent={appearance === 'transparent'}
		class="pr-2 rounded-r-sm"
		
	>
		<span class="smRegular {appearance !== 'primary' && 'text-grey60'}">|</span>
		<svg width="12" height="16" viewBox="0 2 14 1">
			<path
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m1 1 6 6 6-6"
			/>
		</svg>
	</button>
</div>

<style>
	button {
		@apply flex py-1.5 gap-2 justify-center items-center;
	}

	button:disabled {
		@apply stroke-grey60
	}

	.primary {
		@apply bg-themePrimary hover:bg-themeDarkAlt active:bg-themeDark text-white
	}

	.secondary {
		@apply bg-white
	}

	.transparent {
		@apply hover:text-themePrimary active:text-black
	}

	.primary,
	.secondary,
	.subtle,
	.transparent {
		@apply disabled:bg-grey20 disabled:text-grey90
	}

	.secondary,
	.subtle,
	.transparent {
		@apply text-grey190
	}

	.secondary,
	.subtle {
		@apply hover:bg-grey20 active:bg-grey30
	}

	.subtle,
	.transparent {
		@apply bg-transparent
	}

	.primary svg circle, .primary svg path {
		@apply stroke-white 
	}

	.secondary svg circle, .subtle svg circle {
		@apply stroke-themePrimary 
	}

	.secondary svg path, .subtle svg path, .transparent svg path, .transparent svg circle {
		@apply stroke-current 
	}
</style>
