import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import { authService } from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = useCallback(async () => {
    const token = localStorage.getItem("expense_access_token");
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      setUser(await authService.me());
    } catch {
      localStorage.removeItem("expense_access_token");
      localStorage.removeItem("expense_refresh_token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const login = async (payload) => {
    const tokens = await authService.login(payload);
    localStorage.setItem("expense_access_token", tokens.access);
    localStorage.setItem("expense_refresh_token", tokens.refresh);
    setUser(await authService.me());
    toast.success("Connexion reussie");
  };

  const register = async (payload) => {
    await authService.register(payload);
    toast.success("Compte cree. Vous pouvez vous connecter.");
  };

  const logout = () => {
    localStorage.removeItem("expense_access_token");
    localStorage.removeItem("expense_refresh_token");
    setUser(null);
    toast.success("Session terminee");
  };

  const value = useMemo(
    () => ({ user, loading, isAuthenticated: Boolean(user), login, register, logout }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
