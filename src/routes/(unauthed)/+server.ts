import Moralis from 'moralis'

await Moralis.start({
	apiKey: import.meta.env.MORALIS_API_KEY
	// ...and any other configuration
}).then(() => console.log('Moralis started!'))
