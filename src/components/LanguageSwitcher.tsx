"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/lib/LocaleContext";
import type { Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
    const { locale, setLocale, localeList } = useLocale();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        function handle(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener("mousedown", handle);
        return () => document.removeEventListener("mousedown", handle);
    }, []);

    const current = localeList[locale];

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1.5 rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-foreground ring-1 ring-slate-200/60 transition-all hover:bg-white/80 hover:ring-slate-300 hover:-translate-y-0.5"
                aria-label="Change language"
            >
                <span className="text-sm">{current.flag}</span>
                <span className="hidden sm:inline">{current.label}</span>
                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                >
                    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {open && (
                <div className="absolute right-0 top-full mt-2 z-50 min-w-[170px] max-h-[400px] overflow-y-auto rounded-2xl bg-white/90 shadow-xl ring-1 ring-slate-200/50 backdrop-blur-xl animate-fade-in-up">
                    {(Object.entries(localeList) as [Locale, { flag: string; label: string }][]).map(
                        ([key, { flag, label }]) => (
                            <button
                                key={key}
                                onClick={() => {
                                    setLocale(key);
                                    setOpen(false);
                                }}
                                className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-blue-50/60 ${locale === key ? "bg-blue-50/80 font-semibold text-accent" : "text-foreground"
                                    }`}
                            >
                                <span className="text-base">{flag}</span>
                                <span>{label}</span>
                                {locale === key && (
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-auto text-accent">
                                        <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </button>
                        )
                    )}
                </div>
            )}
        </div>
    );
}
