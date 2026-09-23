const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // 'media' or 'class' or false
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					light: '#6750a4', // 'var(--md-sys-color-primary-light)',
					dark: '#d0bcff', // 'var(--md-sys-color-primary-dark)',
					DEFAULT: '#6750a4', // 'var(--md-sys-color-primary)'
				},
				'primary-container': {
					light: '#eaddff', // 'var(--md-sys-color-primary-container-light)',
					dark: '#4f378b', // 'var(--md-sys-color-primary-container-dark)',
					DEFAULT: '#eaddff', // 'var(--md-sys-color-primary-container)',
				},
				'on-primary': {
					light: '#ffffff', // 'var(--md-sys-color-on-primary-light)',
					dark: '#381e72', // 'var(--md-sys-color-on-primary-dark)',
					DEFAULT: '#ffffff', // 'var(--md-sys-color-on-primary)',
				},
				'on-primary-container': {
					light: '#21005E',
					dark: '#EADDFF',
					DEFAULT: '#21005E',
				},
				'inverse-primary': {
					light: '#D0BCFF',
					dark: '#6750A4',
					DEFAULT: '#D0BCFF',
				},
				secondary: {
					light: '#625B71',
					dark: '#CCC2DC',
					DEFAULT: '#625B71',
	 			},
				'secondary-container': {
					light: '#E8DEF8',
					dark: '#4A4458',
					DEFAULT: '#E8DEF8',
				},
				'on-secondary': {
					light: '#FFFFFF',
					dark: '#332D41',
					DEFAULT: '#FFFFFF',
				},
				'on-secondary-container': {
					light: '#1E192B',
					dark: '#E8DEF8',
					DEFAULT: '#1E192B',
				},
				surface: {
					light: '#FEF7FF',
					dark: '#141218',
					DEFAULT: '#FEF7FF',
				},
				'surface-dim': {
					light: '#DED8E1',
					dark: '#141218',
					DEFAULT: '#DED8E1',
				},
				'surface-bright': {
					light: '#FEF7FF',
					dark: '#3B383E',
					DEFAULT: '#FEF7FF',
				},
				'surface-container-lowest': {
					light: '#FFFFFF',
					dark: '#0F0D13',
					DEFAULT: '#FFFFFF',
				},
				'surface-container-low': {
					light: '#F7F2FA',
					dark: '#1D1B20',
					DEFAULT: '#F7F2FA',
				},
				'surface-container': {
					light: '#F3EDF7',
					dark: '#211F26',
					DEFAULT: '#F3EDF7',
				},
				'surface-container-high': {
					light: '#ECE6F0',
					dark: '#2B2930',
					DEFAULT: '#ECE6F0',
				},
				'surface-container-highest': {
					light: '#E6E0E9',
					dark: '#36343B',
					DEFAULT: '#E6E0E9',
				},
				'surface-variant': {
					light: '#E7E0EC',
					dark: '#49454F',
					DEFAULT: '#E7E0EC',
				},
				'on-surface': {
					light: '#1C1B1F',
					dark: '#E6E1E5',
					DEFAULT: '#1C1B1F',
				},
				'on-surface-variant': {
					light: '#49454E',
					dark: '#CAC4D0',
					DEFAULT: '#49454E',
				},
				'inverse-surface': {
					light: '#313033',
					dark: '#E6E1E5',
					DEFAULT: '#313033',
				},
				'inverse-on-surface': {
					light: '#F4EFF4',
					dark: '#313033',
					DEFAULT: '#F4EFF4',
				},
				background: {
					light: '#FEF7FF',
					dark: '#141218',
					DEFAULT: '#FEF7FF',
				},
				'on-background': {
					light: '#1C1B1F',
					dark: '#E6E1E5',
					DEFAULT: '#1C1B1F',
				},
				error: {
					light: '#B3261E',
					dark: '#F2B8B5',
					DEFAULT: '#B3261E',
				},
				'error-container': {
					light: '#F9DEDC',
					dark: '#8C1D18',
					DEFAULT: '#F9DEDC',
				},
				'on-error': {
					light: '#FFFFFF',
					dark: '#601410',
					DEFAULT: '#FFFFFF',
				},
				'on-error-container': {
					light: '#410E0B',
					dark: '#F9DEDC',
					DEFAULT: '#410E0B',
				},
				outline: {
					light: '#79747E',
					dark: '#938F99',
					DEFAULT: '#79747E',
				},
				'outline-variant': {
					light: '#C4C7C5',
					dark: '#444746',
					DEFAULT: '#C4C7C5',
				},
				shadow: {
					light: '#000000',
					dark: '#000000',
					DEFAULT: '#000000',
				},
				'surface-tint-color': {
					light: '#6750A4',
					dark: '#D0BCFF',
					DEFAULT: '#6750A4',
				},
				scrim: {
					light: '#000000',
					dark: '#000000',
					DEFAULT: '#000000',
				},
			},
		},
		content: {
			'check': `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>')`,
		},
	},
	plugins: [
		require('tailwindcss/plugin')(function({ addVariant }) {
			addVariant('optional', '&:optional')
			addVariant('group-optional', ':merge(.group):optional &')
			addVariant('peer-optional', ':merge(.peer):optional ~ &')
		}),
		require('@tailwindcss/typography'),
		require("@tailwindcss/forms")({
			strategy: 'class', // 'base': only generate global styles, 'class': only generate classes
		})
	],
}
