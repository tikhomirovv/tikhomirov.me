import type { Lang } from "./config";

/** Short labels used outside Markdown (nav / footer). */
export const homeFooter: Record<Lang, { cv: string }> = {
  en: { cv: "resume" },
  ru: { cv: "резюме" },
};

export const portfolioUi: Record<Lang, { back: string }> = {
  en: { back: "← Back to home" },
  ru: { back: "← На главную" },
};
