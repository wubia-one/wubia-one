const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'CaskaydiaCove-NFM': [
          '/CaskaydiaCoveNerdFontMono-Regular.ttf', ...defaultTheme.fontFamily.mono,
        ],
        'CaskaydiaCove-NF': [
  '/CaskaydiaCoveNerdFont-Regular.ttf',
  ...defaultTheme.fontFamily.serif,
],
'CaskaydiaCove-NFP': [
  '/CaskaydiaCoveNerdFontPropo-Regular.ttf',
  ...defaultTheme.fontFamily.sans,
],
      },
    },
  },
  plugins: [],
  
};
