// import type { PageLoad } from './$types'
// import Moralis from 'moralis'
// import { error } from '@sveltejs/kit'

// export const load = (async () => {
// 	try {
// 		const balances = await Moralis.EvmApi.nft.getWalletNFTs({
// 			address: '0xC13Da0f3701CbfbbA6744E513ea9d3eaBdC1c588',
// 			chain: 0x89
// 		})

// 		const nfts = balances.result

// 		if (nfts) {
// 			return nfts
// 		}
// 	} catch (err) {
// 		throw error(404, 'Not found')
// 	}
// }) satisfies PageLoad
