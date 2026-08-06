import { cn } from "@/lib/utils";
export function Button({ className, variant = "primary", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "danger" }) {
  const styles = { primary: "bg-slate-900 text-white hover:bg-slate-800", secondary: "border bg-white text-slate-700 hover:bg-slate-50", danger: "border border-red-200 bg-red-50 text-red-700 hover:bg-red-100" };
  return <button className={cn("inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors disabled:opacity-50", styles[variant], className)} {...props} />;
}
