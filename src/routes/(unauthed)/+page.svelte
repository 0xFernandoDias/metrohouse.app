<script lang="ts">
	import { gql, queryStore, getContextClient } from '@urql/svelte'

	const ProfileQuery = gql`
		query Profile {
			profile(request: { profileId: "0x09" }) {
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
		{$returnedProfile.data.profile.bio}
	{/if}
</section>

<style>
</style>
