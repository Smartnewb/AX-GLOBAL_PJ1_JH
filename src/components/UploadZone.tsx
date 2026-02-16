"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { useLocale } from "@/lib/LocaleContext";

interface UploadZoneProps {
    file: File | null;
    preview: string | null;
    onFileSelect: (file: File) => void;
    onClear: () => void;
    disabled?: boolean;
}

const MAX_SIZE = 10 * 1024 * 1024;

export default function UploadZone({ file, preview, onFileSelect, onClear, disabled }: UploadZoneProps) {
    const { t } = useLocale();
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = useCallback(
        (f: File) => {
            if (!f.type.startsWith("image/")) { alert(t.upload.imageOnly); return; }
            if (f.size > MAX_SIZE) { alert(t.upload.fileTooLarge); return; }
            onFileSelect(f);
        },
        [onFileSelect, t]
    );

    const onDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); }, []);
    const onDragLeave = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); }, []);
    const onDrop = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }, [handleFile]);
    const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => { const f = e.target.files?.[0]; if (f) handleFile(f); }, [handleFile]);

    if (preview && file) {
        return (
            <div className="animate-fade-in-up w-full">
                <div className="glass overflow-hidden rounded-[32px] shadow-lg">
                    <div className="flex items-center justify-center bg-gradient-to-b from-slate-50/50 to-white/30 p-5">
                        <Image src={preview} alt="Uploaded note" width={500} height={340} className="max-h-[300px] w-auto rounded-2xl object-contain shadow-sm" unoptimized />
                    </div>
                    <div className="flex items-center justify-between border-t border-white/30 px-5 py-3">
                        <div className="flex items-center gap-2.5 text-sm text-muted min-w-0">
                            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0 text-accent">
                                <path d="M14 10v2.667A1.333 1.333 0 0112.667 14H3.333A1.333 1.333 0 012 12.667V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.667 6.667L8 10l3.333-3.333M8 10V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="truncate">{file.name}</span>
                            <span className="text-xs text-slate-400 shrink-0">({(file.size / 1024).toFixed(0)} KB)</span>
                        </div>
                        {!disabled && (
                            <button onClick={onClear} className="shrink-0 rounded-xl px-3 py-1.5 text-sm text-muted transition-colors hover:bg-white/50 hover:text-foreground">
                                {t.upload.change}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop} onClick={() => inputRef.current?.click()}
            className={`group w-full cursor-pointer rounded-[32px] border-2 border-dashed transition-all duration-300 ${isDragging ? "drag-active border-accent" : "border-slate-300/60 hover:border-accent/40 hover:bg-white/40"} ${disabled ? "pointer-events-none opacity-50" : ""}`}
        >
            <div className="flex flex-col items-center justify-center py-14 px-6">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-black/5">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-accent">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <p className="mb-1.5 text-base font-semibold text-foreground">{t.upload.dropHere}</p>
                <p className="mb-4 text-sm text-muted">{t.upload.orClickToBrowse}</p>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{t.upload.fileTypes}</span><span>·</span><span>{t.upload.maxSize}</span>
                </div>
            </div>
            <input ref={inputRef} type="file" accept="image/*" capture="environment" onChange={onInputChange} className="hidden" />
        </div>
    );
}
