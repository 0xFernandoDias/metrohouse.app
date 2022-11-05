import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
	plugins: [
		plugin(({ addBase }) => {
			addBase({
				'@font-face': {
					fontFamily: 'Segoe UI',
					src: 'url("/fonts/segoe-ui/segoeui.ttf") format("truetype")',
					fontWeight: '400',
					fontDisplay: 'swap'
				}
			})
		}),
		plugin(({ addBase }) => {
			addBase({
				'@font-face': {
					fontFamily: 'Segoe UI Semibold',
					src: 'url("/fonts/segoe-ui/seguisb.ttf") format("truetype")',
					fontWeight: '600',
					fontDisplay: 'swap'
				}
			})
		}),
		plugin(({ addBase }) => {
			addBase({
				'html *': { fontFamily: 'Segoe UI' }
			})
		}),
		plugin(({ addBase }) => {
			addBase({
				'html *': { fontFamily: 'Segoe UI Semibold' }
			})
		})
	],
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
			fontFamily: {
				segoeUi: 'Segoe UI',
				segoeUiSemibold: 'Segoe UI Semibold'
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
		}
	},
	shortcuts: {
		xxsRegular: 'text-[0.625rem] leading-[0.75rem] font-segoeUi',
		xsRegular: 'text-[0.75rem] leading-[1rem] font-segoeUi',
		smRegular: 'text-[0.875rem] leading-[1.25rem] font-segoeUi',
		baseRegular: 'text-[1rem] leading-[1.375rem] font-segoeUi',
		lgRegular: 'text-[1.125rem] leading-[1.5rem] font-segoeUi',
		xlRegular: 'text-[1.25rem] leading-[1.75rem] font-segoeUi',
		'2xlRegular': 'text-[1.75rem] leading-[2.25rem] font-segoeUi',
		'3xlRegular': 'text-[2rem] leading-[2.5rem] font-segoeUi',
		'4xlRegular': 'text-[2.625rem] leading-[3.25rem] font-segoeUi',
		'5xlRegular': 'text-[4.25rem] leading-[4.75rem] font-segoeUi',
		xxsSemibold: 'text-[0.625rem] leading-[0.75rem] font-segoeUiSemibold',
		xsSemibold: 'text-[0.75rem] leading-[1rem] font-segoeUiSemibold',
		smSemibold: 'text-[0.875rem] leading-[1.25rem] font-segoeUiSemibold',
		baseSemibold: 'text-[1rem] leading-[1.375rem] font-segoeUiSemibold',
		lgSemibold: 'text-[1.125rem] leading-[1.5rem] font-segoeUiSemibold',
		xlSemibold: 'text-[1.25rem] leading-[1.75rem] font-segoeUiSemibold',
		'2xlSemibold': 'text-[1.75rem] leading-[2.25rem] font-segoeUiSemibold',
		'3xlSemibold': 'text-[2rem] leading-[2.5rem] font-segoeUiSemibold',
		'4xlSemibold': 'text-[2.625] leading-[3.25rem] font-segoeUiSemibold',
		'5xlSemibold': 'text-[4.25rem] leading-[4.75rem] font-segoeUiSemibold',
		hstack: 'flex items-center',
		vstack: 'flex flex-col',
	}
})
