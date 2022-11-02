<script lang="ts">
	import Button from "$lib/components/basicInputs/Button/Button.svelte"
</script>

<svelte:head>
	<title>Feed</title>
</svelte:head>

<!-- Wrong way -->
<h1 class="text-metroPink">Welcome to SvelteKit</h1>
<!-- Right way -->
<p class="metro-pink">
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<!-- Example -->
<span>
  Span
</span>

<Button
	primaryIcon
	dropdownIconSplit
	dropdownIcon
	data={{hello: 'world'}}
	href="/"
	appearance="primary"
	shape="rounded"
	iconProps={}
	keytipProps={}
	menuProps={}
	menuIconProps={}
	toggle={}
	onClick={() => {}}
>
	Rest
	<span slot="secondaryText">This is the secondary text</span>
</Button>