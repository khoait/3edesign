import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.3edesign.studio/",
  prefetch: {
    prefetchAll: true,
  },
  i18n: {
    defaultLocale: "vi",
    locales: ["vi", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: "vi",
    },
  },
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: "vi",
        locales: {
          vi: "vi",
          en: "en",
        },
      },
    }),
  ],
});
