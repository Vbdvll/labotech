import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { CATEGORY_COLORS, CATEGORY_LABELS } from "../../utils/constants";
import { formatCurrency, formatDate } from "../../utils/formatters";

const tooltipStyle = {
  background: "#0D1421",
  border: "1px solid #1E293B",
  borderRadius: "10px",
  color: "#E5EEF9",
};

export function CategoryPie({ data }) {
  const chartData = data.map((item) => ({ ...item, label: CATEGORY_LABELS[item.category] || item.category }));
  return (
    <div className="glass rounded-xl p-5">
      <h2 className="text-base font-semibold text-white">Repartition categories</h2>
      <div className="mt-4 h-72">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={chartData} dataKey="total" nameKey="label" innerRadius={58} outerRadius={92} paddingAngle={4}>
              {chartData.map((entry) => (
                <Cell key={entry.category} fill={CATEGORY_COLORS[entry.category] || "#94A3B8"} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} formatter={(value) => formatCurrency(value)} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {chartData.map((item) => (
          <div key={item.category} className="flex items-center gap-2 text-slate-300">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[item.category] }} />
            <span className="truncate">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrendChart({ data }) {
  return (
    <div className="glass rounded-xl p-5">
      <h2 className="text-base font-semibold text-white">Evolution sur 30 jours</h2>
      <div className="mt-4 h-72">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="spend" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#49A6FF" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#49A6FF" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#1E293B" strokeDasharray="4 4" />
            <XAxis dataKey="date" tickFormatter={formatDate} stroke="#64748B" tick={{ fontSize: 12 }} />
            <YAxis stroke="#64748B" tick={{ fontSize: 12 }} tickFormatter={(value) => `${value} EUR`} />
            <Tooltip contentStyle={tooltipStyle} formatter={(value) => formatCurrency(value)} labelFormatter={formatDate} />
            <Area type="monotone" dataKey="total" stroke="#49A6FF" fill="url(#spend)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function MonthlyBars({ data }) {
  return (
    <div className="glass rounded-xl p-5">
      <h2 className="text-base font-semibold text-white">Histogramme mensuel</h2>
      <div className="mt-4 h-72">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid stroke="#1E293B" strokeDasharray="4 4" />
            <XAxis dataKey="month" tickFormatter={(value) => new Date(value).toLocaleDateString("fr-FR", { month: "short" })} stroke="#64748B" tick={{ fontSize: 12 }} />
            <YAxis stroke="#64748B" tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={tooltipStyle} formatter={(value) => formatCurrency(value)} />
            <Bar dataKey="total" radius={[8, 8, 0, 0]} fill="#2EE59D" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function WeeklyBars({ data }) {
  return (
    <div className="glass rounded-xl p-5">
      <h2 className="text-base font-semibold text-white">Depenses hebdomadaires</h2>
      <div className="mt-4 h-64">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid stroke="#1E293B" strokeDasharray="4 4" />
            <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString("fr-FR", { weekday: "short" })} stroke="#64748B" tick={{ fontSize: 12 }} />
            <YAxis stroke="#64748B" tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={tooltipStyle} formatter={(value) => formatCurrency(value)} labelFormatter={formatDate} />
            <Bar dataKey="total" radius={[8, 8, 0, 0]} fill="#49A6FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
