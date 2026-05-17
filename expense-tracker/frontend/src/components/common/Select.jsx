import clsx from "clsx";
import { forwardRef } from "react";

export const Select = forwardRef(function Select({ label, error, children, className, ...props }, ref) {
  return (
    <label className="block space-y-2">
      {label && <span className="text-sm font-medium text-slate-300">{label}</span>}
      <select
        ref={ref}
        className={clsx(
          "w-full rounded-lg border border-line bg-panel px-3 py-2.5 text-sm text-white outline-none transition focus:border-ocean focus:ring-4 focus:ring-ocean/10",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      {error && <span className="text-xs text-rose-300">{error}</span>}
    </label>
  );
});
