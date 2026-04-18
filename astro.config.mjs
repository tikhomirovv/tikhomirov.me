import { defineConfig } from "astro/config";

// Static output (default) — GitHub Pages uploads ./dist from workflow.
export default defineConfig({
  site: "https://tikhomirov.me",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
