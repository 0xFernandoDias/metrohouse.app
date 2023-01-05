<script lang="ts">
	// import type { PageData } from './$types'
	// import { getContextClient, gql, queryStore } from '@urql/svelte'

	// export let data: PageData

	// const profileQuery = gql`
	// 	query Profile {
	// 		profile(request: { profileId: "0x01" }) {
	// 			id
	// 			name
	// 			bio
	// 			attributes {
	// 				displayType
	// 				traitType
	// 				key
	// 				value
	// 			}
	// 			followNftAddress
	// 			metadata
	// 			isDefault
	// 			picture {
	// 				... on NftImage {
	// 					contractAddress
	// 					tokenId
	// 					uri
	// 					verified
	// 				}
	// 				... on MediaSet {
	// 					original {
	// 						url
	// 						mimeType
	// 					}
	// 				}
	// 				__typename
	// 			}
	// 			handle
	// 			coverPicture {
	// 				... on NftImage {
	// 					contractAddress
	// 					tokenId
	// 					uri
	// 					verified
	// 				}
	// 				... on MediaSet {
	// 					original {
	// 						url
	// 						mimeType
	// 					}
	// 				}
	// 				__typename
	// 			}
	// 			ownedBy
	// 			dispatcher {
	// 				address
	// 				canUseRelay
	// 			}
	// 			stats {
	// 				totalFollowers
	// 				totalFollowing
	// 				totalPosts
	// 				totalComments
	// 				totalMirrors
	// 				totalPublications
	// 				totalCollects
	// 			}
	// 			followModule {
	// 				... on FeeFollowModuleSettings {
	// 					type
	// 					amount {
	// 						asset {
	// 							symbol
	// 							name
	// 							decimals
	// 							address
	// 						}
	// 						value
	// 					}
	// 					recipient
	// 				}
	// 				... on ProfileFollowModuleSettings {
	// 					type
	// 				}
	// 				... on RevertFollowModuleSettings {
	// 					type
	// 				}
	// 			}
	// 		}
	// 	}
	// `

	// const returnedProfile: any = queryStore({
	// 	client: getContextClient(),
	// 	query: profileQuery
	// })

	// const profileOwnedBy = await Promise.all(returnedProfile.data.profile.ownedBy)

	// GO TO [id] on page
</script>

<svelte:head>
	<title>Profile page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div />
<section />

<style>
</style>
