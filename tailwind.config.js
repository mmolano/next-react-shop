/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      in: "in 0.4s forwards",
      out: "out 0.4s backwards",
      product_out: "out 0.2s ease-out",
    },
    keyframes: {
      in: {
        "0%": {
          transform: "translateX(100%)"
        },
        "50%": {
          transform: "translateX(50%)"
        },
        "100%": {
          transform: "translateX(0%)"
        },
      },
      out: {
        "0%": {
          transform: "translateX(0%)"
        },
        "100%": {
          transform: "translateX(100%)"
        },
      },
    }
  },
  plugins: [],
}
