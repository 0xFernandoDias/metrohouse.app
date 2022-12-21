<script lang="ts">
	export let label: any
	export let value = 'on'

	let checked = true

	const uniqueID = Math.floor(Math.random() * 100)

	function handleClick(event: any) {
		const target = event.target
		const state = target.getAttribute('aria-checked')
		checked = state === 'true' ? false : true
		value = checked === true ? 'on' : 'off'
	}

	const slugify = (str = '') => str.toLowerCase().replace(/ /g, '-').replace(/\./g, '')
</script>

<div class="s s--slider text-smRegular">
	<span id={`switch-${uniqueID}`}> {label} </span>
	<button role="switch" aria-checked={checked} on:click={handleClick} />
</div>

<style>
	:root {
		--accent-color: CornflowerBlue;
		--gray: #ccc;
	}

	.s--slider {
		display: flex;
		align-items: center;
	}

	.s--slider button {
		width: 3em;
		height: 1.6em;
		position: relative;
		margin: 0 0 0 0.5em;
		background: var(--gray);
		border: none;
	}

	.s--slider button::before {
		content: '';
		position: absolute;
		width: 1.3em;
		height: 1.3em;
		background: #fff;
		top: 0.13em;
		right: 1.5em;
		transition: transform 0.3s;
	}

	.s--slider button[aria-checked='true'] {
		background-color: var(--accent-color);
	}

	.s--slider button[aria-checked='true']::before {
		transform: translateX(1.3em);
		transition: transform 0.3s;
	}

	.s--slider button {
		border-radius: 1.5em;
	}

	.s--slider button::before {
		border-radius: 100%;
	}

	.s--slider button:focus {
		box-shadow: 0 0px 8px var(--accent-color);
		border-radius: 1.5em;
	}
</style>
