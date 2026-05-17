export function getApiErrorMessage(error, fallback = "Une erreur est survenue") {
  const data = error?.response?.data;

  if (!error?.response) {
    return "Connexion API impossible. Verifiez que le backend est lance et que l'origine frontend est autorisee.";
  }

  if (!data) return fallback;
  if (typeof data === "string") return data;
  if (data.detail) return data.detail;

  const firstFieldError = Object.entries(data).find(([, value]) => {
    return Array.isArray(value) ? value.length > 0 : Boolean(value);
  });

  if (!firstFieldError) return fallback;

  const [field, value] = firstFieldError;
  const message = Array.isArray(value) ? value[0] : value;
  const labels = {
    username: "Nom d'utilisateur",
    email: "Email",
    password: "Mot de passe",
    amount: "Montant",
    description: "Description",
    date: "Date",
  };

  return `${labels[field] || field}: ${message}`;
}
