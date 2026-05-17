import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";
import { useAuth } from "../context/AuthContext";
import { getApiErrorMessage } from "../utils/errors";

export function RegisterPage() {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (values) => {
    try {
      await registerUser(values);
      navigate("/login");
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Creation impossible"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-white">Creer un compte</h2>
        <p className="mt-1 text-sm text-slate-400">Suivez vos depenses avec un espace prive.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Prenom" {...register("first_name")} />
        <Input label="Nom" {...register("last_name")} />
      </div>
      <Input label="Nom d'utilisateur" error={errors.username?.message} {...register("username", { required: "Champ requis" })} />
      <Input label="Email" type="email" error={errors.email?.message} {...register("email", { required: "Champ requis" })} />
      <Input
        label="Mot de passe"
        type="password"
        error={errors.password?.message}
        {...register("password", { required: "Champ requis", minLength: { value: 8, message: "8 caracteres minimum" } })}
      />
      <Button className="w-full" loading={isSubmitting}>S&apos;inscrire</Button>
      <p className="text-center text-sm text-slate-400">
        Deja un compte ? <Link className="font-semibold text-mint" to="/login">Connexion</Link>
      </p>
    </form>
  );
}
