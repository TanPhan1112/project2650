// generic internationalization framework for JavaScript
import i18n from 'i18next';

// pulls translation text from /public/locales
import HttpApi from 'i18next-http-backend';

// detects language to use
import LanguageDetector from 'i18next-browser-languagedetector';

// an internationalization framework specifically for react
import { initReactI18next } from 'react-i18next';

i18n
    // load translation files from /public/locales
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(HttpApi)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        detection: { order: ['path'], lookupFromPathIndex: 0 },
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
