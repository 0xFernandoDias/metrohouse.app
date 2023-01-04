/* eslint-disable @typescript-eslint/no-unused-vars */
import Moralis from 'moralis'
import { env as private_env } from '$env/dynamic/private'

Moralis.start({
	apiKey: private_env.MORALIS_API_KEY
})
