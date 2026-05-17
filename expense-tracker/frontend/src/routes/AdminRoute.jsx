import { Navigate, Outlet } from "react-router-dom";

import { Loader } from "../components/common/Loader";
import { useAuth } from "../context/AuthContext";

export function AdminRoute() {
  const { loading, user } = useAuth();

  if (loading) return <Loader />;
  if (!user) return <Navigate to="/login" replace />;
  return user.is_staff ? <Outlet /> : <Navigate to="/" replace />;
}
