module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ["cascadia_code_regular", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
