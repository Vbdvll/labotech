import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Loader } from "../components/common/Loader";
import { authService } from "../services/authService";

export function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        setUsers(await authService.adminUsers());
      } catch {
        toast.error("Impossible de charger les utilisateurs.");
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="glass rounded-xl p-5">
      <h2 className="text-xl font-semibold text-white">Administration utilisateurs</h2>
      <p className="mt-1 text-sm text-slate-400">Vue globale des comptes et de leur activite depenses.</p>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="border-b border-line text-xs uppercase tracking-[0.14em] text-slate-500">
            <tr>
              <th className="px-3 py-3">Username</th>
              <th className="px-3 py-3">Email</th>
              <th className="px-3 py-3">Role</th>
              <th className="px-3 py-3">Etat</th>
              <th className="px-3 py-3">Depenses</th>
              <th className="px-3 py-3">Inscription</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-3 py-3 font-medium text-white">{user.username}</td>
                <td className="px-3 py-3 text-slate-300">{user.email || "-"}</td>
                <td className="px-3 py-3 text-slate-300">{user.is_staff ? "Admin" : "User"}</td>
                <td className="px-3 py-3 text-slate-300">{user.is_active ? "Actif" : "Inactif"}</td>
                <td className="px-3 py-3 text-slate-300">{user.expenses_count}</td>
                <td className="px-3 py-3 text-slate-300">{new Date(user.date_joined).toLocaleDateString("fr-FR")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
