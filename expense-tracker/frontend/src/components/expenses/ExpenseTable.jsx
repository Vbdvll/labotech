import { Edit2, Trash2 } from "lucide-react";

import { Button } from "../common/Button";
import { EmptyState } from "../common/EmptyState";
import { CATEGORY_LABELS, PAYMENT_LABELS } from "../../utils/constants";
import { formatCurrency, formatDate } from "../../utils/formatters";

export function ExpenseTable({ expenses, onEdit, onDelete }) {
  if (!expenses.length) {
    return <EmptyState title="Aucune depense" description="Ajoutez votre premiere depense ou ajustez vos filtres." />;
  }

  return (
    <div className="glass overflow-hidden rounded-xl">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="border-b border-line bg-white/[0.03] text-xs uppercase tracking-[0.16em] text-slate-500">
            <tr>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4">Description</th>
              <th className="px-5 py-4">Categorie</th>
              <th className="px-5 py-4">Paiement</th>
              <th className="px-5 py-4 text-right">Montant</th>
              <th className="px-5 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {expenses.map((expense) => (
              <tr key={expense.id} className="transition hover:bg-white/[0.03]">
                <td className="px-5 py-4 text-slate-400">{formatDate(expense.date)}</td>
                <td className="px-5 py-4 font-medium text-white">{expense.description || CATEGORY_LABELS[expense.category] || "Depense"}</td>
                <td className="px-5 py-4 text-slate-300">{CATEGORY_LABELS[expense.category] || expense.category}</td>
                <td className="px-5 py-4 text-slate-400">{PAYMENT_LABELS[expense.payment_method] || expense.payment_method}</td>
                <td className="px-5 py-4 text-right font-semibold text-white">{formatCurrency(expense.amount)}</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <Button variant="secondary" className="px-3" onClick={() => onEdit(expense)} aria-label="Modifier">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="danger" className="px-3" onClick={() => onDelete(expense.id)} aria-label="Supprimer">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
