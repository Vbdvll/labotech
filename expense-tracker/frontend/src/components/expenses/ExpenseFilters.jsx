import { Search } from "lucide-react";

import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { CATEGORY_LABELS } from "../../utils/constants";

export function ExpenseFilters({ filters, setFilters }) {
  const update = (key, value) => setFilters((current) => ({ ...current, [key]: value }));

  return (
    <div className="glass rounded-xl p-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
        <div className="relative md:col-span-2">
          <Search className="pointer-events-none absolute left-3 top-9 h-4 w-4 text-slate-500" />
          <Input className="pl-9" label="Recherche" value={filters.search || ""} onChange={(event) => update("search", event.target.value)} placeholder="Description" />
        </div>
        <Select label="Categorie" value={filters.category || ""} onChange={(event) => update("category", event.target.value)}>
          <option value="">Toutes</option>
          {Object.entries(CATEGORY_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </Select>
        <Input label="Debut" type="date" value={filters.start_date || ""} onChange={(event) => update("start_date", event.target.value)} />
        <Input label="Fin" type="date" value={filters.end_date || ""} onChange={(event) => update("end_date", event.target.value)} />
        <Select label="Tri" value={filters.ordering || "-date"} onChange={(event) => update("ordering", event.target.value)}>
          <option value="-date">Date recente</option>
          <option value="date">Date ancienne</option>
          <option value="-amount">Montant haut</option>
          <option value="amount">Montant bas</option>
        </Select>
      </div>
    </div>
  );
}
