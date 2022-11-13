<script lang="ts">
	export let appearance: 'primary' | 'secondary' | 'textButton' | 'transparent' = 'primary'
</script>

<div
	class="flex min-w-max items-center rounded-sm"
	class:shadow-sm={appearance === 'primary' || appearance === 'secondary'}
>
	<button
		type="button"
		class="group flex h-full px-5 py-1.5 gap-2 items-center rounded-l-sm"
		class:bg-themePrimary={appearance === 'primary'}
		class:bg-white={appearance === 'secondary'}
		class:hover:bg-themeDarkAlt={appearance === 'primary'}
		class:hover:bg-grey20={appearance === 'secondary' || appearance === 'textButton'}
		class:active:bg-themeDark={appearance === 'primary'}
		class:active:bg-grey30={appearance === 'secondary' || appearance === 'textButton'}
		class:disabled:bg-grey20={appearance === 'primary' || appearance === 'secondary'}
		class:disabled:hover:bg-grey20={appearance === 'primary' || appearance === 'secondary'}
		class:disabled:hover:bg-transparent={appearance === 'textButton' ||
			appearance === 'transparent'}
	>
		<svg viewBox="0 0 22 22" class="flex min-h-5 w-4">
			<circle
				class:stroke-white={appearance === 'primary'}
				class:stroke-grey190={appearance === 'secondary'}
				class:stroke-themePrimary={appearance === 'textButton'}
				class:stroke-themeDark={appearance === 'transparent'}
				class:group-hover:stroke-themePrimary={appearance === 'transparent'}
				class:group-active:stroke-themeDarker={appearance === 'transparent'}
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
		<div class="flex flex-col items-start">
			<span
				class="smSemibold first-letter:uppercase"
				class:text-white={appearance === 'primary'}
				class:text-grey190={appearance !== 'primary'}
				class:group-hover:text-themePrimary={appearance === 'transparent'}
				class:group-active:text-black={appearance === 'transparent'}
			>
				rest</span
			>
			<span
				class="xsRegular first-letter:uppercase"
				class:text-white={appearance === 'primary'}
				class:text-grey130={appearance !== 'primary'}
				class:group-hover:text-themePrimary={appearance === 'transparent'}
				class:group-active:text-black={appearance === 'transparent'}
			>
				this is a secondary text</span
			>
		</div>
	</button>
	<button
		type="button"
		class="group flex h-full py-1.5 pr-2 gap-2 items-center rounded-r-sm"
		class:bg-themePrimary={appearance === 'primary'}
		class:bg-white={appearance === 'secondary'}
		class:hover:bg-themeDarkAlt={appearance === 'primary'}
		class:active:bg-themeDark={appearance === 'primary'}
		class:active:bg-grey30={appearance === 'secondary' || appearance === 'textButton'}
		class:disabled:bg-grey20={appearance === 'primary' || appearance === 'secondary'}
		class:disabled:hover:bg-grey20={appearance === 'primary' || appearance === 'secondary'}
		class:disabled:hover:bg-transparent={appearance === 'transparent'}
	>
		<div class="h-4 w-[1px] bg-grey60" />
		<svg viewBox="0 2 14 1" class="flex min-h-5 w-4">
			<path
				class:stroke-white={appearance === 'primary'}
				class:stroke-grey130={appearance !== 'primary'}
				class:group-hover:stroke-grey190={appearance === 'secondary' || appearance === 'textButton'}
				class:group-hover:stroke-themePrimary={appearance === 'transparent'}
				class:group-active:stroke-black={appearance === 'transparent'}
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
	.group {
		&:disabled {
			@apply cursor-not-allowed;

			svg circle, svg path {
				@apply stroke-grey90;
			}

			div span {
				@apply text-grey90;
			}

			&:hover {
				svg circle, svg path {
					@apply stroke-grey90;
				}
				div span {
					@apply text-grey90;
				}
			}

			/* &:active {
				@apply !bg-transparent
			} */
		}
	}
</style>
