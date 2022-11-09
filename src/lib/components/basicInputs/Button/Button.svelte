<script lang="ts">
	export let appearance: 'primary' | 'secondary' | 'subtle' | 'transparent' = 'primary'
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
		<span class="smSemibold label">Click me</span>
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
		<span class="smRegular {appearance !== 'primary' ? 'text-grey60' : 'text-white'}">|</span>
		<svg width="12" height="16" viewBox="0 2 14 1">
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
		</svg>
	</button>
</div>

<style>
	button {
		@apply flex py-1.5 gap-2 justify-center items-center disabled:bg-grey20 disabled:text-grey90;
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

	.transparent:active .label {
		@apply text-black;
	}

	.transparent:hover svg circle,
	.transparent:hover svg path {
		@apply stroke-themePrimary;
	}

	.transparent:active svg circle,
	.transparent:active svg path {
		@apply stroke-black;
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
