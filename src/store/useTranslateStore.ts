import { create } from 'zustand';
import { defaultLocale, Locale  } from '@/libs/i18n';
import en from '../languages/en.json';
import nl from '../languages/vi.json';

type TranslateState = {
  locale: Locale;
  translations: Record<string, any> | null;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const localeMap: Record<string, any> = { en, nl };
// const defaultLocale = getLangDefaut();

export const useTranslateStore = create<TranslateState>((set, get) => ({
  locale: defaultLocale,
  translations: localeMap[defaultLocale],

  setLocale: async (locale) => {
    set({ locale, translations: localeMap[locale] ?? en });
  },

  t: (key) => {
    const { translations } = get();
    // fallback khi chưa load
    if (!translations) return key; 
    return key.split('.').reduce((obj: any, k) => obj?.[k], translations) ?? key;
  },
}));
