'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Locale = 'en' | 'ar' | 'fr' | 'es' | 'ja';

interface Translations {
  [key: string]: any;
}

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Locale, Translations> = {
  en: {},
  ar: {},
  fr: {},
  es: {},
  ja: {},
};

async function loadTranslations(locale: Locale) {
  if (Object.keys(translations[locale]).length === 0) {
    try {
      const res = await fetch(`/locales/${locale}.json`);
      translations[locale] = await res.json();
    } catch (e) {
      console.error(`Failed to load ${locale} translations`);
    }
  }
  return translations[locale];
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [dict, setDict] = useState<Translations>(translations.en);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['en', 'ar', 'fr', 'es', 'ja'].includes(savedLocale)) {
      setLocaleState(savedLocale);
      loadTranslations(savedLocale).then(setDict);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    loadTranslations(newLocale).then(setDict);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = dict;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    return {
      locale: 'en' as Locale,
      setLocale: () => {},
      t: (key: string) => key,
      dir: 'ltr' as 'ltr' | 'rtl',
    };
  }
  return context;
}