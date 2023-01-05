<script lang="ts">
	import { getContextClient, gql, queryStore } from '@urql/svelte'
	import { goto } from '$app/navigation'

	const handleClick = () => {
		goto(`profile/${ownedBy}`)
	}

	let ownedBy = ''

	try {
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

		const returnedProfile = queryStore({
			client: getContextClient(),
			query: profileQuery
		})

		returnedProfile.subscribe((result) => {
			ownedBy = result?.data?.profile.ownedBy
		})
	} catch (error) {
		console.log(error)
	}
</script>

<svelte:head>
	<title>Main page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<button on:click|preventDefault={handleClick}>click</button>

<style>
</style>
