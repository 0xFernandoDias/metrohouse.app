import { kitql } from '@kitql/all-in'
import { sveltekit } from '@sveltejs/kit/vite'
import houdini from 'houdini/vite'
import { HstSvelte } from '@histoire/plugin-svelte'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		kitql({
			projectName: 'init'
			// prismaFileForEnums: './prisma/schema.prisma'
		}),
		houdini(),
		sveltekit()
	],
	histoire: {
		plugins: [HstSvelte()],
		setupFile: 'histoire.setup.ts',
		tree: {
			groups: [
				{
					id: 'top',
					title: ''
				}
			]
		}
	},
	test: {
		globals: true,
		environment: 'jsdom'
	},
	optimizeDeps: {
		exclude: ['@urql/svelte']
	}
}

export default config
