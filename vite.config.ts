/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import { HstSvelte } from '@histoire/plugin-svelte'
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	histoire: {
		plugins: [HstSvelte()],
		setupFile: 'histoire.setup.ts',
		tree: {
			groups: [
			  {
				id: 'top',
				title: '',
			  },
			],
		  },
	},
	test: {
		globals: true,
    	environment: 'jsdom'
	},
};

export default config;
