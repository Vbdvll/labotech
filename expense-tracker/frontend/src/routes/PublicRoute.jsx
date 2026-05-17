import { Navigate, Outlet } from "react-router-dom";

import { Loader } from "../components/common/Loader";
import { useAuth } from "../context/AuthContext";

export function PublicRoute() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <Loader />;
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
}
