import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { expenseService } from "../services/expenseService";

export function useExpenses(filters) {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = useCallback(async () => {
    setLoading(true);
    try {
      setExpenses(await expenseService.list(filters));
    } catch {
      toast.error("Impossible de charger les depenses");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  return { expenses, loading, refresh: fetchExpenses };
}
