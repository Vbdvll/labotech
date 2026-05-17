import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { Button } from "../components/common/Button";

export function ErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error?.message || "Une erreur inattendue est survenue.";

  return (
    <main className="grid min-h-screen place-items-center px-4 py-10">
      <div className="glass max-w-lg rounded-xl p-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-mint">Expense Tracker</p>
        <h1 className="mt-3 text-2xl font-bold text-white">Une erreur est survenue</h1>
        <p className="mt-3 text-sm text-slate-400">{message}</p>
        <Button className="mt-6" onClick={() => window.location.assign("/")}>
          Revenir au dashboard
        </Button>
      </div>
    </main>
  );
}
