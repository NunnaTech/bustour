/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			poppins: ['Poppins'],
		},
		extend: {
			colors: {
				primary: '#1467C5',
				secondary: '#DD9C00',
				text: '#484848',
				soft: '#F3F4F6',
				background: '#F0F1F3',
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [],
};
