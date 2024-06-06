import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import ha from "../locales/ha.json";
import ig from "../locales/igbo.json";
import yo from "../locales/yo.json";
import sv from "../locales/sv.json";

export const languageResources = {
  en: { translation: en },
  ha: { translation: ha },
  ig: { translation: ig },
  yo: { translation: yo },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v1",
  lng: "en",
  fallbackLng: "en",
  resources: languageResources,
});

export default i18next;
