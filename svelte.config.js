import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { windi } from 'svelte-windicss-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	//https://kit.svelte.dev/docs/configuration
	preprocess: [vitePreprocess(), windi({})],
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte']
}

export default config
