"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

type Locale = "en" | "ar";

interface LocalizationContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string | string[];
}

const LocalizationContext = createContext<LocalizationContextProps | undefined>(
  undefined
);

const translations: Record<Locale, Record<string, unknown>> = {
  en,
  ar,
};

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");

  // Persist locale in localStorage and load on mount
  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") as Locale | null;
    if (storedLocale && (storedLocale === "en" || storedLocale === "ar")) {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = (key: string): string | string[] => {
    const keys = key.split(".");
    let result: unknown = translations[locale];
    for (const k of keys) {
      if (result && typeof result === "object" && k in (result as object)) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key; // fallback to key if translation missing
      }
    }
    return result as string | string[];
  };

  return (
    <LocalizationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextProps => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error(
      "useLocalization must be used within a LocalizationProvider"
    );
  }
  return context;
};
