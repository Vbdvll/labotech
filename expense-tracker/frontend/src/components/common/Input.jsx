import clsx from "clsx";
import { forwardRef } from "react";

export const Input = forwardRef(function Input({ label, error, className, ...props }, ref) {
  return (
    <label className="block space-y-2">
      {label && <span className="text-sm font-medium text-slate-300">{label}</span>}
      <input
        ref={ref}
        className={clsx(
          "w-full rounded-lg border border-line bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-ocean focus:ring-4 focus:ring-ocean/10",
          className,
        )}
        {...props}
      />
      {error && <span className="text-xs text-rose-300">{error}</span>}
    </label>
  );
});
