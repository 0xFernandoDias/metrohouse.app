import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { windi } from "svelte-windicss-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	//https://kit.svelte.dev/docs/configuration
	preprocess: [
		preprocess(),
		windi({})
	],
	kit: {
		adapter: adapter()
	},
	alias: {},
	env: {
		dir: process.cwd(),
		publicPrefix: 'PUBLIC_'
	  },
	  files: {
		assets: 'static',
		tests: 'tests',
		lib: 'src/lib',
		params: 'src/params',
		routes: 'src/routes',
		serviceWorker: 'src/service-worker',
		appTemplate: 'src/app.html',
		errorTemplate: 'src/error.html'
	  },
	extensions: ['.svelte'],
};

export default config;
