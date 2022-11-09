<script lang="ts">
	export let appearance: 'primary' | 'secondary' | 'textButton' | 'transparent' = 'primary'
</script>

<div class="flex max-w-min justify-center items-center rounded-sm {appearance}">
	<button type="button" class={appearance}>
		<svg class="flex min-h-5 w-4" viewBox="0 0 22 22">
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
		<span class="smSemibold first-letter:uppercase">rest</span>
		<!-- <svg class="flex min-h-5 w-4" viewBox="0 2 14 1">
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
		<svg class="flex min-h-5 w-4" viewBox="0 2 14 1">
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

	.secondary button,
	.textButton button {
		@apply hover:bg-grey20 active:bg-grey30;
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

	.primary,
	.secondary,
	.textButton {
		@apply shadow-sm;
		button {
			@apply disabled:bg-grey20;
		}
	}

	.secondary button,
	.textButton button,
	.transparent button {
		@apply text-grey190;
		svg path {
			@apply stroke-grey130;
		}
	}

	.textButton button svg circle,
	.transparent button svg circle {
		@apply stroke-themePrimary;
	}

	button {
		@apply flex py-1.5 gap-2 justify-center items-center first:px-5 rounded-l-sm last:pr-2 rounded-r-sm;
	}
</style>
