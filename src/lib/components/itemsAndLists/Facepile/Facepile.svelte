<script lang="ts">
	import Persona from '../Persona/Persona.svelte'

	export let personas = [{ name: '', key: '1' }]
</script>

<div class="flex">
	{#each personas as persona (persona.key)}
		<Persona />
	{/each}
	<!-- <OverflowButton /> -->
</div>

<style>
</style>
