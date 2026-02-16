"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Locale, type Translations, translations, locales } from "@/lib/i18n";

interface LocaleContextType {
    locale: Locale;
    t: Translations;
    setLocale: (l: Locale) => void;
    localeList: typeof locales;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");

    const setLocale = useCallback((l: Locale) => {
        setLocaleState(l);
        document.documentElement.lang = l === "en" ? "en" : l;
    }, []);

    return (
        <LocaleContext.Provider
            value={{ locale, t: translations[locale], setLocale, localeList: locales }}
        >
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const ctx = useContext(LocaleContext);
    if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
    return ctx;
}
