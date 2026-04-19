import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Static output (default) — GitHub Pages uploads ./dist from workflow.
export default defineConfig({
  site: "https://tikhomirov.me",
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
