<script lang="ts">
	import { getContextClient, gql, queryStore } from '@urql/svelte'
	import { goto } from '$app/navigation'

	const profileQuery = gql`
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

	const returnedProfile: any = queryStore({
		client: getContextClient(),
		query: profileQuery
	})

	// try catch

	const ownedBy = '0xC13Da0f3701CbfbbA6744E513ea9d3eaBdC1c588'

	function handleClick() {
		const link = `profile/${ownedBy}`
		goto(link)
	}
</script>

<svelte:head>
	<title>Main page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<button on:click|preventDefault={handleClick}>click</button>

<style>
</style>
