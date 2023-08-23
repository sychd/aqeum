import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { isDevelopment } from '@dream-org/shared-web/utils';

/**
 * TODO: add namespaces handling: https://www.i18next.com/principles/namespaces
 * We can have common preload. And each other page/component should load its NS on demand
 */
async function initializeI18n() {
  return await i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // Registering the back-end plugin
    .use(HttpApi)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      backend: {
        // locales folder should be also set as asset in NX's project.json!
        loadPath: './assets/locales/{{lng}}/{{ns}}.json',
      },
      detection: {
        // Language detection options
        order: ['querystring', 'navigator'],
        lookupQuerystring: 'lng', // The query parameter to specify the language (e.g., ?lng=en)
        caches: ['localStorage', 'cookie'],
      },
      debug: isDevelopment(),
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    });
}

const instance = initializeI18n();

export function i18nInstance() {
  return instance;
}
