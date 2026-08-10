"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { activeWeek, getWeekRuntime, sourceForWorkspace, updateWeekRuntime, type RuntimeWeek } from "@/lib/workspace-store";
import { curriculumWeeks } from "@/data/platform";

const fields = [["decision", "Decision"], ["initialAssumption", "Initial assumption"], ["reasoning", "Evidence / reasoning"], ["challenge", "Challenge / critique"], ["revisedDecision", "Revised decision"], ["whyChanged", "Why it changed"], ["outcome", "Outcome / lesson"]] as const;
export function RuntimeDecisionJournal() {
  const [week, setWeek] = useState(1); const [runtime, setRuntime] = useState<RuntimeWeek | null>(null); const [values, setValues] = useState<Record<string, string>>({}); const [notice, setNotice] = useState("");
  useEffect(() => { const number = Number(activeWeek() || 1); const current = getWeekRuntime(number); setWeek(number); setRuntime(current); setValues(Object.fromEntries(fields.map(([key]) => [key, current.work[`journal.${key}`] || ""]))); }, []);
  if (!runtime) return null;
  const source = sourceForWorkspace(runtime, "journal");
  const title = curriculumWeeks.find((item) => item.week === week)?.title ?? `Week ${week}`;
  const save = () => { const updated = updateWeekRuntime(week, (current) => ({ ...current, work: { ...current.work, ...Object.fromEntries(fields.map(([key]) => [`journal.${key}`, values[key] || ""])) } })); setRuntime(updated); setNotice("Decision journal saved locally"); };
  return <><div className="mb-8"><p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Active week decision journal</p><h1 className="mt-2 text-2xl font-semibold">{title}</h1><p className="mt-2 text-sm text-slate-500">Capture how your reasoning changes during the engagement.</p></div>{source.length ? <Card className="mb-5"><CardHeader><h2 className="font-semibold">Week instructions</h2></CardHeader><CardContent>{source.map((step) => <div key={step.id} className="mb-3 last:mb-0"><p className="font-medium">{step.title}</p><pre className="mt-1 whitespace-pre-wrap font-sans text-sm leading-6 text-slate-600">{step.sourceContent}</pre></div>)}</CardContent></Card> : <Card className="mb-5"><CardContent className="p-5 text-sm text-slate-500">No Decision Journal prompt was found in the active week’s imported source.</CardContent></Card>}<Card><CardHeader><h2 className="font-semibold">My work</h2><p className="mt-1 text-sm text-slate-500">Your journal entry is separate from the imported source material.</p></CardHeader><CardContent><div className="grid gap-4">{fields.map(([key, label]) => <label key={key} className="block text-sm font-medium text-slate-700">{label}<textarea className="mt-2 min-h-20 w-full rounded-lg border bg-slate-50 p-3 text-sm font-normal" value={values[key] || ""} onChange={(e) => setValues({ ...values, [key]: e.target.value })}/></label>)}</div><div className="mt-4 flex items-center gap-3"><Button onClick={save}>Save journal entry</Button>{notice && <span className="text-sm text-slate-600">{notice}</span>}</div></CardContent></Card></>;
}
