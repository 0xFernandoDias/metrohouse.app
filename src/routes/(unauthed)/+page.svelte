<script context="module" lang="ts">
	import { createClient, setContextClient, gql } from '@urql/svelte'

	export const client = createClient({
		url: 'https://api.lens.dev'
	})

	/** @type {import('./$types').PageLoad} */
	export const load = async () => {
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

		let anyVariablee

		const res = await client.query(ProfileQuery, anyVariablee).toPromise()

		return { profile: res?.data.profile }
	}
</script>

<script lang="ts">
	setContextClient(client)

	export let data: any
	$: profile = data.profile
</script>

<svelte:head>
	<title>Main page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if !profile}
		<p>...waiting</p>
	{:else}
		<p>The profile is {$profile}</p>
	{/if}
	<!-- <Switch label="Enable dark mode" bind:value={sliderValue} /> -->
</section>

<style>
</style>
