<script lang="ts">
	export let appearance: 'primary' | 'secondary' | 'textButton' | 'transparent' = 'primary'
</script>

<div
	class="flex min-w-max items-center rounded-sm"
	class:shadow-sm={appearance === 'primary' || appearance === 'secondary'}
>
	<button
		type="button"
		class="btn flex h-full px-5 py-1.5 gap-2 items-center rounded-l-sm disabled:cursor-not-allowed"
		class:bg-themePrimary={appearance === 'primary'}
		class:bg-white={appearance === 'secondary'}
		class:hover:bg-themeDarkAlt={appearance === 'primary'}
		class:hover:bg-grey20={appearance === 'secondary' || appearance === 'textButton'}
		class:active:bg-themeDark={appearance === 'primary'}
		class:active:bg-grey30={appearance === 'secondary' || appearance === 'textButton'}
		class:disabled:bg-grey20={appearance === 'primary' || appearance === 'secondary'}
		class:disabled:hover:bg-grey20={appearance !== 'transparent'}
	>
		<svg viewBox="0 0 22 22" class="flex min-h-5 w-4">
			<circle
				class="btn-disabled:stroke-grey90 btn-disabled:hover:stroke-grey90"
				class:stroke-white={appearance === 'primary'}
				class:stroke-grey190={appearance === 'secondary'}
				class:stroke-themePrimary={appearance === 'textButton'}
				class:stroke-themeDark={appearance === 'transparent'}
				class:btn-hover:stroke-themePrimary={appearance === 'transparent'}
				class:btn-active:stroke-themeDarker={appearance === 'transparent'}
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
		<div
			class="flex flex-col btn-disabled:text-grey90 btn-disabled:hover:text-grey90"
			class:text-white={appearance === 'primary'}
			class:btn-hover:text-themePrimary={appearance === 'transparent'}
			class:btn-active:text-black={appearance === 'transparent'}
		>
			<span class="smSemibold flex first-letter:uppercase" class:text-grey190={appearance !== 'primary'}>rest</span>
			<span class="xsRegular flex first-letter:uppercase" class:text-grey130={appearance !== 'primary'}>this is a secondary text</span>
		</div>
		<!-- <svg viewBox="0 2 14 1" class="flex min-h-5 w-4">
			<path
				class:stroke-grey190={appearance !== 'primary'}
				class:stroke-white={appearance === 'primary'}
				class:btn-hover:stroke-themePrimary={appearance === 'transparent'}
				class:btn-active:stroke-black={appearance === 'transparent'}
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
		class="btn flex h-full py-1.5 pr-2 gap-2 items-center rounded-r-sm disabled:cursor-not-allowed"
		class:bg-themePrimary={appearance === 'primary'}
		class:bg-white={appearance === 'secondary'}
		class:hover:bg-themeDarkAlt={appearance === 'primary'}
		class:hover:bg-grey20={appearance === 'secondary' || appearance === 'textButton'}
		class:active:bg-themeDark={appearance === 'primary'}
		class:active:bg-grey30={appearance === 'secondary' || appearance === 'textButton'}
		class:disabled:hover:bg-grey20={appearance !== 'transparent'}
		class:disabled:bg-grey20={appearance === 'primary' || appearance === 'secondary'}
	>
		<div class="flex h-4 w-[1px] bg-grey60" />
		<svg viewBox="0 2 14 1" class="flex min-h-5 w-4">
			<path
				class:stroke-grey130={appearance !== 'primary'}
				class:stroke-white={appearance === 'primary'}
				class:btn-hover:stroke-grey190={appearance !== 'primary'}
				class:btn-hover:stroke-themePrimary={appearance === 'transparent'}
				class:btn-active:stroke-black={appearance === 'transparent'}
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
</style>
