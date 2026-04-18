/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Yandex.Metrica counter id (set in .env as PUBLIC_YM_ID=...) */
  readonly PUBLIC_YM_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
