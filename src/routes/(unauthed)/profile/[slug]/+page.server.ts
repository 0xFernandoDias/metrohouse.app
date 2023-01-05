import Moralis from 'moralis'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (async ({ params }) => {
	if (params.slug) {
		try {
			const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
				address: params.slug,
				chain: 0x89
			})

			const result = nfts.toJSON()

			return { result }
		} catch (err) {
			throw error(404, 'Not found')
		}
	}
}) satisfies PageServerLoad
