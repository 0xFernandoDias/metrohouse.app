import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	theme: {
		colors: {
			metroPink: '#855487'
		},
		extend: {
			colors: {
				red: '#ff0000'
			}
		}
	},
	shortcuts: {
		'metro-pink': {
			'@apply': 'text-metroPink'
		}
	}
})
