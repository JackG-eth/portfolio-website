/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		function ({ addComponents }) {
			addComponents({
				".container": {
					maxWidth: "1700px",
				},
			});
		},
	],
};
