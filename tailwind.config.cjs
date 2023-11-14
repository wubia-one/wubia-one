const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        'CaskaydiaCove-NFM': [
          '/wuvia-one/CaskaydiaCoveNerdFontMono-Regular.ttf',
          'monospace',
        ],
        'CaskaydiaCove-NF': [
          '/wubia-one/CaskaydiaCoveNerdFont-Regular.ttf',
          'serif',
        ],
        'CaskaydiaCove-NFP': [
          '/wubia-one/CaskaydiaCoveNerdFontPropo-Regular.ttf',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
  
};
