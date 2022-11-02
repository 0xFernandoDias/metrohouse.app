import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	shortcuts: {
		'metro-pink': {
			'@apply': 'text-metroPink'
		}
	},
	theme: {
		colors: {
			metroPink: '#855487'
		},
		extend: {
			colors: {
				'pink-100': '#855487'
			}
		}
	}
})
