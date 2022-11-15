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
<div class="min-w-max rounded-sm {appearance}">
	<!-- Main button -->
	<button type="button" class="group px-5 rounded-l-sm" {disabled}>
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
			<span class="mainText"><slot>click me</slot></span>
			<span class="secondaryText"><slot name="secondaryText" /></span>
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
		<button type="button" class="group pr-2 rounded-r-sm" {disabled}>
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
	.secondary,
	.textButton,
	.transparent {
		button.group {
			.mainText {
				@apply text-grey190;
			}
			.secondaryText {
				@apply text-grey130;
			}
			.dropdown-icon :first-child {
				@apply stroke-grey130;
			}
		}
	}

	/* This class applies: shadow to the element and background color when the element is disabled or disabled and hovered */
	.primary,
	.secondary {
		button.group {
			@apply shadow-sm disabled:bg-grey20 disabled:hover:bg-grey20;
		}
	}

	/* This class applies: background and dropdown icon colors to the element when it is hovered and background color when it is active */
	.secondary,
	.textButton {
		button.group {
			@apply hover:bg-grey20 active:bg-grey30;
			.dropdown-icon :first-child {
				@apply group-hover:stroke-grey190;
			}
		}
	}

	/* This class applies: background, texts, and icons colors to the element */
	.primary button.group {
		@apply bg-themePrimary hover:bg-themeDarkAlt active:bg-themeDark;
		.left-icon :first-child,
		.right-icon :first-child,
		.dropdown-icon :first-child {
			@apply stroke-white;
		}
		.mainText,
		.secondaryText {
			@apply text-white;
		}
	}

	/* This class applies: background and icons color to the element */
	.secondary button.group {
		@apply bg-white;
		.left-icon :first-child,
		.right-icon :first-child {
			@apply stroke-grey190;
		}
	}

	/* This class applies: icons colors to the element and background color when the it is disabled and hovered */
	.textButton button.group {
		@apply disabled:hover:bg-transparent;
		.left-icon :first-child {
			@apply stroke-themePrimary;
		}
		.right-icon :first-child {
			@apply stroke-grey190;
		}
	}

	/* This class applies: icons colors to the element and icons colors and texts color when it is hovered or active */
	.transparent button.group {
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
			.mainText,
			.secondaryText {
				@apply text-themePrimary;
			}
		}
		&:active {
			.left-icon :first-child {
				@apply stroke-themeDarker;
			}
			.mainText,
			.secondaryText {
				@apply text-black;
			}
			.right-icon :first-child,
			.dropdown-icon :first-child {
				@apply stroke-black;
			}
		}
	}

	/* This class applies: some styles to the element and its texts, and icons colors and texts colors when it is disabled or disabled and hovered */
	button.group {
		@apply min-h-full py-1.5 gap-2 items-center;
		.mainText {
			@apply smSemibold;
		}
		.secondaryText {
			@apply xsRegular;
		}
		&:disabled {
			@apply cursor-not-allowed;
			.left-icon :first-child,
			.right-icon :first-child,
			.dropdown-icon :first-child {
				@apply stroke-grey90;
			}
			.mainText,
			.secondaryText {
				@apply text-grey90;
			}
			&:hover {
				.left-icon :first-child,
				.right-icon :first-child,
				.dropdown-icon :first-child {
					@apply stroke-grey90;
				}
				.mainText,
				.secondaryText {
					@apply text-grey90;
				}
			}
			/* Do later: disabled:active */
			/* Do later: focus */
		}
	}

	div,
	button.group,
	svg {
		@apply flex;
	}

	svg {
		@apply min-h-5 w-4;
	}
</style>
