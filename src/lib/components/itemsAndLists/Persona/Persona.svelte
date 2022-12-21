<script lang="ts">
	// export let style
	// export let borderStyle
	// export let size
	// export let initials
	// export let personaColor
	// export let imageUrl
	// export let personaPresence
	// export let ring

	// export let dropdown
</script>

<div class="flex">
	<!-- <avatar /> -->
	<div class="flex flex-col">
		<span />
		<span />
	</div>
</div>

<!-- only image -->
<img
	class="h-10 w-10 rounded-full"
	src="/docs/images/people/profile-picture-5.jpg"
	alt="Rounded avatar"
/>

<!-- only image with ring -->
<img
	class="h-10 w-10 rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500"
	src="/docs/images/people/profile-picture-5.jpg"
	alt="Bordered avatar"
/>

<!-- with avatar icon -->
<div class="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
	<svg
		class="absolute -left-1 h-12 w-12 text-gray-400"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
			clip-rule="evenodd"
		/></svg
	>
</div>

<!-- with letters -->
<div
	class="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600"
>
	<span class="font-medium text-gray-600 dark:text-gray-300">JL</span>
</div>

<!-- with presence -->
<div class="relative">
	<img class="h-10 w-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
	<span
		class="absolute bottom-0 left-7  h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"
	/>
</div>

<style>
</style>
