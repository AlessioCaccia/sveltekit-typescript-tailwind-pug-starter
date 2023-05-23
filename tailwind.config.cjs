/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,pug,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				// custom rules for starter web page, remove these for your own project
				primary: "#142239",
				accent: "#ebf92f",
				white: "#fff",
			},
			fontSize: {
				step0: "clamp(1rem, calc(0.82rem + 0.75vw), 1.5rem)",
				step1: "clamp(1.2rem, calc(0.96rem + 1.01vw), 1.88rem)",
				step2: "clamp(1.44rem, calc(1.12rem + 1.36vw), 2.34rem)",
				step3: "clamp(1.73rem, calc(1.3rem + 1.81vw), 2.93rem)",
				step4: "clamp(2.07rem, calc(1.51rem + 2.39vw), 3.66rem)",
				step5: "clamp(2.49rem, calc(1.75rem + 3.14vw), 4.58rem)",
			},
		},
	},
	plugins: [require("daisyui")],
};
