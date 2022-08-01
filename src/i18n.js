import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      backend: {
        loadPath: "my-intro/locales/{{lng}}/translation.json",
      },
      supportedLngs: ["en", "mn"],
      fallbackLng: "en",
      debug: true,
      // Options for language detector
      detection: {
        order: ["path", "cookie", "htmlTag"],
        caches: ["cookie"],
      },
      returnObjects: true,
      // react: { useSuspense: false },
    },
    (error, t) => {
      if (error) console.error(error);
    }
  );

export default i18next;
