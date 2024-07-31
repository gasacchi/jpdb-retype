/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,svelte}",],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        notojp: ["Noto Serif JP", "serif"]
      }
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss"),
    require("daisyui")
  ],
}

