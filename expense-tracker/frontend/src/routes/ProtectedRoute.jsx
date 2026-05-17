import { Navigate, Outlet } from "react-router-dom";

import { Loader } from "../components/common/Loader";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <Loader />;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
