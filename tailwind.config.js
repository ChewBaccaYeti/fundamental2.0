/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.html'],
	darkMode: 'class',
	theme: {
		extend: {},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px'
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
