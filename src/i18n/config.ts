/** Supported UI / content locales (must match astro.config i18n.locales). */
export const locales = ["en", "ru"] as const;

export type Lang = (typeof locales)[number];

export const defaultLang: Lang = "en";
