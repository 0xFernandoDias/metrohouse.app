import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	theme: {
		colors: {
			metroPink: '#855487'
		},
		extend: {
			colors: {
				'pink-100': '#855487'
			}
		}
	},
	shortcuts: {
		'metro-pink': {
			'@apply': 'text-metroPink'
		}
	}
})
