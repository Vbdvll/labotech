import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";
import { useAuth } from "../context/AuthContext";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (values) => {
    try {
      await login(values);
      navigate("/");
    } catch {
      toast.error("Identifiants invalides");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-white">Connexion</h2>
        <p className="mt-1 text-sm text-slate-400">Accedez a votre dashboard financier.</p>
      </div>
      <Input label="Nom d'utilisateur" error={errors.username?.message} {...register("username", { required: "Champ requis" })} />
      <div className="relative">
        <Input label="Mot de passe" type={showPassword ? "text" : "password"} error={errors.password?.message} {...register("password", { required: "Champ requis" })} />
        <button type="button" className="absolute right-3 top-9 text-slate-400" onClick={() => setShowPassword((v) => !v)}>
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      <div className="rounded-lg border border-line bg-white/[0.03] px-3 py-2 text-center">
        <Link className="text-sm font-semibold text-mint hover:underline" to="/forgot-password">
          Mot de passe oublie ? Recuperer l&apos;acces
        </Link>
      </div>
      <Button className="w-full" loading={isSubmitting}>Se connecter</Button>
      <p className="text-center text-sm text-slate-400">
        Nouveau ? <Link className="font-semibold text-mint" to="/register">Creer un compte</Link>
      </p>
    </form>
  );
}
