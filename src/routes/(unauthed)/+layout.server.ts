import Moralis from 'moralis'
import { getContextClient, gql, queryStore } from '@urql/svelte'
import { env as private_env } from '$env/dynamic/private'

export async function load() {
	await Moralis.start({
		apiKey: private_env.MORALIS_API_KEY
		// ...and any other configuration
	})

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

	// const returnedProfile: any = queryStore({
	// 	client: getContextClient(),
	// 	query: ProfileQuery
	// })

	const balances = await Moralis.EvmApi.nft.getWalletNFTs({
		address: '0xC13Da0f3701CbfbbA6744E513ea9d3eaBdC1c588',
		chain: 0x89
	})

	console.log(balances)

	return { balances: balances }
}
