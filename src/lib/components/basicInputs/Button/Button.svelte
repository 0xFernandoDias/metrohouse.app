<script lang="ts">
	export let appearance: 'primary' | 'secondary' | 'subtle' | 'transparent' = 'primary'

	// export let checked: boolean = false
	// export let className: string ''
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
	class="flex justify-center items-center rounded-sm {appearance !== 'transparent' &&
		'shadow-sm'} {appearance === 'secondary' &&
		'border-1 border-inputBorder border-solid disabled:border-none'}"
>
	<button type="button" class="{appearance} px-5 rounded-l-sm">
		<svg width="16" height="16" viewBox="0 0 22 22">
			<circle
				class={appearance === 'secondary'
					? 'stroke-black'
					: appearance === 'subtle'
					? 'stroke-themePrimary'
					: appearance === 'transparent'
					? 'stroke-themeDark'
					: 'stroke-white'}
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
		<span class="smSemibold flex label">Click me</span>
		<!-- <svg width="12" height="16" viewBox="0 2 14 1">
			<path
				class={appearance !== 'primary'
					? 'stroke-grey130'
					: 'stroke-white'}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m1 1 6 6 6-6"
			/>
		</svg> -->
	</button>
	<button type="button" class="{appearance} pr-2 rounded-r-sm">
		<span class="smRegular flex {appearance !== 'primary' ? 'text-grey60' : 'text-white'}">|</span>
		<svg width="12" height="16" viewBox="0 2 14 1">
			<path
				class={appearance !== 'primary' ? 'stroke-grey130' : 'stroke-white'}
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
		@apply flex h-full py-1.5 gap-2 justify-center items-center ;
	}

	button:disabled {
		@apply bg-grey20 hover:bg-grey20 text-grey90 hover:text-grey90;
	}

	button:disabled svg circle,
	button:disabled svg path {
		@apply stroke-grey90;
	}

	.primary {
		@apply bg-themePrimary hover:bg-themeDarkAlt active:bg-themeDark text-white;
	}

	.secondary {
		@apply bg-white;
	}

	.transparent:hover .label {
		@apply text-themePrimary;
	}

	.transparent:hover svg circle,
	.transparent:hover svg path {
		@apply stroke-themePrimary;
	}

	.transparent:active svg circle,
	.transparent:active svg path {
		@apply stroke-black;
	}

	.transparent:active .label {
		@apply text-black;
	}

	.transparent:disabled:hover svg circle, .transparent:disabled:hover svg path {
		@apply stroke-grey90;
	}

	.transparent:disabled:hover .label {
		@apply text-grey90;
	}

	.secondary,
	.subtle {
		@apply hover:bg-grey20 active:bg-grey30;
	}

	.secondary,
	.subtle,
	.transparent {
		@apply text-grey190;
	}
</style>
