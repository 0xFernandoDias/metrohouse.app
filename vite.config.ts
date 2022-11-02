import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { HstSvelte } from '@histoire/plugin-svelte'

const config: UserConfig = {
	plugins: [sveltekit()],
	histoire: {
		plugins: [HstSvelte()],
		setupFile: 'histoire.setup.ts'
	}
};

export default config;
