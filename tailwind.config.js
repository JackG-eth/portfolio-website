/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				mycelium: {
					lightgreen: "#dab600",
					midgreen: "#041F17",
					black: "#000000",
				},
				grey: {
					100: "#F5F7FA",
					1000: "#1F2933",
				},
			},
		},
		fontFamily: {
			sans: ["Akkurat", "sans-serif"],
		},
	},
	plugins: [],
};
