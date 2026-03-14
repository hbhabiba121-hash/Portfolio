import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";

i18n
  .use(LanguageDetector) // auto detect browser language
  .use(initReactI18next) // passes i18n down to react components
  .init({
    resources: {
      en: { translation: en },
    },
    fallbackLng: "fr", // default language
    interpolation: { escapeValue: false },
  });

export default i18n;