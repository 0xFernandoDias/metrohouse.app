import Moralis from 'moralis'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
export const load = (async () => {
	try {
		const nfts = await Moralis.EvmApi.nft
			.getWalletNFTs({
				address: '0xC13Da0f3701CbfbbA6744E513ea9d3eaBdC1c588',
				chain: 0x89
			})
			.then((value) => {
				return value.result
			})

		return { nfts }
	} catch (err) {
		throw error(404, 'Not found')
	}
}) satisfies PageServerLoad
