import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},

			colors: {
				transparent: "transparent",
				black: "#000",
				white: "#fff",
				gray: {
					10: "#1A1A1A",
					15: "#262626",
					20: "#333333",
					30: "#4C4C4D",
					40: "#59595A",
					50: "#656567",
					60: "#98989A",
					70: "#B3B3B3",
                },
                
				whites: {
					90: "#E4E4E7",
					95: "#F1F1F3",
					97: "#F7F7F8",
					99: "#FCFCFD",
				},

				yellow: {
					50: "#FFD500",
					55: "#FFD81A",
					70: "#FFE566",
					80: "#FFEE99",
					90: "#FFF6CC",
					95: "#FFFAE5",
					97: "#FFFCF0",
					99: "#FFFEFA",
				},

				// ...
			},
		},
	},
	plugins: [],
};
export default config;
