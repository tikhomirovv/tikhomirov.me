/**
 * Single source of truth for profile URLs and mailbox addresses used from Astro components.
 *
 * Markdown under `src/content/` (home body, portfolio resume) still embeds URLs in prose;
 * if you change values here, search the repo and sync those files so published links stay correct.
 */

/** Outbound HTTPS entry points shown on the site. */
export const SITE_URL = {
  mindlogApp: "https://mindlog.app",
  /** Public code and activity (not a direct contact channel). */
  githubProfile: "https://github.com/tikhomirovv",
  /** Telegram profile for quick messages. */
  telegram: "https://t.me/ambivalerii",
} as const;

/**
 * Public contact mailbox (without `mailto:`).
 * Plus-address tag (`+site`) makes it easy to filter messages that people send from this website.
 */
export const SITE_EMAIL = "v.tikhomirov.dev+site@gmail.com";

/** Ready-to-use `mailto:` URL for every contact link in Astro components. */
export const SITE_MAILTO = `mailto:${SITE_EMAIL}`;
