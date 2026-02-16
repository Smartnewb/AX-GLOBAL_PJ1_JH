"use client";

import { useCallback, useState, useEffect } from "react";
import UploadZone from "@/components/UploadZone";
import ResultCard from "@/components/ResultCard";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from "@/lib/LocaleContext";
import { canScan, recordScan, getRemainingScans } from "@/lib/usageLimit";

type Status = "idle" | "uploaded" | "loading" | "done" | "error";

export default function Home() {
  const { t } = useLocale();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [remaining, setRemaining] = useState(3);
  const [showLimitModal, setShowLimitModal] = useState(false);

  useEffect(() => { setRemaining(getRemainingScans()); }, []);

  const handleFileSelect = useCallback((f: File) => {
    setFile(f); setPreview(URL.createObjectURL(f)); setStatus("uploaded"); setResult(""); setError("");
  }, []);

  const handleClear = useCallback(() => {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null); setPreview(null); setStatus("idle"); setResult(""); setError("");
  }, [preview]);

  const handleAnalyze = useCallback(async () => {
    if (!file) return;
    if (!canScan()) { setShowLimitModal(true); return; }
    setStatus("loading"); setError("");
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await fetch("/api/analyze", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Conversion failed.");
      recordScan();
      setRemaining(getRemainingScans());
      setResult(data.result); setStatus("done");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(msg); setStatus("error");
    }
  }, [file]);

  return (
    <div className="relative min-h-screen">
      {/* ===== Nav Bar ===== */}
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-md shadow-blue-600/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-lg font-black tracking-tighter text-foreground">
              MemoFlow<span className="text-accent"> AI</span>
            </span>
          </div>

          {/* Center — Security */}
          <div className="hidden items-center gap-3 text-xs text-muted sm:flex">
            <span className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="text-emerald-500">
                <path d="M12.667 7.333H3.333C2.597 7.333 2 7.93 2 8.667v4.666C2 14.07 2.597 14.667 3.333 14.667h9.334c.736 0 1.333-.597 1.333-1.334V8.667c0-.737-.597-1.334-1.333-1.334z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.667 7.333V4.667a3.333 3.333 0 016.666 0v2.666" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.nav.noDataStored}
            </span>
            <span className="h-3 w-px bg-slate-300" />
            <span className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-blue-500">
                <path d="M8 1.333L2 4v4c0 3.68 2.56 7.12 6 8 3.44-.88 6-4.32 6-8V4l-6-2.667z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.333 8l2 2L10.667 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.nav.sslEncrypted}
            </span>
          </div>

          {/* Right: Language Switcher + Upgrade */}
          <div className="flex items-center gap-2.5">
            <LanguageSwitcher />
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
              {t.nav.upgrade}
            </button>
          </div>
        </div>
      </nav>

      {/* ===== Hero ===== */}
      <section className="relative z-10 pt-12 pb-8 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="mb-3 text-4xl font-black tracking-tighter text-foreground sm:text-5xl whitespace-pre-line">
            {t.hero.title}
          </h1>
          <p className="text-base text-muted sm:text-lg whitespace-pre-line">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ===== Bento Grid ===== */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left: Input */}
          <div className="lg:col-span-5 space-y-5">
            <div className="glass rounded-[32px] shadow-xl p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-bold text-foreground">{t.upload.heading}</h2>
                <span className="text-xs text-muted">{t.upload.cameraSupported}</span>
              </div>
              <UploadZone file={file} preview={preview} onFileSelect={handleFileSelect} onClear={handleClear} disabled={status === "loading"} />
            </div>

            {(status === "uploaded" || status === "error") && (
              <button onClick={handleAnalyze}
                className="rainbow-border w-full rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:shadow-2xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:scale-[0.98]">
                {t.analyze.button}
              </button>
            )}

            {status === "uploaded" && (
              <p className="text-center text-xs text-slate-400">
                {remaining}/3 {t.limit.remaining}
              </p>
            )}

            {status === "loading" && (
              <button disabled className="w-full rounded-2xl bg-silver-200 py-4 text-base font-bold text-slate-400 cursor-not-allowed">
                {t.analyze.analyzing}
              </button>
            )}

            {status === "error" && error && (
              <div className="glass rounded-2xl border border-red-200/50 px-5 py-4 animate-fade-in-up">
                <p className="text-sm text-red-600"><span className="font-semibold">{t.analyze.error}</span> {error}</p>
              </div>
            )}

            <div className="grid grid-cols-3 gap-3">
              <div className="glass rounded-2xl px-3 py-3.5 text-center shadow-sm">
                <p className="text-xl font-black text-accent">{t.stats.avgTime}</p>
                <p className="mt-1 text-[11px] text-muted leading-tight">{t.stats.avgLabel}</p>
              </div>
              <div className="glass rounded-2xl px-3 py-3.5 text-center shadow-sm">
                <p className="text-xl font-black text-accent">{t.stats.anyLang}</p>
                <p className="mt-1 text-[11px] text-muted leading-tight">{t.stats.anyLangLabel}</p>
              </div>
              <div className="glass rounded-2xl px-3 py-3.5 text-center shadow-sm">
                <p className="text-xl font-black text-accent">{t.stats.export}</p>
                <p className="mt-1 text-[11px] text-muted leading-tight">{t.stats.exportLabel}</p>
              </div>
            </div>
          </div>

          {/* Right: Output */}
          <div className="lg:col-span-7">
            {status === "loading" ? (
              <ResultCard result="" isLoading />
            ) : status === "done" && result ? (
              <ResultCard result={result} />
            ) : (
              <div className="glass rounded-[32px] shadow-xl flex flex-col items-center justify-center py-20 px-8 min-h-[420px]">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-50 to-slate-100 shadow-inner">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-accent/40">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="mb-2 text-lg font-bold text-slate-400 tracking-tight">{t.result.placeholder}</p>
                <p className="text-sm text-slate-400/80 text-center">{t.result.placeholderSub}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== Global Trust Strip ===== */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-12">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-blue-500">
              <path d="M8 1.333L2 4v4c0 3.68 2.56 7.12 6 8 3.44-.88 6-4.32 6-8V4l-6-2.667z" stroke="currentColor" strokeWidth="1.2" />
              <path d="M5.333 8l2 2L10.667 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t.trust.soc2}
          </span>
          <span className="h-3 w-px bg-slate-300" />
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-emerald-500">
              <path d="M12.667 7.333H3.333C2.597 7.333 2 7.93 2 8.667v4.666C2 14.07 2.597 14.667 3.333 14.667h9.334c.736 0 1.333-.597 1.333-1.334V8.667c0-.737-.597-1.334-1.333-1.334z" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4.667 7.333V4.667a3.333 3.333 0 016.666 0v2.666" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            {t.trust.encrypted}
          </span>
          <span className="h-3 w-px bg-slate-300" />
          <span className="flex items-center gap-1.5">🇺🇸🇬🇧🇪🇺🇯🇵🇰🇷 {t.trust.countries}</span>
          <span className="h-3 w-px bg-slate-300" />
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-amber-500">
              <polygon points="8,1 10.2,5.4 15,6.1 11.5,9.5 12.4,14.3 8,12 3.6,14.3 4.5,9.5 1,6.1 5.8,5.4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
            </svg>
            {t.trust.gdpr}
          </span>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-black tracking-tighter text-foreground">{t.pricing.title}</h2>
          <p className="text-sm text-muted">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {/* Free */}
          <div className="glass rounded-[28px] p-6 shadow-lg hover-lift">
            <h3 className="mb-1 text-lg font-bold text-foreground">{t.pricing.free}</h3>
            <p className="mb-5 text-xs text-muted">{t.pricing.freeDesc}</p>
            <div className="mb-6">
              <span className="text-4xl font-black tracking-tighter text-foreground">$0</span>
              <span className="text-sm text-muted"> {t.pricing.perMonth}</span>
            </div>
            <ul className="mb-6 space-y-2.5 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle />{t.pricing.scansPerDay}</li>
              <li className="flex items-center gap-2"><CheckCircle />{t.pricing.clipboardCopy}</li>
              <li className="flex items-center gap-2 text-slate-400"><XCircle />{t.pricing.pdfTxtExport}</li>
              <li className="flex items-center gap-2 text-slate-400"><XCircle />{t.pricing.priority}</li>
            </ul>
            <button className="w-full rounded-xl bg-silver-100 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:bg-silver-200">{t.pricing.currentPlan}</button>
          </div>

          {/* Starter */}
          <div className="relative glass rounded-[28px] p-6 shadow-xl ring-2 ring-accent hover-lift">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3.5 py-0.5 text-[11px] font-bold text-white shadow-md">{t.pricing.bestValue}</div>
            <h3 className="mb-1 text-lg font-bold text-foreground">{t.pricing.starter}</h3>
            <p className="mb-5 text-xs text-muted">{t.pricing.starterDesc}</p>
            <div className="mb-6">
              <span className="text-4xl font-black tracking-tighter text-accent">$4.99</span>
              <span className="text-sm text-muted"> {t.pricing.perMonth}</span>
            </div>
            <ul className="mb-6 space-y-2.5 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle />{t.pricing.scansPerMonth}</li>
              <li className="flex items-center gap-2"><CheckCircle />{t.pricing.clipboardCopy}</li>
              <li className="flex items-center gap-2"><CheckCircle />{t.pricing.pdfTxtExport}</li>
              <li className="flex items-center gap-2 text-slate-400"><XCircle />{t.pricing.priority}</li>
            </ul>
            <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:shadow-lg hover:-translate-y-0.5">{t.pricing.getStarted}</button>
          </div>

          {/* Pro */}
          <div className="glass rounded-[28px] p-6 shadow-lg hover-lift">
            <h3 className="mb-1 text-lg font-bold text-foreground">{t.pricing.pro}</h3>
            <p className="mb-5 text-xs text-muted">{t.pricing.proDesc}</p>
            <div className="mb-6">
              <span className="text-4xl font-black tracking-tighter text-foreground">$9.99</span>
              <span className="text-sm text-muted"> {t.pricing.perMonth}</span>
            </div>
            <ul className="mb-6 space-y-2.5 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle />{t.pricing.unlimited}</li>
              <li className="flex items-center gap-2"><CheckCircle />{t.pricing.clipboardCopy}</li>
              <li className="flex items-center gap-2"><CheckCircle />{t.pricing.pdfTxtExport}</li>
              <li className="flex items-center gap-2"><CheckCircle />{t.pricing.priority}</li>
            </ul>
            <button className="w-full rounded-xl bg-slate-900 py-2.5 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5">{t.pricing.upgradeBtn}</button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-slate-400"><rect x="1.333" y="3.333" width="13.333" height="9.333" rx="2" stroke="currentColor" strokeWidth="1.2" /><path d="M1.333 6.667h13.334" stroke="currentColor" strokeWidth="1.2" /></svg>
            {t.pricing.payments}
          </span>
          <span className="h-3 w-px bg-slate-300" />
          <span>{t.pricing.cancel}</span>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="relative z-10 border-t border-white/20 py-8 text-center">
        <p className="text-xs text-slate-400">
          {t.footer.copyright} ·{" "}
          <span className="inline-flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-emerald-400">
              <path d="M12.667 7.333H3.333C2.597 7.333 2 7.93 2 8.667v4.666C2 14.07 2.597 14.667 3.333 14.667h9.334c.736 0 1.333-.597 1.333-1.334V8.667c0-.737-.597-1.334-1.333-1.334z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4.667 7.333V4.667a3.333 3.333 0 016.666 0v2.666" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {t.footer.dataNotStored}
          </span>
        </p>
      </footer>

      {/* ===== Daily Limit Modal ===== */}
      {showLimitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in-up">
          <div className="glass mx-4 max-w-md rounded-3xl p-8 text-center shadow-2xl">
            <div className="mb-4 text-5xl">🚫</div>
            <h3 className="mb-2 text-xl font-bold text-foreground">{t.limit.title}</h3>
            <p className="mb-6 text-sm text-muted">{t.limit.message}</p>
            <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:-translate-y-0.5">
              {t.limit.upgrade}
            </button>
            <button onClick={() => setShowLimitModal(false)} className="mt-3 w-full rounded-2xl py-2.5 text-sm text-muted hover:text-foreground transition-colors">
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Pricing icons
function CheckCircle() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-accent"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" /><path d="M5.5 8l1.833 1.833L10.5 6.667" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function XCircle() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-slate-300"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" /><path d="M6 6l4 4M10 6l-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>;
}
