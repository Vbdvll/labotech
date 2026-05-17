import { format } from "date-fns";

export function formatCurrency(value) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(Number(value || 0));
}

export function formatDate(value) {
  if (!value) return "-";
  return format(new Date(value), "dd/MM/yyyy");
}

export function todayIso() {
  return new Date().toISOString().slice(0, 10);
}
