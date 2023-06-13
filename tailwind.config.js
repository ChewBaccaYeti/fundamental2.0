module.exports = {
	content: ['./**/*.html'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px'
			}
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

const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			colors: {
				...colors
			}
		}
	}
}
