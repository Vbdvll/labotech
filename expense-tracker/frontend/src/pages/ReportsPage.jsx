import { Download, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Button } from "../components/common/Button";
import { Loader } from "../components/common/Loader";
import { reportService } from "../services/reportService";
import { CATEGORY_LABELS } from "../utils/constants";
import { formatCurrency, formatDate } from "../utils/formatters";

const periods = [
  { value: "daily", label: "Journalier" },
  { value: "weekly", label: "Hebdomadaire" },
  { value: "monthly", label: "Mensuel" },
];

export function ReportsPage() {
  const [period, setPeriod] = useState("monthly");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    async function fetchReport() {
      setLoading(true);
      try {
        setReport(await reportService.summary(period));
      } catch {
        toast.error("Rapport indisponible");
      } finally {
        setLoading(false);
      }
    }
    fetchReport();
  }, [period]);

  const download = async () => {
    setDownloading(true);
    try {
      await reportService.downloadPdf(period);
      toast.success("PDF genere");
    } catch {
      toast.error("Export PDF impossible");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="space-y-6">
      <section className="glass rounded-xl p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-mint">Rapports</p>
            <h2 className="mt-1 text-2xl font-bold text-white">Analyse exportable</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {periods.map((item) => (
              <button
                key={item.value}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${period === item.value ? "bg-mint text-ink" : "border border-line text-slate-300 hover:bg-white/5"}`}
                onClick={() => setPeriod(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {loading ? (
        <Loader />
      ) : (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="glass rounded-xl p-5 lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ocean/15 text-ocean">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">Rapport {report.label}</h3>
                <p className="text-sm text-slate-400">{formatDate(report.start_date)} - {formatDate(report.end_date)}</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-white/[0.03] p-4">
                <p className="text-sm text-slate-400">Total</p>
                <p className="mt-2 text-3xl font-bold text-mint">{formatCurrency(report.total)}</p>
              </div>
              <div className="rounded-xl border border-line bg-white/[0.03] p-4">
                <p className="text-sm text-slate-400">Transactions</p>
                <p className="mt-2 text-3xl font-bold text-white">{report.count}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {report.by_category.map((item) => (
                <div key={item.category} className="flex items-center justify-between rounded-lg border border-line bg-white/[0.03] px-4 py-3">
                  <span className="text-slate-300">{CATEGORY_LABELS[item.category] || item.category}</span>
                  <span className="font-semibold text-white">{formatCurrency(item.total)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white">Export PDF</h3>
            <p className="mt-2 text-sm text-slate-400">Telechargez un rapport propre pour archivage, partage ou revue budgetaire.</p>
            <Button className="mt-6 w-full" loading={downloading} onClick={download}>
              <Download className="h-4 w-4" />
              Exporter
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
