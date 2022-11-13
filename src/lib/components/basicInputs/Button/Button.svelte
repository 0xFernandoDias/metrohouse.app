<script lang="ts">
	export let appearance: 'primary' | 'secondary' | 'textButton' | 'transparent' = 'primary'
</script>

<div class="min-w-max rounded-sm {appearance}">
	<button type="button" class="group px-5 rounded-l-sm">
		<svg viewBox="0 0 22 22">
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
		<div class="flex-col items-start">
			<span class="smSemibold" class:text-grey190={appearance !== 'primary'}> rest</span>
			<span class="xsRegular" class:text-grey130={appearance !== 'primary'}>
				this is a secondary text</span
			>
		</div>
	</button>
	<button type="button" class="group pr-2 rounded-r-sm {appearance}">
		<div class="h-4 w-[1px] bg-grey60" />
		<svg viewBox="0 2 14 1">
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
		.group {
			@apply shadow-sm bg-themePrimary hover:bg-themeDarkAlt active:bg-themeDark disabled:bg-grey20 disabled:hover:bg-grey20;
			svg circle,
			svg path {
				@apply stroke-white;
			}
			div span {
				@apply text-white;
			}
		}
	}
	.secondary {
		.group {
			@apply shadow-sm bg-white hover:bg-grey20 active:bg-grey30 disabled:bg-grey20 disabled:hover:bg-grey20;
			svg circle {
				@apply stroke-grey190;
			}
			svg path {
				@apply stroke-grey130 group-hover:stroke-grey190;
			}
		}
	}

	.textButton {
		.group {
			@apply hover:bg-grey20 active:bg-grey30 disabled:hover:bg-transparent;
			svg circle {
				@apply stroke-themePrimary;
			}
			svg path {
				@apply stroke-grey130 group-hover:stroke-grey190;
			}
		}
	}

	.transparent {
		.group {
			svg circle {
				@apply stroke-themeDark group-hover:stroke-themePrimary group-active:stroke-themeDarker;
			}
			div span {
				@apply group-hover:text-themePrimary group-active:text-black;
			}
			svg path {
				@apply stroke-grey130 group-hover:stroke-themePrimary group-active:stroke-black;
			}
			&:hover {
				svg circle {
					@apply stroke-themePrimary;
				}
				div span {
					@apply text-themePrimary;
				}
				svg path {
					@apply stroke-themePrimary;
				}
			}
			&:active {
				svg circle {
					@apply stroke-themeDarker;
				}
				div span {
					@apply text-black;
				}
				svg path {
					@apply stroke-black;
				}
			}
		}
	}

	.group {
		&:disabled {
			@apply cursor-not-allowed;

			svg circle,
			svg path {
				@apply stroke-grey90;
			}

			div span {
				@apply text-grey90;
			}

			&:hover {
				svg circle,
				svg path {
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
	button,
	svg {
		@apply flex;
	}

	button {
		@apply h-full py-1.5 gap-2 items-center;
	}

	svg {
		@apply min-h-5 w-4;
	}

	span {
		@apply first-letter:uppercase;
	}
</style>
