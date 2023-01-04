/* eslint-disable @typescript-eslint/no-unused-vars */
import Moralis from 'moralis'
import { env as private_env } from '$env/dynamic/private'

Moralis.start({
	apiKey: private_env.MORALIS_API_KEY
})

export async function load() {
	const balances = await Moralis.EvmApi.nft.getWalletNFTs({
		address: '0xC13Da0f3701CbfbbA6744E513ea9d3eaBdC1c588',
		chain: 0x89
	})

	const nftArray: any = []
	const nfts = balances.result

	nfts.forEach((nft) => {
		if (nft.metadata) {
			if (
				'animation_url' in nft.metadata &&
				nft.metadata.animation_url !== null
				// nft.metadata.animation_url.includes('.lens')
			) {
				nftArray.push(nft.metadata.animation_url)
			}
		}
	})

	return { nftArray: nftArray }
}
