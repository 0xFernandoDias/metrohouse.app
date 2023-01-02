<script lang="ts">
	import { gql, queryStore, getContextClient } from '@urql/svelte'
	import { onMount } from 'svelte'

	const ProfileQuery = gql`
		query Profile {
			profile(request: { profileId: "0x01" }) {
				id
				name
				bio
				picture {
					... on MediaSet {
						original {
							url
						}
					}
				}
			}
		}
	`

	let profile: any

	const returnedProfile = queryStore({
		client: getContextClient(),
		query: ProfileQuery
	})
</script>

<svelte:head>
	<title>Main page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if $returnedProfile.fetching}
		...loading
	{:else if $returnedProfile.error}
		...error
	{:else}
		{$returnedProfile.data.profile.name}
	{/if}
</section>

<style>
</style>
