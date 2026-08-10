"use client";

export type Reference = { id: string; title: string; type: string; reference: string; note: string };
export type ImportedSource = { filename: string; fileType: string; importedAt: string; content: string; notes: string };
export type LearningStep = { id: string; order: number; title: string; sourceContent: string; learnerWork: string; status: "not_started" | "in_progress" | "complete"; completedAt?: string };
export type RuntimeWeek = { active?: boolean; source?: ImportedSource; work: Record<string, string>; status: Record<string, string>; references: Reference[]; portfolio: { title: string; type: string; status: string; summary: string; referenceIds: string[] }[]; startedAt?: string; currentStep?: number; steps?: LearningStep[] };
export type RuntimeState = { version: 2; weeks: Record<string, RuntimeWeek> };
const key = "revenue-systems-os.runtime.v2";
const legacyKey = "revenue-systems-os.runtime.v1";
const blank = (): RuntimeState => ({ version: 2, weeks: {} });

export function parseSteps(content: string): LearningStep[] { const parts = content.split(/(?=^#{1,3}\s+|^[A-Z][A-Za-z &/]{2,}:?$)/m).map((part) => part.trim()).filter(Boolean); const source = parts.length ? parts : [content]; return source.map((part, index) => { const [first, ...rest] = part.split("\n"); return { id: `step-${index + 1}`, order: index + 1, title: first.replace(/^#+\s*/, "") || `Step ${index + 1}`, sourceContent: rest.join("\n").trim() || part, learnerWork: "", status: "not_started" }; }); }
export function loadRuntime(): RuntimeState { if (typeof window === "undefined") return blank(); try { const saved = localStorage.getItem(key); if (saved) return JSON.parse(saved); const old = JSON.parse(localStorage.getItem(legacyKey) || "null"); if (old?.weeks) { const migrated = { version: 2 as const, weeks: old.weeks }; localStorage.setItem(key, JSON.stringify(migrated)); return migrated; } return blank(); } catch { return blank(); } }
export function saveRuntime(state: RuntimeState) { localStorage.setItem(key, JSON.stringify(state)); }
export function getWeekRuntime(week: number) { return loadRuntime().weeks[String(week)] ?? { work: {}, status: {}, references: [], portfolio: [] }; }
export function updateWeekRuntime(week: number, update: (current: RuntimeWeek) => RuntimeWeek) { const state = loadRuntime(); const current = state.weeks[String(week)] ?? { work: {}, status: {}, references: [], portfolio: [] }; state.weeks[String(week)] = update(current); saveRuntime(state); return state.weeks[String(week)]; }
export function setActiveWeek(week: number) { const state = loadRuntime(); for (const item of Object.values(state.weeks)) item.active = false; const current = state.weeks[String(week)] ?? { work: {}, status: {}, references: [], portfolio: [] }; state.weeks[String(week)] = { ...current, active: true }; saveRuntime(state); }
export function activeWeek() { return Object.entries(loadRuntime().weeks).find(([, item]) => item.active)?.[0]; }
export function learningProgress(week: RuntimeWeek) { const total = week.steps?.length ?? 0; const complete = week.steps?.filter((step) => step.status === "complete").length ?? 0; return { total, complete, percent: total ? Math.round((complete / total) * 100) : 0 }; }
export function learnerWeekStatus(week: RuntimeWeek) { if (!week.source) return "NOT IMPORTED"; const progress = learningProgress(week); if (!week.startedAt) return "NOT STARTED"; if (progress.total > 0 && progress.complete === progress.total) return week.status.reviewApproved === "true" ? "COMPLETE" : "REVIEW"; return "IN PROGRESS"; }
export function currentLearningStep(week: RuntimeWeek) { return week.steps?.[week.currentStep ?? 0]; }
export function allRuntimeWeeks() { return Array.from({ length: 30 }, (_, index) => ({ week: index + 1, runtime: getWeekRuntime(index + 1) })); }
