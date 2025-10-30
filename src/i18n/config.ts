import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";
import translationDE from "./locales/de/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
  de: {
    translation: translationDE,
  },
};

i18n
  .use(LanguageDetector) // Detecting browser language
  .use(initReactI18next) // Integration with React
  .init({
    resources,
    fallbackLng: "en", // Default language if something goes wrong
    debug: true, // console debug boolean

    interpolation: {
      escapeValue: false, // XSS Security
    },

    detection: {
      // Detecting order
      order: ["localStorage", "navigator", "htmlTag"],
      // Key in Local Storage
      lookupLocalStorage: "i18nextLng",
      // Cache
      caches: ["localStorage"],
    },
  });

export default i18n;
