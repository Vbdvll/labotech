import { Link, NavLink, Outlet } from "react-router-dom";
import { BarChart3, FileText, LayoutDashboard, LogOut, Menu, WalletCards, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

import { Button } from "../components/common/Button";
import { useAuth } from "../context/AuthContext";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/expenses", label: "Depenses", icon: WalletCards },
  { to: "/reports", label: "Rapports", icon: FileText },
];

export function AppLayout() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-40 w-72 border-r border-line bg-ink/95 p-5 backdrop-blur-xl transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint text-ink">
              <BarChart3 className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-mint">Expense</span>
              <span className="text-lg font-bold text-white">Tracker</span>
            </span>
          </Link>
          <button className="rounded-lg p-2 text-slate-400 lg:hidden" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-10 space-y-2">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                clsx(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                  isActive ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white",
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-line bg-white/[0.03] p-4">
          <p className="text-sm font-semibold text-white">{user?.first_name || user?.username}</p>
          <p className="truncate text-xs text-slate-400">{user?.email || "Compte personnel"}</p>
          <Button variant="ghost" className="mt-3 w-full justify-start px-0" onClick={logout}>
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-line bg-ink/70 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between">
            <button className="rounded-lg border border-line p-2 text-slate-300 lg:hidden" onClick={() => setOpen(true)}>
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Finances personnelles</p>
              <h1 className="text-xl font-semibold text-white">Vue d&apos;ensemble</h1>
            </div>
            <div className="hidden rounded-full border border-line px-3 py-1.5 text-sm text-slate-300 sm:block">
              {new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
