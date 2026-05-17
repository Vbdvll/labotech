import { CalendarDays, Clock3, Landmark, Plus, TrendingUp, WalletCards } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { CategoryPie, MonthlyBars, TrendChart, WeeklyBars } from "../components/dashboard/Charts";
import { StatCard } from "../components/dashboard/StatCard";
import { EmptyState } from "../components/common/EmptyState";
import { Loader } from "../components/common/Loader";
import { expenseService } from "../services/expenseService";
import { CATEGORY_LABELS } from "../utils/constants";
import { formatCurrency, formatDate } from "../utils/formatters";

const emptyStats = {
  today: 0,
  week: 0,
  month: 0,
  total: 0,
  dominant_category: null,
  latest_expense: null,
  by_category: [],
  by_day: [],
  by_month: [],
  weekly: [],
};

export function DashboardPage() {
  const [stats, setStats] = useState(emptyStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        setStats(await expenseService.stats());
      } catch {
        setStats(emptyStats);
        toast.error("Impossible de charger le dashboard");
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) return <Loader />;

  const hasData = stats?.total > 0;

  return (
    <div className="space-y-6">
      <section className="glass flex flex-col gap-4 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-mint">Action rapide</p>
          <h2 className="mt-1 text-xl font-semibold text-white">Ajouter une depense en quelques secondes</h2>
        </div>
        <Link
          to="/expenses"
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-mint px-4 py-2 text-sm font-semibold text-ink shadow-glow transition hover:bg-emerald-300"
        >
          <Plus className="h-4 w-4" />
          Ajouter
        </Link>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Aujourd'hui" value={stats.today} icon={Clock3} tone="mint" />
        <StatCard title="Cette semaine" value={stats.week} icon={CalendarDays} tone="blue" />
        <StatCard title="Ce mois" value={stats.month} icon={TrendingUp} tone="amber" />
        <StatCard title="Total general" value={stats.total} icon={WalletCards} tone="pink" />
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="glass rounded-xl p-5 lg:col-span-2">
          <p className="text-sm text-slate-400">Derniere depense</p>
          {stats.latest_expense ? (
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {stats.latest_expense.description || CATEGORY_LABELS[stats.latest_expense.category] || "Depense"}
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  {formatDate(stats.latest_expense.date)} - {CATEGORY_LABELS[stats.latest_expense.category]}
                </p>
              </div>
              <p className="text-3xl font-bold text-mint">{formatCurrency(stats.latest_expense.amount)}</p>
            </div>
          ) : (
            <p className="mt-3 text-slate-400">Aucune depense enregistree.</p>
          )}
        </div>
        <div className="glass rounded-xl p-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ocean/15 text-ocean">
            <Landmark className="h-5 w-5" />
          </span>
          <p className="mt-5 text-sm text-slate-400">Categorie dominante</p>
          <h2 className="mt-1 text-2xl font-bold text-white">
            {stats.dominant_category ? CATEGORY_LABELS[stats.dominant_category] : "-"}
          </h2>
        </div>
      </section>

      {!hasData ? (
        <EmptyState title="Dashboard pret" description="Ajoutez des depenses pour activer les statistiques et rapports." />
      ) : (
        <>
          <section className="grid grid-cols-1 gap-4 xl:grid-cols-5">
            <div className="xl:col-span-3"><TrendChart data={stats.by_day} /></div>
            <div className="xl:col-span-2"><CategoryPie data={stats.by_category} /></div>
          </section>
          <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <WeeklyBars data={stats.weekly} />
            <MonthlyBars data={stats.by_month} />
          </section>
        </>
      )}
    </div>
  );
}
