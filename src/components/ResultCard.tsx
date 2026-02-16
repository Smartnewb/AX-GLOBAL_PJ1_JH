"use client";

import { useState } from "react";
import { useLocale } from "@/lib/LocaleContext";

interface ResultCardProps {
    result: string;
    isLoading?: boolean;
}

export default function ResultCard({ result, isLoading }: ResultCardProps) {
    const { t } = useLocale();
    const [copied, setCopied] = useState(false);

    if (isLoading) {
        return (
            <div className="glass rounded-[32px] shadow-2xl p-6 space-y-5 animate-fade-in-up">
                <div className="flex items-center justify-between mb-2">
                    <div className="skeleton h-5 w-28 rounded-lg" />
                    <div className="flex gap-2"><div className="skeleton h-8 w-8 rounded-lg" /><div className="skeleton h-8 w-8 rounded-lg" /></div>
                </div>
                <div className="space-y-3"><div className="skeleton h-4 w-full" /><div className="skeleton h-4 w-5/6" /><div className="skeleton h-4 w-4/6" /></div>
                <div className="h-px bg-slate-200/60" />
                <div className="space-y-3"><div className="skeleton h-4 w-3/4" /><div className="skeleton h-4 w-full" /><div className="skeleton h-4 w-2/3" /></div>
                <div className="h-px bg-slate-200/60" />
                <div className="space-y-3"><div className="skeleton h-4 w-5/6" /><div className="skeleton h-4 w-3/5" /></div>
                <div className="flex items-center justify-center gap-2 pt-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-accent pulse-dot" />
                    <div className="h-2.5 w-2.5 rounded-full bg-accent pulse-dot" />
                    <div className="h-2.5 w-2.5 rounded-full bg-accent pulse-dot" />
                </div>
                <p className="text-center text-sm text-muted">{t.result.aiAnalyzing}</p>
            </div>
        );
    }

    if (!result) return null;

    const handleCopy = async () => {
        try { await navigator.clipboard.writeText(result); } catch {
            const ta = document.createElement("textarea"); ta.value = result;
            document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
        }
        setCopied(true); setTimeout(() => setCopied(false), 2000);
    };

    const handleDownloadTxt = () => {
        const blob = new Blob([result], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a"); a.href = url;
        a.download = `MemoFlow_${new Date().toISOString().slice(0, 10)}.txt`;
        a.click(); URL.revokeObjectURL(url);
    };

    const handleDownloadPdf = () => {
        const win = window.open("", "_blank");
        if (!win) return;
        win.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>MemoFlow</title>
      <style>body{font-family:-apple-system,"Segoe UI",Roboto,"Noto Sans",sans-serif;max-width:700px;margin:40px auto;padding:0 20px;color:#1a1a1a;line-height:1.7}h2{margin-top:28px;font-size:18px}ul,ol{padding-left:24px}li{margin-bottom:6px}</style></head>
      <body>${markdownToHtml(result)}</body></html>`);
        win.document.close(); setTimeout(() => { win.print(); }, 400);
    };

    const sections = parseSections(result, t);

    return (
        <div className="glass rounded-[32px] shadow-2xl animate-fade-in-up overflow-hidden">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
                <h3 className="text-sm font-bold text-foreground tracking-tight">{t.result.heading}</h3>
                <div className="flex items-center gap-1.5">
                    <button onClick={handleCopy} title="Copy"
                        className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-all hover-lift ${copied ? "bg-emerald-50 text-success ring-1 ring-emerald-200" : "bg-white/70 text-muted ring-1 ring-slate-200 hover:text-foreground"}`}>
                        {copied ? <><CheckIcon /> {t.result.copied}</> : <><CopyIcon /> {t.result.copy}</>}
                    </button>
                    <button onClick={handleDownloadTxt} title="TXT" className="flex items-center gap-1.5 rounded-xl bg-white/70 px-3 py-1.5 text-xs font-medium text-muted ring-1 ring-slate-200 transition-all hover:text-foreground hover-lift">
                        <DownloadIcon /> TXT
                    </button>
                    <button onClick={handleDownloadPdf} title="PDF" className="flex items-center gap-1.5 rounded-xl bg-white/70 px-3 py-1.5 text-xs font-medium text-muted ring-1 ring-slate-200 transition-all hover:text-foreground hover-lift">
                        <PrintIcon /> PDF
                    </button>
                </div>
            </div>
            <div className="px-5 pb-5 space-y-3">
                {sections.map((s, i) => (
                    <div key={i} className="rounded-2xl bg-white/60 ring-1 ring-white/50 overflow-hidden" style={{ animationDelay: `${i * 0.1}s` }}>
                        <div className={`px-4 py-2.5 ${s.headerBg}`}><span className={`text-xs font-bold ${s.headerText}`}>{s.icon} {s.title}</span></div>
                        <div className="px-4 py-3.5">
                            <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_li]:text-sm [&_strong]:text-slate-900 [&_p]:text-sm [&_p]:mb-2 [&_p:last-child]:mb-0"
                                dangerouslySetInnerHTML={{ __html: markdownToHtml(s.content) }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Icons
function CopyIcon() { return <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><rect x="5.333" y="5.333" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><path d="M3.333 10.667H3a1.5 1.5 0 01-1.5-1.5V3a1.5 1.5 0 011.5-1.5h6.167a1.5 1.5 0 011.5 1.5v.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>; }
function CheckIcon() { return <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function DownloadIcon() { return <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M14 10v2.667A1.333 1.333 0 0112.667 14H3.333A1.333 1.333 0 012 12.667V10M4.667 6.667L8 10l3.333-3.333M8 10V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function PrintIcon() { return <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M4 5.333V1.333h8v4M4 12H2.667A1.333 1.333 0 011.333 10.667V7.333A1.333 1.333 0 012.667 6h10.666a1.333 1.333 0 011.334 1.333v3.334A1.333 1.333 0 0113.333 12H12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><rect x="4" y="9.333" width="8" height="5.333" rx="0.5" stroke="currentColor" strokeWidth="1.3" /></svg>; }

// Helpers
interface Section { icon: string; title: string; content: string; headerBg: string; headerText: string; }

function parseSections(md: string, t: { result: { summary: string; actionItems: string; keyNotes: string } }): Section[] {
    const defs: Section[] = [
        { icon: "📅", title: t.result.summary, content: "", headerBg: "bg-blue-50/80", headerText: "text-blue-700" },
        { icon: "✅", title: t.result.actionItems, content: "", headerBg: "bg-emerald-50/80", headerText: "text-emerald-700" },
        { icon: "💡", title: t.result.keyNotes, content: "", headerBg: "bg-amber-50/80", headerText: "text-amber-700" },
    ];
    const lines = md.split("\n");
    let cur = -1;
    const bufs: string[][] = [[], [], []];
    for (const line of lines) {
        const l = line.toLowerCase();
        if (l.includes("주요 요약") || l.includes("summary") || l.includes("要約") || l.includes("摘要") || l.includes("resumen") || l.includes("📅")) { cur = 0; continue; }
        if (l.includes("실행할 일") || l.includes("action") || l.includes("アクション") || l.includes("待办") || l.includes("tarea") || l.includes("✅")) { cur = 1; continue; }
        if (l.includes("참고") || l.includes("note") || l.includes("参考") || l.includes("备注") || l.includes("nota") || l.includes("💡")) { cur = 2; continue; }
        if (cur >= 0) bufs[cur].push(line);
    }
    const has = bufs.some((b) => b.length > 0);
    if (!has) { defs[0].content = md; return [defs[0]]; }
    const res: Section[] = [];
    for (let i = 0; i < 3; i++) { const c = bufs[i].join("\n").trim(); if (c) { defs[i].content = c; res.push(defs[i]); } }
    return res.length > 0 ? res : [{ ...defs[0], content: md }];
}

function markdownToHtml(md: string): string {
    let h = md.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/^#{1,3}\s+(.+)$/gm, "<strong>$1</strong>").replace(/^[-•]\s+(.+)$/gm, "<li>$1</li>")
        .replace(/^\d+\.\s+(.+)$/gm, "<li>$1</li>").replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br/>");
    h = h.replace(/(<li>[\s\S]*?<\/li>)(?:<br\/>)?/g, "$1");
    h = h.replace(/((?:<li>[\s\S]*?<\/li>)+)/g, "<ul>$1</ul>");
    if (!h.startsWith("<")) h = `<p>${h}</p>`;
    return h;
}
