import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
	shortcuts: {
		'metro-pink': 'text-metroPink',
		hstack: 'flex items-center',
		vstack: 'flex flex-col',
		icon: 'w-6 h-6 fill-current',
		'app-border': 'border-gray-200 dark:border-dark-300',
		'app-modal': 'fixed top-0 w-full h-full z-50 bg-white bg-opacity-70 blur-5 shadow-lg',

		regularMetadataText: 'font-segoe text-sm font-normal',
		regularoBodyText: 'font-segoe text-sm font-normal',
		regularSubjectText: 'font-segoe text-sm font-normal',
		regularHeaderText: 'font-segoe text-sm font-normal',
		regularPaneHeaderText: 'font-segoe text-sm font-normal',
		regularPageTitleText: 'font-segoe text-sm font-normal',
		regularGreetingTitleText: 'font-segoe text-sm font-normal',
		regularHeroTitleText: 'font-segoe text-sm font-normal',
		semiboldMetadataText: 'font-segoe text-sm font-semibold',
		semiboldoBodyText: 'font-segoe text-sm font-semibold',
		semiboldSubjectText: 'font-segoe text-sm font-semibold',
		semiboldHeaderText: 'font-segoe text-sm font-semibold',
		semiboldPaneHeaderText: 'font-segoe text-sm font-semibold',
		semiboldPageTitleText: 'font-segoe text-sm font-semibold',
		semiboldGreetingTitleText: 'font-segoe text-sm font-semibold',
		semiboldHeroTitleText: 'font-segoe text-sm font-semibold',
	},
	theme: {
		screens: {
			sm: '320px',
			md: '480px',
			lg: '640px',
			xl: '1024px',
			'2xl': '1366px'
		},
		extend: {
			screens: {
				'3xl': '1920px'
			},
			colors: {
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
				white: '#FFFFFF',
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
			fontFamily: {
				segoe: ['Segoe UI', 'sans-serif']
			}
		}
	},
	plugins: [
		plugin(({ addBase }) => {
			addBase({
				'@font-face': {
					fontFamily: 'Segoe UI',
					src: 'url("/fonts/segoe-ui/segoeuil.ttf") format("truetype")',
					fontWeight: 'lighter',
					fontDisplay: 'swap'
				}
			})
		}),
		plugin(({ addBase }) => {
			addBase({
				'@font-face': {
					fontFamily: 'Segoe UI',
					src: 'url("/fonts/segoe-ui/segoeuisl.ttf") format("truetype")',
					fontWeight: 'light',
					fontDisplay: 'swap'
				}
			})
		}),
		plugin(({ addBase }) => {
			addBase({
				'@font-face': {
					fontFamily: 'Segoe UI',
					src: 'url("/fonts/segoe-ui/segoeui.ttf") format("truetype")',
					fontWeight: 'normal',
					fontDisplay: 'swap'
				}
			})
		}),
		plugin(({ addBase }) => {
			addBase({
				'@font-face': {
					fontFamily: 'Segoe UI',
					src: 'url("/fonts/segoe-ui/seguisb.ttf") format("truetype")',
					fontWeight: 'bold',
					fontDisplay: 'swap'
				}
			})
		}),
		plugin(({ addBase }) => {
			addBase({
				'@font-face': {
					fontFamily: 'Segoe UI',
					src: 'url("/fonts/segoe-ui/segoeuib.ttf") format("truetype")',
					fontWeight: 'bolder',
					fontDisplay: 'swap'
				}
			})
		})
	]
})
