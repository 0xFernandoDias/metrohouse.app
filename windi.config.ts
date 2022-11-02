import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	shortcuts: {
		'metro-pink': {
			'@apply': 'text-metroPink'
		}
	},
	theme: {
		colors: {
			metroPink: '#855487',
			typePrimary: '#323130',
			typeSecondary: '#605E5C',
			typeDisabled: '#A19F9D',
			bodyDivider: '#EDEBE9',
			inputBorder: '#8A8886',
			inputHoverBorder: '#323130',
			themePrimary: '#0078D4',
			themeLighterAlt: '#EFF6FC',
			themeLighter: '#DEECF9',
			themeLight: '#C7E0F4',
			themeTertiary: '#2B88D8',
			themeDarkAlt: '#106EBE',
			themeDark: '#005A9E',
			themeDarker: '#004578',
			errorBackgroundFill: '#FDE7E9',
			successBackgroundFill: '#DFF6DD',
			severeWarningBackgroundFill: '#FED9CC',
			warningBackgroundFill: '#FFF4CE',
			statusErrorTypeOrIcon: '#A80000',
			statusSuccessTypeOrIcon: '#107C10',
			statusSevereWarningTypeOrIcon: '#D83B01',
			statusWarningTypeOrIcon: '#797775',
			overlayLight: 'rgba(255, 255, 255, 0.4)',
			overlayDark: 'rgba(0, 0, 0, 0.4)',
			white: '#FFF',
			grey10: '#FAF9F8',
			grey20: '#F3F2F1',
			grey30: '#EDEBE9',
			grey40: '#E1DFDD',
			grey50: '#D2D0CE',
			grey60: '#C8C6C4',
			grey90: '#A19F9D',
			grey130: '#605E5C',
			grey150: '#3B3A39',
			grey160: '#323130',
			grey190: '#201F1E'			
		},
		extend: {
			colors: {
				'pink-100': '#855487'
			}
		}
	}
})
