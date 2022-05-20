import i18n from "i18next";
import i18nHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const i18nConfig = {
  // default language
  fallbackLng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
};

// i18nHttpBackend for get translations from server
i18n.use(i18nHttpBackend).use(initReactI18next).init(i18nConfig);

export default i18n;
