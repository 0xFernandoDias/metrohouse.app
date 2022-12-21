import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
	important: true,
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
				grey190: '#201F1E',
				black: '#000000'
			}
		}
	},
	shortcuts: {
		'text-xxsRegular': 'font-segoeUi text-[0.625rem] leading-[0.75rem]',
		'text-xsRegular': 'font-segoeUi text-[0.75rem] leading-[1rem]',
		'text-smRegular': 'font-segoeUi text-[0.875rem] leading-[1.25rem]',
		'text-baseRegular': 'font-segoeUi text-[1rem] leading-[1.375rem]',
		'text-lgRegular': 'font-segoeUi text-[1.125rem] leading-[1.5rem]',
		'text-xlRegular': 'font-segoeUi text-[1.25rem] leading-[1.75rem]',
		'text-2xlRegular': 'font-segoeUi text-[1.75rem] leading-[2.25rem]',
		'text-3xlRegular': 'font-segoeUi text-[2rem] leading-[2.5rem]',
		'text-4xlRegular': 'font-segoeUi text-[2.625rem] leading-[3.25rem]',
		'text-5xlRegular': 'font-segoeUi text-[4.25rem] leading-[4.75rem]',
		'text-xxsSemibold': 'font-segoeUiSemibold text-[0.625rem] leading-[0.75rem]',
		'text-xsSemibold': 'font-segoeUiSemibold text-[0.75rem] leading-[1rem]',
		'text-smSemibold': 'font-segoeUiSemibold text-[0.875rem] leading-[1.25rem]',
		'text-baseSemibold': 'font-segoeUiSemibold text-[1rem] leading-[1.375rem]',
		'text-lgSemibold': 'font-segoeUiSemibold text-[1.125rem] leading-[1.5rem]',
		'text-xlSemibold': 'font-segoeUiSemibold text-[1.25rem] leading-[1.75rem]',
		'text-2xlSemibold': 'font-segoeUiSemibold text-[1.75rem] leading-[2.25rem]',
		'text-3xlSemibold': 'font-segoeUiSemibold text-[2rem] leading-[2.5rem]',
		'text-4xlSemibold': 'font-segoeUiSemibold text-[2.625] leading-[3.25rem]',
		'text-5xlSemibold': 'font-segoeUiSemibold text-[4.25rem] leading-[4.75rem]',
		hstack: 'flex items-center',
		vstack: 'flex flex-col'
	}
})
