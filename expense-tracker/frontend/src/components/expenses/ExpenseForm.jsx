import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { CATEGORY_LABELS, PAYMENT_LABELS } from "../../utils/constants";
import { todayIso } from "../../utils/formatters";

const defaultValues = {
  amount: "",
  category: "food",
  description: "",
  date: todayIso(),
  payment_method: "card",
};

export function ExpenseForm({ initialValues, onSubmit, onCancel }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ defaultValues });

  useEffect(() => {
    reset(initialValues || { ...defaultValues, date: todayIso() });
  }, [initialValues, reset]);

  const submitForm = async (values) => {
    const saved = await onSubmit(values);
    if (saved && !initialValues) {
      reset({ ...defaultValues, date: todayIso() });
    }
  };

  return (
    <form id="quick-expense-form" onSubmit={handleSubmit(submitForm)} className="glass rounded-xl p-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">{initialValues ? "Modifier la depense" : "Ajouter une depense"}</h2>
          <p className="text-sm text-slate-400">Montant, categorie, paiement, et c&apos;est parti.</p>
        </div>
        {onCancel && <Button type="button" variant="ghost" onClick={onCancel}>Annuler</Button>}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="Montant"
          type="number"
          step="0.01"
          min="0.01"
          error={errors.amount?.message}
          {...register("amount", { required: "Montant requis", min: { value: 0.01, message: "Montant invalide" } })}
        />
        <Select label="Categorie" {...register("category", { required: true })}>
          {Object.entries(CATEGORY_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </Select>
        <Input label="Description optionnelle" placeholder="Ex: cafe, taxi, courses" error={errors.description?.message} {...register("description", { maxLength: 220 })} />
        <Input label="Date" type="date" error={errors.date?.message} {...register("date", { required: "Date requise" })} />
        <Select label="Mode de paiement" {...register("payment_method", { required: true })}>
          {Object.entries(PAYMENT_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </Select>
      </div>
      <Button className="mt-5 w-full sm:w-auto" loading={isSubmitting}>{initialValues ? "Enregistrer" : "Ajouter"}</Button>
    </form>
  );
}
