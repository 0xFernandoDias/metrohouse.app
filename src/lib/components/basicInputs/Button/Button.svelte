<script lang="ts">
	export let appearance: 'primary' | 'secondary' | 'textButton' | 'transparent' = 'primary'
</script>

<div
	class="flex min-w-min justify-center items-center rounded-sm {appearance}"
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
		button {
			@apply bg-themePrimary text-white;
			&:hover {
				@apply bg-themeDarkAlt;
			}
			&:active {
				@apply bg-themeDark;
			}
			svg circle,
			svg path {
				@apply stroke-white;
			}
		}
	}

	div.secondary {
		@apply border border-inputBorder;
		&:disabled {
			@apply border-none;
		}
		button {
			@apply bg-white;
			svg circle {
				@apply stroke-grey190;
			}
		}
	}

	.secondary,
	.textButton {
		button {
			&:hover {
				@apply bg-grey20;
			}
			&:active {
				@apply bg-grey30;
			}
		}
	}

	.transparent {
		button {
			&:hover {
				span {
					@apply text-themePrimary;
				}
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
			svg circle {
				@apply stroke-themeDark;
			}
		}
	}

	.primary,
	.secondary,
	.textButton,
	.transparent {
		button {
			&:disabled {
				span {
					@apply text-grey90;
				}
				svg circle,
				svg path {
					@apply stroke-grey90;
				}
			}
		}
	}

	.primary,
	.secondary,
	.textButton {
		@apply shadow-sm;
		button {
			&:disabled {
				@apply bg-grey20;
			}
		}
	}

	.secondary,
	.textButton,
	.transparent {
		button {
			span {
				@apply text-grey190;
			}
			svg path {
				@apply stroke-grey130;
			}
		}
	}

	.textButton,
	.transparent {
		button {
			svg circle {
				@apply stroke-themePrimary;
			}
		}
	}

	button {
		@apply flex h-full py-1.5 gap-2 justify-center items-center;
	}
</style>
