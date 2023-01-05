import { dev } from '$app/environment'
import { kitqlServer } from '$lib/graphql/kitqlServer'
import { handleGraphiql, handleGraphql } from '@kitql/all-in'
import { sequence } from '@sveltejs/kit/hooks'

const graphiQLPath = dev ? '/api/playql' : undefined

export const handle = sequence(
	// create the graphql endpoint
	handleGraphql<IKitQLContext, RequestEvent>({
		graphiQLPath,
		...kitqlServer
	}),

	// enable graphiql in dev mode
	handleGraphiql({
		enabled: dev,
		graphiQLPath
	})
)
