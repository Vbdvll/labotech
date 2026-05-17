import { Loader2 } from "lucide-react";
import clsx from "clsx";

export function Button({ children, className, loading, variant = "primary", ...props }) {
  return (
    <button
      className={clsx(
        "inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" && "bg-mint text-ink shadow-glow hover:bg-emerald-300",
        variant === "secondary" && "border border-line bg-white/5 text-slate-100 hover:bg-white/10",
        variant === "ghost" && "text-slate-300 hover:bg-white/5 hover:text-white",
        variant === "danger" && "bg-rose-500/15 text-rose-200 hover:bg-rose-500/25",
        className,
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
