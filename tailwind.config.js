module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        code: ["cascadia_code_regular", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
