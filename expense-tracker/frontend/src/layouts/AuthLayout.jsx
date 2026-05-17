import { Outlet } from "react-router-dom";
import { BarChart3 } from "lucide-react";

export function AuthLayout() {
  return (
    <main className="grid min-h-screen place-items-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-ink">
            <BarChart3 className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">Expense</p>
            <h1 className="text-2xl font-bold text-white">Tracker</h1>
          </div>
        </div>
        <div className="glass rounded-2xl p-6 sm:p-8">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
