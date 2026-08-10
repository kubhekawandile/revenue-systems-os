"use client";

export type Reference = { id: string; title: string; type: string; reference: string; note: string };
export type ImportedSource = { filename: string; fileType: string; importedAt: string; content: string; notes: string };
export type RuntimeWeek = { active?: boolean; source?: ImportedSource; work: Record<string, string>; status: Record<string, string>; references: Reference[]; portfolio: { title: string; type: string; status: string; summary: string; referenceIds: string[] }[] };
export type RuntimeState = { version: 1; weeks: Record<string, RuntimeWeek> };
const key = "revenue-systems-os.runtime.v1";
const blank = (): RuntimeState => ({ version: 1, weeks: {} });

export function loadRuntime(): RuntimeState { if (typeof window === "undefined") return blank(); try { return JSON.parse(localStorage.getItem(key) || "null") ?? blank(); } catch { return blank(); } }
export function saveRuntime(state: RuntimeState) { localStorage.setItem(key, JSON.stringify(state)); }
export function getWeekRuntime(week: number) { return loadRuntime().weeks[String(week)] ?? { work: {}, status: {}, references: [], portfolio: [] }; }
export function updateWeekRuntime(week: number, update: (current: RuntimeWeek) => RuntimeWeek) { const state = loadRuntime(); const current = state.weeks[String(week)] ?? { work: {}, status: {}, references: [], portfolio: [] }; state.weeks[String(week)] = update(current); saveRuntime(state); return state.weeks[String(week)]; }
export function setActiveWeek(week: number) { const state = loadRuntime(); for (const item of Object.values(state.weeks)) item.active = false; const current = state.weeks[String(week)] ?? { work: {}, status: {}, references: [], portfolio: [] }; state.weeks[String(week)] = { ...current, active: true }; saveRuntime(state); }
export function activeWeek() { return Object.entries(loadRuntime().weeks).find(([, item]) => item.active)?.[0]; }
