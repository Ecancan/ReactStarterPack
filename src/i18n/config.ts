import i18n from 'i18next';
import en from './en/en.json';
import tr from './tr/tr.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  tr: { common: tr },
  en: { common: en }
} as const;

i18n.use(initReactI18next).init({
  lng: 'tr',
  ns: ['common'],
  interpolation: {
    escapeValue: false
  },
  resources
});
