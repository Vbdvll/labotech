import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";
import { authService } from "../services/authService";
import { getApiErrorMessage } from "../utils/errors";

export function ForgotPasswordPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (values) => {
    try {
      const data = await authService.forgotPassword(values);
      toast.success(data.detail || "Email de recuperation envoye.");
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Impossible d'envoyer l'email."));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-white">Mot de passe oublie</h2>
        <p className="mt-1 text-sm text-slate-400">Entrez votre email pour lancer la recuperation.</p>
      </div>
      <Input
        label="Email"
        type="email"
        error={errors.email?.message}
        {...register("email", { required: "Email requis" })}
      />
      <Button className="w-full" loading={isSubmitting}>Envoyer le lien</Button>
      <p className="text-center text-sm text-slate-400">
        <Link className="font-semibold text-mint" to="/login">Retour connexion</Link>
      </p>
    </form>
  );
}
