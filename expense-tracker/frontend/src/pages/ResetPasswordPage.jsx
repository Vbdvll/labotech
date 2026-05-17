import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";
import { authService } from "../services/authService";
import { getApiErrorMessage } from "../utils/errors";

export function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const uid = searchParams.get("uid") || "";
  const token = searchParams.get("token") || "";
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (values) => {
    try {
      await authService.resetPassword({
        uid,
        token,
        new_password: values.new_password,
        new_password_confirm: values.new_password_confirm,
      });
      toast.success("Mot de passe reinitialise.");
      navigate("/login");
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Reinitialisation impossible."));
    }
  };

  if (!uid || !token) {
    return (
      <div className="space-y-5">
        <h2 className="text-2xl font-bold text-white">Lien invalide</h2>
        <p className="text-sm text-slate-400">Le lien de reinitialisation est incomplet ou invalide.</p>
        <Link className="font-semibold text-mint" to="/forgot-password">Demander un nouveau lien</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-white">Nouveau mot de passe</h2>
        <p className="mt-1 text-sm text-slate-400">Choisissez un nouveau mot de passe et confirmez-le.</p>
      </div>

      <div className="relative">
        <Input
          label="Nouveau mot de passe"
          type={showPassword ? "text" : "password"}
          error={errors.new_password?.message}
          {...register("new_password", { required: "Champ requis", minLength: { value: 8, message: "8 caracteres minimum" } })}
        />
        <button type="button" className="absolute right-3 top-9 text-slate-400" onClick={() => setShowPassword((v) => !v)}>
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>

      <div className="relative">
        <Input
          label="Confirmer mot de passe"
          type={showConfirmPassword ? "text" : "password"}
          error={errors.new_password_confirm?.message}
          {...register("new_password_confirm", { required: "Champ requis", minLength: { value: 8, message: "8 caracteres minimum" } })}
        />
        <button type="button" className="absolute right-3 top-9 text-slate-400" onClick={() => setShowConfirmPassword((v) => !v)}>
          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>

      <Button className="w-full" loading={isSubmitting}>Reinitialiser</Button>
    </form>
  );
}
