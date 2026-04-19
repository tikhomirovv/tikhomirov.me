import type { Lang } from "./config";

/**
 * Map URL pathname to the second argument of getRelativeLocaleUrl (route segment).
 * Home → ""; resume page → "resume".
 */
export function routeKeyFromPath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, "");
  if (trimmed === "" || trimmed === "/") return "";
  if (trimmed === "/ru") return "";
  if (trimmed.startsWith("/ru/")) return trimmed.slice(4);
  return trimmed.slice(1);
}

/** Whether this URL is the Russian locale tree. */
export function pathIsRussian(pathname: string): boolean {
  const p = pathname.replace(/\/+$/, "") || "/";
  return p === "/ru" || p.startsWith("/ru/");
}

/** Resolve target locale for language switch (the other language). */
export function otherLocale(current: Lang): Lang {
  return current === "en" ? "ru" : "en";
}

export function langFromPath(pathname: string): Lang {
  return pathIsRussian(pathname) ? "ru" : "en";
}
