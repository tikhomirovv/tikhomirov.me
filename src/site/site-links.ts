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

/** Mailbox addresses (without `mailto:`). */
export const SITE_EMAIL = {
  /** Primary inbox for contact and resume. */
  primary: "v.tikhomirov.dev@gmail.com",
  /**
   * Tagged address so mail from the public site footer is easy to filter.
   * Used on the English homepage “Links” strip.
   */
  siteTagged: "v.tikhomirov.dev+site@gmail.com",
} as const;

/** Ready-to-use mailto targets for `href`. */
export const SITE_MAILTO = {
  primary: `mailto:${SITE_EMAIL.primary}`,
  /** Optional tagged inbox for site-originated mail (not currently linked in the UI). */
  siteTagged: `mailto:${SITE_EMAIL.siteTagged}`,
} as const;
