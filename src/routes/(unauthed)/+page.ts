// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// import type { PageLoad } from './$types'
// import { getContextClient, gql, queryStore } from '@urql/svelte'

// export const load = (() => {

// 	return { profile }
// }) satisfies PageLoad

export const prerender = true
export const ssr = true
