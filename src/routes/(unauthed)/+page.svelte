<script lang="ts">
	import { gql, queryStore, getContextClient } from '@urql/svelte'

	const ProfileQuery = gql`
		query Profile {
			profile(request: { profileId: "0x01" }) {
				id
				name
				bio
				attributes {
					displayType
					traitType
					key
					value
				}
				followNftAddress
				metadata
				isDefault
				picture {
					... on NftImage {
						contractAddress
						tokenId
						uri
						verified
					}
					... on MediaSet {
						original {
							url
							mimeType
						}
					}
					__typename
				}
				handle
				coverPicture {
					... on NftImage {
						contractAddress
						tokenId
						uri
						verified
					}
					... on MediaSet {
						original {
							url
							mimeType
						}
					}
					__typename
				}
				ownedBy
				dispatcher {
					address
					canUseRelay
				}
				stats {
					totalFollowers
					totalFollowing
					totalPosts
					totalComments
					totalMirrors
					totalPublications
					totalCollects
				}
				followModule {
					... on FeeFollowModuleSettings {
						type
						amount {
							asset {
								symbol
								name
								decimals
								address
							}
							value
						}
						recipient
					}
					... on ProfileFollowModuleSettings {
						type
					}
					... on RevertFollowModuleSettings {
						type
					}
				}
			}
		}
	`

	export let request = ''

	$: res = queryStore({
		client: getContextClient(),
		query: ProfileQuery,
		variables: { request }
	})
</script>

<svelte:head>
	<title>Main page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if $res.fetching}
		<p>...waiting</p>
	{:else if $res.error}
		<p>Oh no... {$res.error.message}</p>
	{:else}
		<p>The response is {$res.data.ProfileQuery}</p>
	{/if}
	<!-- <Switch label="Enable dark mode" bind:value={sliderValue} /> -->
</section>

<style>
</style>
