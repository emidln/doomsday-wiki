import i from 'i18next';
import Detector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i.use(Backend).use(Detector).use(initReactI18next).init({
  debug: true,
  detection: {
    lookupLocalStorage: 'ddftwiki.language',
    lookupQuerystring: 'ddftwiki.language',
    order: ['querystring', 'localStorage', 'navigator', 'path'],
  },
  fallbackLng: 'en',
  interpolation: {escapeValue: false},
});
