import { getContextClient, gql, queryStore } from '@urql/svelte'
import Moralis from 'moralis'

export async function load() {
	const getBalances = async () => {
		// const ProfileQuery = gql`
		// 	query Profile {
		// 		profile(request: { profileId: "0x35" }) {
		// 			id
		// 			name
		// 			bio
		// 			picture {
		// 				... on MediaSet {
		// 					original {
		// 						url
		// 					}
		// 				}
		// 			}
		// 			ownedBy
		// 		}
		// 	}
		// `

		// const client2 = getContextClient()

		// const returnedProfile: any = queryStore({
		// 	client: client2,
		// 	query: ProfileQuery
		// })

		const balances = await Moralis.EvmApi.nft.getWalletNFTs({
			address: '0xC13Da0f3701CbfbbA6744E513ea9d3eaBdC1c588',
			chain: 0x89
		})

		if (balances) {
			return { balances }
		}
	}

	const nfts = getBalances().then((value) => {
		const balances2 = value?.balances.result

		const nftArray = balances2?.map((nft) => {
			if (nft.metadata) {
				return nft.metadata
			}
		})

		return nftArray
	})

	return { nfts }
}
