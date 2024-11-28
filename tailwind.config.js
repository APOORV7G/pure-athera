/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", "sans-serif"], // Optional: Set as default sans font
        mono: ["JetBrains Mono", "monospace"], // Use for monospace styles
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        pure_athera: {
          primary: "#ffbd32",

          "primary-content": "#233039",

          secondary: "#233039",

          "secondary-content": "#ffbd32",

          accent: "#fda4af",

          "accent-content": "#292524",

          neutral: "#040e04",

          "neutral-content": "#c5c8c5",

          "base-100": "#ffffff",

          "base-200": "#f9f9f9",

          "base-300": "#f5f5f5",

          "base-content": "#111827",

          info: "#0093dd",

          "info-content": "#000000",

          success: "#41f195",

          "success-content": "#000000",

          warning: "#ffda00",

          "warning-content": "#000000",

          error: "#f14141",

          "error-content": "#000000",
        },

        dark_pure_athera: {
          primary: "#233039",

          "primary-content": "#ffbd32",

          secondary: "#ffbd32",

          "secondary-content": "#233039",

          accent: "#fda4af",

          "accent-content": "#292524",

          neutral: "#040e04",

          "neutral-content": "#c5c8c5",

          "base-100": "#000000",

          "base-200": "#090909",

          "base-300": "#050505",

          "base-content": "#ffffff",

          info: "#0093dd",

          "info-content": "#000000",

          success: "#41f195",

          "success-content": "#000000",

          warning: "#ffda00",

          "warning-content": "#000000",

          error: "#f14141",

          "error-content": "#000000",
        },
      },
    ],
  },
};
