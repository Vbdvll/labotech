import { Loader2 } from "lucide-react";

export function Loader() {
  return (
    <div className="flex min-h-52 items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-mint" />
    </div>
  );
}
