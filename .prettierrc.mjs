/** @type {import("prettier").Config} */
export default {
  semi: true,
  useTabs: false,
  tabWidth: 2,
  singleQuote: false,
  bracketSameLine: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.mjs",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
