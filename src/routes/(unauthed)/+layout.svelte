<script lang="ts">
	import { client as clientLens } from '$lib/lensCall'
	import { getContextClient, gql, queryStore, setContextClient } from '@urql/svelte'

	export let data: any

	setContextClient(clientLens)

	const ProfileQuery = gql`
		query Profile {
			profile(request: { profileId: "0x35" }) {
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
				ownedBy
			}
		}
	`

	let returnedProfile = queryStore({
		client: getContextClient(),
		query: ProfileQuery
	})

	$: {
		if (!$returnedProfile.fetching && $returnedProfile.data !== undefined) {
			returnedProfile = $returnedProfile.data
		}
	}

	$: console.log('data ++layout reactive: ', data)
	$: console.log('returnedProfile ++layout reactive: ', $returnedProfile) // fetching: true
</script>

<slot />

<style global windi:global windi:preflights:global windi:safelist:global>
	span {
		@apply first-letter:uppercase;
	}
</style>
