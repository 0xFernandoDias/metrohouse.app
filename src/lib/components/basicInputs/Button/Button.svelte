<script lang="ts">
	export let appearance: 'primary' | 'secondary' | 'textButton' | 'transparent' = 'primary'
</script>

<div class="min-w-max rounded-sm {appearance}">
	<button type="button" class="group px-5 rounded-l-sm" disabled>
		<svg viewBox="0 0 22 22">
			<circle
				class="left-icon"
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
		<div class="flex-col items-start">
			<span class="mainText">rest</span>
			<span class="secondaryText">this is a secondary text</span>
		</div>
		<svg viewBox="0 2 14 1">
			<path
				class="right-icon"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m1 1 6 6 6-6"
			/>
		</svg>
	</button>
	<button type="button" class="group pr-2 rounded-r-sm" disabled>
		<div class="h-4 w-[1px] bg-grey60" />
		<svg viewBox="0 2 14 1">
			<path
				class="dropdown-icon"
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
	.secondary,
	.textButton,
	.transparent {
		.group {
			.mainText {
				@apply text-grey190;
			}
			.secondaryText {
				@apply text-grey130;
			}
			.dropdown-icon {
				@apply stroke-grey130;
			}
		}
	}
	.primary,
	.secondary {
		.group {
			@apply shadow-sm disabled:bg-grey20 disabled:hover:bg-grey20;
		}
	}
	.secondary,
	.textButton {
		.group {
			@apply hover:bg-grey20 active:bg-grey30;
			.dropdown-icon {
				@apply group-hover:stroke-grey190;
			}
		}
	}
	.primary .group {
		@apply bg-themePrimary hover:bg-themeDarkAlt active:bg-themeDark;
		.left-icon,
		.right-icon,
		.dropdown-icon {
			@apply stroke-white;
		}
		div span {
			@apply text-white;
		}
	}

	.secondary .group {
		@apply bg-white;
		.left-icon,
		.right-icon {
			@apply stroke-grey190;
		}
	}

	.textButton .group {
		@apply disabled:hover:bg-transparent;
		.left-icon {
			@apply stroke-themePrimary;
		}
		.right-icon {
			@apply stroke-grey190;
		}
	}

	.transparent .group {
		.left-icon {
			@apply stroke-themeDark;
		}
		.right-icon {
			@apply stroke-grey190;
		}
		&:hover {
			.left-icon,
			.right-icon,
			.dropdown-icon {
				@apply stroke-themePrimary;
			}
			div span {
				@apply text-themePrimary;
			}
		}
		&:active {
			.left-icon {
				@apply stroke-themeDarker;
			}
			div span {
				@apply text-black;
			}
			.right-icon,
			.dropdown-icon {
				@apply stroke-black;
			}
		}
	}

	.group {
		@apply min-h-full py-1.5 gap-2 items-center;
		.mainText {
			@apply smSemibold;
		}
		.secondaryText {
			@apply xsRegular;
		}
		&:disabled {
			@apply cursor-not-allowed;
			.left-icon,
			.right-icon,
			.dropdown-icon {
				@apply stroke-grey90;
			}
			div span {
				@apply text-grey90;
			}
			&:hover {
				.left-icon,
				.right-icon,
				.dropdown-icon {
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

	div,
	.group,
	svg {
		@apply flex;
	}

	svg {
		@apply min-h-5 w-4;
	}

	span {
		@apply first-letter:uppercase;
	}
</style>
