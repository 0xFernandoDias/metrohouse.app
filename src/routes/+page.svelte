<script>
	import Button from '$lib/components/basicInputs/Button/Button.svelte'
</script>

<svelte:head>
	<title>Feed</title>
</svelte:head>

<!-- <div class="grid grid-cols-12"> -->
<div class="flex flex-col">
	<Button>click me<svelte:fragment slot="secondaryText">secondary text</svelte:fragment></Button>
	<Button appearance="secondary" />
	<Button appearance="textButton" />
	<Button appearance="transparent" />
</div>
