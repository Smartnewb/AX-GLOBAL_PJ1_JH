"use client";

const STORAGE_KEY = "memoflow_daily_usage";
const FREE_LIMIT = 3;

interface UsageData {
    date: string;
    count: number;
}

function getToday(): string {
    return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
}

function getUsage(): UsageData {
    if (typeof window === "undefined") return { date: getToday(), count: 0 };
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { date: getToday(), count: 0 };
        const data: UsageData = JSON.parse(raw);
        // Reset if it's a new day
        if (data.date !== getToday()) return { date: getToday(), count: 0 };
        return data;
    } catch {
        return { date: getToday(), count: 0 };
    }
}

export function getRemainingScans(): number {
    const usage = getUsage();
    return Math.max(0, FREE_LIMIT - usage.count);
}

export function canScan(): boolean {
    return getRemainingScans() > 0;
}

export function recordScan(): void {
    const usage = getUsage();
    const updated: UsageData = { date: getToday(), count: usage.count + 1 };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
