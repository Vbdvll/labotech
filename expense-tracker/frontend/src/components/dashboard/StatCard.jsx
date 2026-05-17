import clsx from "clsx";

import { formatCurrency } from "../../utils/formatters";

export function StatCard({ title, value, icon: Icon, tone = "mint", subtitle }) {
  return (
    <div className="glass rounded-xl p-5 transition hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="mt-2 text-2xl font-bold text-white">{formatCurrency(value)}</p>
          {subtitle && <p className="mt-1 text-xs text-slate-500">{subtitle}</p>}
        </div>
        <span
          className={clsx(
            "flex h-11 w-11 items-center justify-center rounded-lg",
            tone === "mint" && "bg-mint/15 text-mint",
            tone === "blue" && "bg-ocean/15 text-ocean",
            tone === "amber" && "bg-amber-400/15 text-amber-300",
            tone === "pink" && "bg-pink-400/15 text-pink-300",
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}
