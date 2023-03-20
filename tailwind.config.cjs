/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // @ts-expect-error: No type defintion defined in the library
    require("windy-radix-palette"),
    require("@tailwindcss/typography"),
    // @ts-expect-error: No type defintion defined in the library
    require("windy-radix-typography"),
    // @ts-expect-error: No type defintion defined in the library
    require("tailwindcss-animate"),
  ],
};

module.exports = config;
