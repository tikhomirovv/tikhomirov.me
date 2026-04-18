// @ts-nocheck: Yandex snippet uses dynamic window indexing and comma-assigns; strict typing adds no value here.
/**
 * Yandex.Metrica loader (client bundle).
 * Counter id: PUBLIC_YM_ID (build-time). YandexMetrika.astro only imports this module when the id is set.
 */
declare function ym(
  counterId: string | number,
  method: string,
  ...args: unknown[]
): void;

const ymId = import.meta.env.PUBLIC_YM_ID;
if (ymId) {
  const options = {
    id: ymId,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
  };

  (function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
    m[i].l = 1 * new Date();
    ((k = e.createElement(t)),
      (a = e.getElementsByTagName(t)[0]),
      (k.async = 1),
      (k.src = r),
      a.parentNode.insertBefore(k, a));
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(options.id, "init", options);
}

// Keeps this file a valid ES module if the bundler ever includes it with no runtime body.
export {};
