/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      spacing: {
        "104": "28rem",
        "110": "32rem",
        "116": "36rem",
        "122": "38rem",
        "128": "42rem",
        "134": "48rem",
      }
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            primary: "black",
            background: "white",
          }
        }
      },
      themes: [
        {
          name: "dark",
          extend: {
            colors: {
              primary: "white",
              background: "black",
            }
          }
        }
      ]
    })
  ],
}