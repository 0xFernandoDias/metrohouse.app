import Moralis from 'moralis'
import { env as private_env } from '$env/dynamic/private'

// Values set in the backend
const DOMAIN = 'defi.finance'
const STATEMENT = 'Please sign this message to confirm your identity.'
const URI = 'https://defi.finance'
const EXPIRATION_TIME = '2023-01-01T00:00:00.000Z'
const TIMEOUT = 15

await Moralis.start({
	apiKey: private_env.MORALIS_API_KEY
	// ...and any other configuration
}).then(() => console.log('Moralis started!'))

// Values provided by the user
const address = '0x930770cB8ea923d46D0a360de6AEb1b91Ca80171'
const chain = '0x1'
const network = 'evm'

const result = await Moralis.Auth.requestMessage({
	address,
	chain,
	network,
	domain: DOMAIN,
	statement: STATEMENT,
	uri: URI,
	expirationTime: EXPIRATION_TIME,
	timeout: TIMEOUT
})
	.then((result) => {
		console.log(result)
	})
	.catch((error) => console.log('The error is:' + error))
