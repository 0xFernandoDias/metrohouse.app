<script lang="ts">
	export let appearance: 'primary' | 'secondary' | 'textButton' | 'transparent' = 'primary'
</script>

<div class="min-w-max rounded-sm {appearance}">
	<button type="button" class={appearance}>
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
			<span class="smSemibold">rest</span>
			<span class="xsRegular">this is a secondary text</span>
		</div>
		<!-- <svg viewBox="0 2 14 1">
			<path
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m1 1 6 6 6-6"
			/>
		</svg> -->
	</button>
	<button type="button" class={appearance}>
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
	.primary,
	.secondary {
		@apply shadow-sm;
	}

	.primary,
	.secondary,
	.textButton,
	.transparent {
		button {
			svg circle,
			svg path {
				@apply stroke-grey90;
			}

			&:disabled {
				div span {
					@apply first:text-grey90 last:text-grey90 hover:first:text-grey90 last:text-grey90 cursor-not-allowed;
				}
				svg circle,
				svg path {
					@apply stroke-grey90 hover:stroke-grey90;
				}
			}
		}
	}

	.secondary,
	.textButton,
	.transparent {
		button {
			div span {
				@apply first:text-grey190 last:text-grey130;
			}
			svg path {
				@apply stroke-grey130;
			}
			&:hover {
				svg path {
					@apply stroke-grey190;
				}
			}
			&:disabled {
				@apply cursor-not-allowed;
				svg path {
					@apply stroke-grey90 hover:stroke-grey90;
				}
			}
		}
	}

	.primary,
	.secondary {
		button {
			&:disabled {
				@apply bg-grey20 hover:bg-grey20 cursor-not-allowed;
			}
		}
	}

	.secondary button,
	.textButton button {
		@apply hover:bg-grey20 active:bg-grey30;
	}

	.primary button {
		@apply bg-themePrimary hover:bg-themeDarkAlt active:bg-themeDark;
		div span {
			@apply text-white;
		}
		svg circle,
		svg path {
			@apply stroke-white;
		}
	}

	.secondary button {
		@apply bg-white;
		svg circle {
			@apply stroke-grey190;
		}
	}

	.textButton button {
		@apply disabled:hover:bg-transparent;

		svg circle {
			@apply stroke-themePrimary;
		}
	}

	.transparent button {
		svg circle {
			@apply stroke-themeDark;
		}

		&:hover {
			div span {
				@apply text-themePrimary;
			}
			svg circle,
			svg path {
				@apply stroke-themePrimary;
			}
		}

		&:active {
			div span {
				@apply text-black;
			}
			svg circle {
				@apply stroke-themeDarker;
			}
			svg path {
				@apply stroke-black;
			}
		}

		&:disabled {
			@apply cursor-not-allowed;
			svg circle,
			svg path {
				@apply stroke-grey90;
			}
		}
	}

	div,
	button,
	svg {
		@apply flex;
	}

	div,
	button {
		@apply justify-center items-center;
	}

	button {
		@apply h-full py-1.5 gap-2 first:px-5 rounded-l-sm last:pr-2 rounded-r-sm;
	}

	svg {
		@apply min-h-5 w-4;
	}

	span {
		@apply first-letter:uppercase;
	}
</style>
