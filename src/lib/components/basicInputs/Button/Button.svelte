<script lang="ts">
	export let appearance: 'primary' | 'secondary' | 'textButton' | 'transparent' = 'primary'
</script>

<div class="flex min-w-max justify-center items-center rounded-sm {appearance}">
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
		<div class="flex flex-col items-start">
			<span class="smSemibold first-letter:uppercase">rest</span>
			<span class="xsRegular first-letter:uppercase">this is a secondary text</span>
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
		<div class="flex h-4 w-[1px] bg-grey60" />
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
	.secondary,
	.textButton {
		@apply shadow-sm;
		button {
			@apply disabled:bg-grey20;
		}
	}

	.primary button,
	.secondary button,
	.textButton button,
	.transparent button {
		@apply disabled:text-grey90;
		&:disabled {
			svg circle,
			svg path {
				@apply stroke-grey90;
			}
		}
	}

	.secondary button,
	.textButton button,
	.transparent button {
		span {
			@apply first:text-grey190 last:text-grey130;
		}
		svg path {
			@apply stroke-grey130;
		}
	}

	.secondary button,
	.textButton button {
		@apply hover:bg-grey20 active:bg-grey30;
	}

	.primary button {
		@apply bg-themePrimary text-white hover:bg-themeDarkAlt active:bg-themeDark;
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

	.transparent button {
		@apply hover:text-themePrimary active:text-black;

		&:hover svg path {
			@apply stroke-themePrimary;
		}

		&:active {
			svg circle,
			svg path {
				@apply stroke-black;
			}
		}
		svg circle {
			@apply stroke-themeDark;
		}
	}

	.textButton button svg circle,
	.transparent button svg circle {
		@apply stroke-themePrimary;
	}

	button {
		@apply flex py-1.5 gap-2 justify-center items-center first:px-5 rounded-l-sm last:pr-2 rounded-r-sm;
	}

	svg {
		@apply flex min-h-5 w-4;
	}
</style>
