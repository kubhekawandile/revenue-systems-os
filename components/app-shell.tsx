"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, BookOpen, BriefcaseBusiness, ChevronRight, CircleUserRound, GraduationCap, LayoutDashboard, Menu, ScrollText, Settings, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  ["Dashboard", "/", LayoutDashboard], ["Curriculum", "/curriculum", BookOpen], ["Portfolio", "/portfolio", BriefcaseBusiness], ["Decision Journal", "/journal", ScrollText], ["Progress", "/progress", BarChart3], ["Career", "/career", GraduationCap], ["Settings", "/settings", Settings], ["Admin", "/admin", ShieldCheck],
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname(); const [open, setOpen] = useState(false);
  const sidebar = <aside className="flex h-full w-64 flex-col border-r bg-white px-3 py-5">
    <Link href="/" className="mb-8 flex items-center gap-3 px-3" onClick={() => setOpen(false)}><span className="grid size-8 place-items-center rounded-lg bg-slate-900 text-sm font-bold text-white">R</span><span><strong className="block text-sm">Revenue Systems</strong><span className="text-xs text-slate-500">Operating System</span></span></Link>
    <nav className="space-y-1">{nav.map(([label, href, Icon]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors", path === href ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900")}><Icon size={17} />{label}</Link>)}</nav>
    <div className="mt-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-500"><div className="mb-1 flex items-center gap-2 font-medium text-slate-700"><CircleUserRound size={15} />Apprentice profile</div><p>Foundation · Week 2 of 16</p></div>
  </aside>;
  return <div className="min-h-screen bg-slate-50"><div className="hidden md:fixed md:inset-y-0 md:flex">{sidebar}</div><header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white/95 px-4 backdrop-blur md:ml-64 md:px-8"><button className="rounded-md p-2 text-slate-600 md:hidden" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu size={20} /></button><div className="hidden items-center gap-1 text-sm text-slate-500 md:flex"><span>Revenue Systems OS</span><ChevronRight size={15}/><span className="text-slate-800">Workspace</span></div><div className="text-sm text-slate-500">Updated just now</div></header>{open && <div className="fixed inset-0 z-30 md:hidden"><div className="absolute inset-0 bg-slate-900/30" onClick={() => setOpen(false)} /><div className="absolute inset-y-0 left-0"><button className="absolute right-3 top-4 z-10 rounded-md bg-slate-100 p-2" onClick={() => setOpen(false)}><X size={16}/></button>{sidebar}</div></div>}<main className="page-enter p-4 md:ml-64 md:p-8">{children}</main></div>;
}
