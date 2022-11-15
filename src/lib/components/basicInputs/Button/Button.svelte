<script lang="ts">
	export let appearance: 'primary' | 'secondary' | 'textButton' | 'transparent' = 'primary'
	export let leftIcon = false
	export let rightIcon = false
	export let dropdownButton = false
	export let disabled = false
	// export let href: string = ''
	// export let data: any = null
	// export let menuProps: any = null
	// export let onClick: () => void = () => {}

	// Do later: link
</script>

<!-- Main and dropdown buttons container -->
<div class="min-w-max rounded-sm btn-{appearance}">
	<!-- Main button -->
	<button type="button" class="group btn px-5 rounded-l-sm" {disabled}>
		<!-- Do later: slot icons -->
		{#if leftIcon}
			<svg viewBox="0 0 22 22" class="left-icon">
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
		{/if}
		<div class="flex-col items-start">
			<span class="text-mainText"><slot>click me</slot></span>
			<span class="text-secondaryText"><slot name="secondaryText" /></span>
		</div>
		{#if rightIcon}
			<svg viewBox="0 2 14 1" class="right-icon">
				<path
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 6 6 6-6"
				/>
			</svg>
		{/if}
	</button>
	{#if dropdownButton}
		<button type="button" class="group btn pr-2 rounded-r-sm" {disabled}>
			<div class="h-4 w-[1px] bg-grey60" />
			<svg viewBox="0 2 14 1" class="dropdown-icon">
				<path
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 6 6 6-6"
				/>
			</svg>
		</button>
	{/if}
</div>

<style>
	/* This class applies: colors to the texts and the dropdown icon */
	.btn-secondary,
	.btn-textButton,
	.btn-transparent {
		.btn {
			.text-mainText {
				@apply text-grey190;
			}
			.text-secondaryText {
				@apply text-grey130;
			}
			.dropdown-icon :first-child {
				@apply stroke-grey130;
			}
		}
	}

	/* This class applies: shadow to the element and background color when the element is disabled or disabled and hovered */
	.btn-primary,
	.btn-secondary {
		.btn {
			@apply shadow-sm disabled:bg-grey20 disabled:hover:bg-grey20;
		}
	}

	/* This class applies: background and dropdown icon colors to the element when it is hovered and background color when it is active */
	.btn-secondary,
	.btn-textButton {
		.btn {
			@apply hover:bg-grey20 active:bg-grey30;
			.dropdown-icon:first-child {
				@apply group-hover:stroke-grey190;
			}
		}
	}

	/* This class applies: background, texts, and icons colors to the element */
	.btn-primary .btn {
		@apply bg-themePrimary hover:bg-themeDarkAlt active:bg-themeDark;
		.left-icon :first-child,
		.right-icon :first-child,
		.dropdown-icon :first-child {
			@apply stroke-white;
		}
		.text-mainText,
		.text-secondaryText {
			@apply text-white;
		}
	}

	/* This class applies: background and icons color to the element */
	.btn-secondary .btn {
		@apply bg-white;
		.left-icon :first-child,
		.right-icon :first-child {
			@apply stroke-grey190;
		}
	}

	/* This class applies: icons colors to the element and background color when the it is disabled and hovered */
	.btn-textButton .btn {
		@apply disabled:hover:bg-transparent;
		.left-icon :first-child {
			@apply stroke-themePrimary;
		}
		.right-icon :first-child {
			@apply stroke-grey190;
		}
	}

	/* This class applies: icons colors to the element and icons colors and texts color when it is hovered or active */
	.btn-transparent .btn {
		.left-icon :first-child {
			@apply stroke-themeDark;
		}
		.right-icon :first-child {
			@apply stroke-grey190;
		}
		&:hover {
			.left-icon :first-child,
			.right-icon :first-child,
			.dropdown-icon :first-child {
				@apply stroke-themePrimary;
			}
			.text-mainText,
			.text-secondaryText {
				@apply text-themePrimary;
			}
		}
		&:active {
			.left-icon :first-child {
				@apply stroke-themeDarker;
			}
			.text-mainText,
			.text-secondaryText {
				@apply text-black;
			}
			.right-icon :first-child,
			.dropdown-icon :first-child {
				@apply stroke-black;
			}
		}
	}

	/* This class applies: some styles to the element and its texts, and icons colors and texts colors when it is disabled or disabled and hovered */
	.btn {
		@apply min-h-full py-1.5 gap-2 items-center;
		.text-mainText {
			@apply smSemibold;
		}
		.text-secondaryText {
			@apply xsRegular;
		}
		&:disabled {
			@apply cursor-not-allowed;
			.left-icon :first-child,
			.right-icon :first-child,
			.dropdown-icon :first-child {
				@apply stroke-grey90;
			}
			.text-mainText,
			.text-secondaryText {
				@apply text-grey90;
			}
			&:hover {
				.left-icon :first-child,
				.right-icon :first-child,
				.dropdown-icon :first-child {
					@apply stroke-grey90;
				}
				.text-mainText,
				.text-secondaryText {
					@apply text-grey90;
				}
			}
			/* Do later: disabled:active */
			/* Do later: focus */
		}
	}

	div,
	.btn,
	svg {
		@apply flex;
	}

	svg {
		@apply min-h-5 w-4;
	}
</style>
