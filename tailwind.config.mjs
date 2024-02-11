/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "rgb(var(--rgb-white) / <alpha-value>)",
      black: "rgb(var(--rgb-black) / <alpha-value>)",
      currentBg: "var(--bg-primary)",

      gray: {
        100: "rgb(var(--rgb-gray-100) / <alpha-value>)",
        200: "rgb(var(--rgb-gray-200) / <alpha-value>)",
        300: "rgb(var(--rgb-gray-300) / <alpha-value>)",
        400: "rgb(var(--rgb-gray-400) / <alpha-value>)",
        500: "rgb(var(--rgb-gray-500) / <alpha-value>)",
        600: "rgb(var(--rgb-gray-600) / <alpha-value>)",
        700: "rgb(var(--rgb-gray-700) / <alpha-value>)",
        800: "rgb(var(--rgb-gray-800) / <alpha-value>)",
        900: "rgb(var(--rgb-gray-900) / <alpha-value>)",
      },
      blueGray: {
        500: "rgb(var(--rgb-blueGray-500) / <alpha-value>)",
      },
      red: {
        500: "var(--color-red-500)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      fontSize: {
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.625rem",
        "4xl": "1.75rem",
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "3rem",
      },
      colors: {
        brand: {
          DEFAULT: "rgb(var(--rgb-lemon-400) / <alpha-value>)",
          100: "rgb(var(--rgb-lemon-100) / <alpha-value>)",
          200: "rgb(var(--rgb-lemon-200) / <alpha-value>)",
          300: "rgb(var(--rgb-lemon-300) / <alpha-value>)",
          400: "rgb(var(--rgb-lemon-400) / <alpha-value>)",
          500: "rgb(var(--rgb-lemon-500) / <alpha-value>)",
          600: "rgb(var(--rgb-lemon-600) / <alpha-value>)",
          700: "rgb(var(--rgb-lemon-700) / <alpha-value>)",
          800: "rgb(var(--rgb-lemon-800) / <alpha-value>)",
          900: "rgb(var(--rgb-lemon-900) / <alpha-value>)",
        },
      },
      spacing: {
        "5vw": "5vw", // pull featured sections and navbar in the margin
        "10vw": "10vw", // page margin
      },
      height: {
        hero10: "calc(100vh - 10rem)",
        hero12: "calc(100vh - 12rem)",
      },
      width: {
        screen2: "calc(100vw - 2rem)",
      },
      maxWidth: {
        "8xl": "96rem",
      },
      minHeight: {
        hero10: "calc(100vh - 10rem)",
        hero12: "calc(100vh - 12rem)",
      },

      typography: (theme) => {
        // some fontSizes return [size, props], others just size :/
        const fontSize = (size) => {
          const result = theme(`fontSize.${size}`);
          return Array.isArray(result) ? result[0] : result;
        };

        const breakout = {
          marginLeft: 0,
          marginRight: 0,
          gridColumn: "2 / span 10",
        };

        return {
          // DEFAULT only holds shared stuff and not the things that change
          // between light/dark
          DEFAULT: {
            css: [
              {
                "> *": {
                  gridColumn: "1 / -1",

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    gridColumn: "3 / span 8",
                  },
                },
                p: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  fontSize: fontSize("lg"),
                },
                "> div": {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  fontSize: fontSize("lg"),
                },
                a: {
                  textDecoration: "none",
                },
                "a:hover,a:focus": {
                  textDecoration: "underline",
                  outline: "none",
                },
                strong: {
                  fontWeight: theme("fontWeight.medium"),
                  fontSize: fontSize("lg"),
                },
                hr: {
                  marginTop: theme("spacing.8"),
                  marginBottom: theme("spacing.16"),
                },
                pre: {
                  color: "var(--base05)",
                  backgroundColor: "var(--base00)",
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  marginLeft: `-${theme("spacing.10vw")}`,
                  marginRight: `-${theme("spacing.10vw")}`,
                  padding: theme("spacing.8"),
                  borderRadius: 0,

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    borderRadius: theme("borderRadius.lg"),
                    ...breakout,
                  },
                },
                ".embed": {
                  position: "relative",
                  marginLeft: "-10vw",
                  marginRight: "-10vw",
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    ...breakout,
                  },
                },
                ".embed > div": {
                  height: "0px",
                },
                ".embed > div > iframe": {
                  height: "100% !important",
                  width: "100% !important",
                  top: "0",
                  left: "0",
                  position: "absolute",
                  border: "none",
                  borderRadius: "0 !important",
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    borderRadius: "0.5rem !important",
                  },
                },
                ul: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                },
                ol: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                },
                "h1, h2, h3, h4, h5, h6": {
                  marginTop: 0,
                  marginBottom: 0,
                  fontWeight: theme("fontWeight.normal"),
                  fontFamily: theme("fontFamily.serif"),

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontWeight: theme("fontWeight.medium"),
                  },
                },
                // tailwind doesn't stick to this property order, so we can't make 'h3' overrule 'h2, h3, h4'
                "h1, h2": {
                  fontSize: fontSize("2xl"),
                  marginTop: theme("spacing.20"),
                  marginBottom: theme("spacing.10"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("3xl"),
                  },
                },
                h3: {
                  fontSize: fontSize("xl"),
                  marginTop: theme("spacing.16"),
                  marginBottom: theme("spacing.10"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("2xl"),
                  },
                },
                "h4, h5, h6": {
                  fontSize: fontSize("lg"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("xl"),
                  },
                },
                img: {
                  // images are wrapped in <p>, which already has margin
                  marginTop: 0,
                  marginBottom: 0,
                  borderRadius: theme("borderRadius.lg"),
                },
                blockquote: {
                  fontWeight: theme("fontWeight.normal"),
                  border: "none",
                  borderRadius: theme("borderRadius.lg"),
                  padding: theme("spacing.8"),
                  marginTop: 0,
                  marginBottom: theme("spacing.10"),
                },
                "blockquote > :last-child": {
                  marginBottom: 0,
                },
              },
            ],
          },
          // use prose-light instead of default, so it's easier to see theme differences
          light: {
            css: [
              {
                color: "theme('colors.gray.500')",
                a: {
                  color: "theme('colors.black')",
                },
                strong: {
                  color: "theme('colors.black')",
                },
                hr: {
                  borderColor: "theme('colors.gray.200')",
                },
                code: {
                  color: "theme('colors.gray.800')",
                },
                "h1, h2, h3, h4, h5, h6, thead th": {
                  color: "theme('colors.black')",
                },
                blockquote: {
                  color: "theme('colors.gray.500')",
                  backgroundColor: "theme('colors.gray.100')",
                },
                "thead, tbody tr": {
                  borderBottomColor: "theme('colors.gray.200')",
                },
              },
            ],
          },
          dark: {
            css: [
              {
                color: "theme('colors.blueGray.500')",
                a: {
                  color: "theme('colors.white')",
                },
                strong: {
                  color: "theme('colors.white')",
                },
                hr: {
                  borderColor: "theme('colors.gray.600')",
                },
                code: {
                  color: "theme('colors.gray.100')",
                },
                "h1, h2, h3, h4, h5, h6, thead th": {
                  color: "theme('colors.white')",
                },
                blockquote: {
                  color: "theme('colors.blueGray.500')",
                  backgroundColor: "theme('colors.gray.800')",
                },
                "thead, tbody tr": {
                  borderBottomColor: "theme('colors.gray.600')",
                },
              },
            ],
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
