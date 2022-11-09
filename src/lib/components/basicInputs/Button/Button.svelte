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
 -->

<!-- emit event -->

<div
	class="flex min-w-min justify-center items-center rounded-sm {appearance}"
	class:border={appearance === 'secondary'}
	class:border-inputBorder={appearance === 'secondary'}
>
	<button type="button" class="px-5 rounded-l-sm">
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
		<span class="smSemibold">Rest</span>
		<!-- <svg width="16" height="16" viewBox="0 2 14 1">
			<path
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m1 1 6 6 6-6"
			/>
		</svg> -->
	</button>
	<button type="button" class="pr-2 rounded-r-sm {appearance}">
		<div class="h-4 w-[1px] bg-grey60" />
		<svg width="16" height="16" viewBox="0 2 14 1">
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
	.primary {
		@apply shadow-sm;

		button {
			@apply bg-themePrimary text-white;
			&:hover {
				@apply bg-themeDarkAlt;
			}
			&:active {
				@apply bg-themeDark;
			}
			&:disabled {
				@apply bg-grey20 text-grey90;

				svg circle,
				svg path {
					@apply stroke-grey90;
				}
			}
			svg circle,
			svg path {
				@apply stroke-white;
			}
		}
	}

	.secondary {
		@apply shadow-sm;

		&:disabled {
			@apply border-none;
		}

		button {
			@apply bg-white;
			&:hover {
				@apply bg-grey20;
			}
			&:active {
				@apply bg-grey30;
			}
			&:disabled {
				@apply bg-grey20 text-grey90;
				span {
					@apply text-grey90;
				}
				svg circle,
				svg path {
					@apply stroke-grey90;
				}
			}
			span {
				@apply text-grey190;
			}
			svg circle {
				@apply stroke-grey190;
			}
			svg path {
				@apply stroke-grey130;
			}
		}
	}

	.subtle {
		@apply shadow-sm;
		button {
			&:hover {
				@apply bg-grey20;
			}
			&:active {
				@apply bg-grey30;
			}
			&:disabled {
				@apply bg-grey20 text-grey90;
				span {
					@apply text-grey90;
				}
				svg circle,
				svg path {
					@apply stroke-grey90;
				}
			}
			span {
				@apply text-grey190;
			}
			svg circle {
				@apply stroke-themePrimary;
			}
			svg path {
				@apply stroke-grey130;
			}
		}
	}

	.transparent {
		button {
			&:hover {
				span {
					@apply text-themePrimary;
				}
				svg circle,
				svg path {
					@apply stroke-themePrimary;
				}
			}
			&:active {
				span {
					@apply text-black;
				}
				svg circle,
				svg path {
					@apply stroke-black;
				}
			}
			&:disabled {
				span {
					@apply text-grey90;
				}
				svg circle,
				svg path {
					@apply stroke-grey90;
				}
			}
			span {
				@apply text-grey190;
			}
			svg circle {
				@apply stroke-themeDark;
			}
			svg path {
				@apply stroke-grey130;
			}
		}
	}

	button {
		@apply flex h-full py-1.5 gap-2 justify-center items-center;
	}
</style>
