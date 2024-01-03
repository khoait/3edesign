import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	primaryLocale: "vi", // default app locale
	secondaryLocales: ["en"], // other supported locales
	fallbackLocale: "vi", // fallback locale (on missing translation)
	trailingSlash: "never", // "never" or "always"
	run: "client+server", // "client+server" or "server"
	showPrimaryLocale: false, // "/en/about" vs "/about"
	translationLoadingRules: [], // per page group loading
	translationDirectory: {}, // translation directory names
	translations: {}, // { [translation_group1]: { [locale1]: {}, ... } }
	routes: {
		"en": {
			"du-an": "projects",
			"gioi-thieu": "about",
			"hang-muc": "category",
			"lien-he": "contact",
			"tuyen-dung": "career",
		}
	}, // { [secondary_locale1]: { about: "about-translated", ... } }
})