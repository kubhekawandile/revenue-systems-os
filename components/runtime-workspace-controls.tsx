"use client";

import { useEffect, useState } from "react";
import { Check, FileUp, Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getWeekRuntime, setActiveWeek, sourceForWorkspace, updateWeekRuntime, type RuntimeWeek, type WorkspaceSurface } from "@/lib/workspace-store";

const formats = [".md", ".txt", ".json"];
const evidenceTypes = ["Miro", "Loom", "GitHub", "HubSpot", "CRM Screenshot", "SQL", "Database", "Dashboard", "Document", "Presentation", "Communication Artifact", "Other"];

export function RuntimeWorkspaceControls({ week, surface }: { week: number; surface: Exclude<WorkspaceSurface, "journal"> }) {
  const [runtime, setRuntime] = useState<RuntimeWeek | null>(null);
  const [notice, setNotice] = useState("");
  const [draft, setDraft] = useState("");
  const [ref, setRef] = useState({ title: "", type: "Other", reference: "", note: "" }); const [editingId, setEditingId] = useState<string | null>(null);
  const workKey = `${surface}.notes`;

  useEffect(() => { const current = getWeekRuntime(week); setRuntime(current); setDraft(current.work[workKey] || ""); }, [week, workKey]);
  const persist = (next: RuntimeWeek, message: string) => { setRuntime(next); setNotice(message); window.setTimeout(() => setNotice(""), 2500); };
  const saveWork = () => persist(updateWeekRuntime(week, (current) => ({ ...current, work: { ...current.work, [workKey]: draft } })), "Saved locally");
  const importSource = async (file?: File) => {
    if (!file) return;
    if (!formats.some((format) => file.name.toLowerCase().endsWith(format))) return setNotice("Use a .md, .txt, or .json file.");
    if (file.size > 2_000_000) return setNotice("File must be smaller than 2 MB.");
    if (runtime?.source && !window.confirm("Replace imported source material? Learner work will be preserved.")) return;
    try {
      const content = await file.text();
      const { parseSteps } = await import("@/lib/workspace-store");
      persist(updateWeekRuntime(week, (current) => ({ ...current, source: { filename: file.name, fileType: file.name.split(".").pop() || "text", importedAt: new Date().toISOString(), content, notes: "" }, steps: parseSteps(content), currentStep: current.currentStep ?? 0 })), "Source imported locally");
    } catch { setNotice("Could not read this file."); }
  };
  const addReference = () => {
    if (!ref.title.trim() || !ref.reference.trim()) return setNotice("Add a title and reference first.");
    persist(updateWeekRuntime(week, (current) => ({ ...current, references: editingId ? current.references.map((item) => item.id === editingId ? { ...item, ...ref } : item) : [...current.references, { ...ref, id: crypto.randomUUID() }] })), editingId ? "Reference updated" : "Reference added");
    setRef({ title: "", type: "Other", reference: "", note: "" }); setEditingId(null);
  };
  if (!runtime) return null;
  const sourceSteps = sourceForWorkspace(runtime, surface);
  return <div className="mt-5 space-y-5">
    <Card><CardHeader><h2 className="font-semibold">Source material</h2><p className="mt-1 text-sm text-slate-500">Imported source material is separate from your work.</p></CardHeader><CardContent>
      <div className="flex flex-wrap items-center gap-3"><label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-sm font-medium text-white"><FileUp size={15}/>Import Week<input className="hidden" type="file" accept=".md,.txt,.json" onChange={(event) => importSource(event.target.files?.[0])}/></label><Button variant="secondary" onClick={() => { setActiveWeek(week); setNotice("Active week set"); }}>Set active week</Button>{notice && <span className="text-sm text-slate-600"><Check className="mr-1 inline" size={14}/>{notice}</span>}</div>
      {runtime.source ? <><details className="mt-4 rounded-lg border bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium">SOURCE MATERIAL · {runtime.source.filename}</summary><pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap font-sans text-sm leading-6 text-slate-600">{runtime.source.content}</pre></details>{sourceSteps.length ? <div className="mt-4 space-y-3"><p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Week instructions relevant to this workspace</p>{sourceSteps.map((step) => <div key={step.id} className="rounded-lg border bg-slate-50 p-4"><p className="font-medium text-slate-800">{step.title}</p><pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-6 text-slate-600">{step.sourceContent}</pre></div>)}</div> : <p className="mt-4 text-sm text-slate-500">No matching instructions were found in this imported source.</p>}</> : <p className="mt-4 text-sm text-slate-500">Import your Week {week} source material to begin.</p>}
    </CardContent></Card>
    <Card><CardHeader><h2 className="font-semibold">My work</h2><p className="mt-1 text-sm text-slate-500">Saved separately from imported source material.</p></CardHeader><CardContent><textarea className="min-h-32 w-full rounded-lg border bg-slate-50 p-3 text-sm outline-none focus:ring-2 focus:ring-slate-300" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Enter your working notes, decisions, and progress."/><div className="mt-3 flex items-center gap-3"><Button onClick={saveWork}>Save work</Button><span className="text-xs text-slate-500">{draft === runtime.work[workKey] ? "Saved" : "Unsaved changes"}</span></div></CardContent></Card>
    <Card><CardHeader><h2 className="font-semibold">Evidence references</h2><p className="mt-1 text-sm text-slate-500">References only; no upload or integration is performed.</p></CardHeader><CardContent><div className="grid gap-2 sm:grid-cols-2"><input className="rounded-lg border p-2 text-sm" placeholder="Title" value={ref.title} onChange={(e) => setRef({ ...ref, title: e.target.value })}/><select className="rounded-lg border p-2 text-sm" value={ref.type} onChange={(e) => setRef({ ...ref, type: e.target.value })}>{evidenceTypes.map((type) => <option key={type}>{type}</option>)}</select><input className="rounded-lg border p-2 text-sm" placeholder="URL or local path" value={ref.reference} onChange={(e) => setRef({ ...ref, reference: e.target.value })}/><input className="rounded-lg border p-2 text-sm" placeholder="Optional note" value={ref.note} onChange={(e) => setRef({ ...ref, note: e.target.value })}/></div><Button className="mt-3" variant="secondary" onClick={addReference}>{editingId ? <Pencil size={15}/> : <Plus size={15}/>}{editingId ? "Save reference" : "Add reference"}</Button><div className="mt-4 space-y-2">{runtime.references.length ? runtime.references.map((item) => <div key={item.id} className="flex items-center justify-between gap-3 rounded-lg border bg-slate-50 p-3 text-sm"><div><p className="font-medium">{item.title} <span className="text-slate-400">· {item.type}</span></p>{/^https?:\/\//i.test(item.reference) ? <a className="text-slate-500 underline" href={item.reference} target="_blank" rel="noreferrer">{item.reference}</a> : <p className="text-slate-500">{item.reference}</p>}<p className="mt-1 text-xs text-slate-400">{item.note}</p></div><div className="flex gap-2"><Button variant="secondary" onClick={() => { setEditingId(item.id); setRef({ title: item.title, type: item.type, reference: item.reference, note: item.note }); }}><Pencil size={15}/></Button><Button variant="danger" onClick={() => { if (window.confirm("Remove this reference?")) persist(updateWeekRuntime(week, (current) => ({ ...current, references: current.references.filter((reference) => reference.id !== item.id) })), "Reference removed"); }}><Trash2 size={15}/></Button></div></div>) : <p className="text-sm text-slate-500">No evidence references added yet.</p>}</div></CardContent></Card>
  </div>;
}
