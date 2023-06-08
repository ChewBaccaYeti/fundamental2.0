/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.html'],
	darkMode: 'class',
	theme: {
		extend: {},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1920px'
		}
	},
	corePlugins: {
		aspectRatio: false
	},
	plugins: [
		{
			'postcss-import': {},
			'tailwindcss/nesting': 'postcss-nesting',
			'@tailwindcss/forms': {},

			tailwindcss: {},
			autoprefixer: {}
		}
	]
}
