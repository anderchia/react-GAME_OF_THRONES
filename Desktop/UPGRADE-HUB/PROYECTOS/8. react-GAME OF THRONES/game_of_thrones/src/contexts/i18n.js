import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        translation: {
          description: {
            part1: "PERSONAJES",
            part2: "CASAS",
            part3: "CRONOLOGÍA",
            part4: "CASA",
            part5: "ALIANZAS",
            part6: "APARICIONES",
            part7: "PADRE",
            part8: "DESCENCIENTES",
            part9: "TITULOS",
            part10: "LEMA",
            part11: "SEDE",
            part12: "REGION",
            part13: "ALIANZAS",
            part14: "FUNDACION",
          },
        },
      },
      en: {
        translation: {
          description: {
            part1: "CHARACTERS",
            part2: "HOUSES",
            part3: "CRONOLOGY",
            part4: "HOUSE",
            part5: "ALLEGIANCES",
            part6: "APPEARANCES",
            part7: "FATHER",
            part8: "SIBLINGS",
            part9: "TITLES",
            part10: "SIGIL",
            part11: "SEAT",
            part12: "REGION",
            part13: "ALLEGIANCE",
            part14: "FUNDATION",
          },
        },
      },
    },
  });

export default i18n;
