import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
	plugins: [
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
					fontFamily: 'Segoe UI Semibold',
					src: 'url("/fonts/segoe-ui/seguisb.ttf") format("truetype")',
					fontWeight: 'semibold',
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
				'html *': { fontFamily: 'Segoe UI Semibold'}
			})
		})
	],
	theme: {
		fontFamily: {
			segoe: 'Segoe UI',
			segoeSemibold: 'Segoe UI Semibold'
		},
		fontSize: {
			xxsRegular: [
				'0.625rem',
				{
					fontWeight: 'normal',
					lineHeight: '0.75rem',
					fontFamily: 'Segoe UI'
				}
			],
			xsRegular: [
				'0.75rem',
				{
					fontWeight: 'normal',
					lineHeight: '1rem',
					fontFamily: 'Segoe UI'
				}
			],
			smRegular: [
				'0.875rem',
				{
					fontWeight: 'normal',
					lineHeight: '1.25rem',
					fontFamily: 'Segoe UI'
				}
			],
			baseRegular: [
				'1rem',
				{
					fontWeight: 'normal',
					lineHeight: '1.375rem',
					fontFamily: 'Segoe UI'
				}
			],
			lgRegular: [
				'1.125rem',
				{
					fontWeight: 'normal',
					lineHeight: '1.5rem',
					fontFamily: 'Segoe UI'
				}
			],
			xlRegular: [
				'1.25rem',
				{
					fontWeight: 'normal',
					lineHeight: '1.75rem',
					fontFamily: 'Segoe UI'
				}
			],
			'2xlRegular': [
				'1.75rem',
				{
					fontWeight: 'normal',
					lineHeight: '2.25rem',
					fontFamily: 'Segoe UI'
				}
			],
			'3xlRegular': [
				'2rem',
				{
					fontWeight: 'normal',
					lineHeight: '2.5rem',
					fontFamily: 'Segoe UI'
				}
			],
			'4xlRegular': [
				'2.625',
				{
					fontWeight: 'normal',
					lineHeight: '3.25rem',
					fontFamily: 'Segoe UI'
				}
			],
			'5xlRegular': [
				'4.25rem',
				{
					fontWeight: 'normal',
					lineHeight: '4.75rem',
					fontFamily: 'Segoe UI'
				}
			],
			xxsSemibold: [
				'0.625rem',
				{
					fontWeight: 'semibold',
					lineHeight: '0.75rem',
					fontFamily: 'Segoe UI Semibold'
				}
			],
			xsSemibold: [
				'0.75rem',
				{
					fontWeight: 'semibold',
					lineHeight: '1rem',
					fontFamily: 'Segoe UI Semibold'
				}
			],
			smSemibold: [
				'0.875rem',
				{
					fontWeight: 'semibold',
					lineHeight: '1.25rem',
					fontFamily: 'Segoe UI Semibold'
				}
			],
			baseSemibold: [
				'1rem',
				{
					fontWeight: 'semibold',
					lineHeight: '1.375rem',
					fontFamily: 'Segoe UI Semibold'
				}
			],
			lgSemibold: [
				'1.125rem',
				{
					fontWeight: 'semibold',
					lineHeight: '1.5rem',
					fontFamily: 'Segoe UI Semibold'
				}
			],
			xlSemibold: [
				'1.25rem',
				{
					fontWeight: 'semibold',
					lineHeight: '1.75rem',
					fontFamily: 'Segoe UI Semibold'
				}
			],
			'2xlSemibold': [
				'1.75rem',
				{
					fontWeight: 'semibold',
					lineHeight: '2.25rem',
					fontFamily: 'Segoe UI Semibold'
				}
			],
			'3xlSemibold': [
				'2rem',
				{
					fontWeight: 'semibold',
					lineHeight: '2.5rem',
					fontFamily: 'Segoe UI Semibold'
				}
			],
			'4xlSemibold': [
				'2.625',
				{
					fontWeight: 'semibold',
					lineHeight: '3.25rem',
					fontFamily: 'Segoe UI Semibold'
				}
			],
			'5xlSemibold': [
				'4.25rem',
				{
					fontWeight: 'semibold',
					lineHeight: '4.75rem',
					fontFamily: 'Segoe UI Semibold'
				}
			]
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
		extend: {
			screens: {
				sm: '320px',
				md: '480px',
				lg: '640px',
				xl: '1024px',
				'2xl': '1366px',
				'3xl': '1920px'
			}
		}
	},
	shortcuts: {
		hstack: 'flex items-center',
		vstack: 'flex flex-col',
		icon: 'w-6 h-6 fill-current'
	}
})
