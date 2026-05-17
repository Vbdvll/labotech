import { WalletCards } from "lucide-react";

export function EmptyState({ title = "Aucune donnee", description = "Les informations apparaitront ici." }) {
  return (
    <div className="glass flex min-h-52 flex-col items-center justify-center rounded-xl p-8 text-center">
      <WalletCards className="mb-3 h-9 w-9 text-mint" />
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-slate-400">{description}</p>
    </div>
  );
}
