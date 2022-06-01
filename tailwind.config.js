module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#004C3F",
          200: "#9DEDC6",
          300: "#002E24",
        },
        secondary: {
          100: "#FFA881",
          200: "#FFBC9F",
        },
        tertiary: {
          100: "#FFCB66",
          200: "#FFDB95",
          300: "#FBF7EC",
        },
        black: {
          100: "#212625",
          200: "#424C4A",
          300: "#57605E",
          400: "#82918E",
        },
        dark: {
          background: "#121212",
        },
      },
      fontFamily: {
        heading: "Plus Jakarta Sans, sans-serif",
        text: "DM Sans, sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
