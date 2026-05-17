import { useMemo, useState } from "react";
import toast from "react-hot-toast";

import { Loader } from "../components/common/Loader";
import { ExpenseFilters } from "../components/expenses/ExpenseFilters";
import { ExpenseForm } from "../components/expenses/ExpenseForm";
import { ExpenseTable } from "../components/expenses/ExpenseTable";
import { useExpenses } from "../hooks/useExpenses";
import { expenseService } from "../services/expenseService";
import { getApiErrorMessage } from "../utils/errors";

export function ExpensesPage() {
  const [filters, setFilters] = useState({ ordering: "-date" });
  const [editing, setEditing] = useState(null);
  const stableFilters = useMemo(() => filters, [filters]);
  const { expenses, loading, refresh } = useExpenses(stableFilters);

  const handleSubmit = async (values) => {
    try {
      const payload = { ...values, amount: Number(values.amount).toFixed(2) };
      if (editing) {
        await expenseService.update(editing.id, payload);
        toast.success("Depense mise a jour");
      } else {
        await expenseService.create(payload);
        toast.success("Depense ajoutee");
      }
      setEditing(null);
      refresh();
      return true;
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Enregistrement impossible"));
      return false;
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cette depense ?")) return;
    try {
      await expenseService.remove(id);
      toast.success("Depense supprimee");
      refresh();
    } catch {
      toast.error("Suppression impossible");
    }
  };

  return (
    <div className="space-y-6">
      <ExpenseForm initialValues={editing} onSubmit={handleSubmit} onCancel={editing ? () => setEditing(null) : null} />
      <ExpenseFilters filters={filters} setFilters={setFilters} />
      {loading ? <Loader /> : <ExpenseTable expenses={expenses} onEdit={setEditing} onDelete={handleDelete} />}
    </div>
  );
}
