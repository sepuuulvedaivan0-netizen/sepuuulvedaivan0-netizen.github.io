import { cn } from "@/lib/utils";

/** Franja delgada con los colores de la bandera de Colombia. */
export function FlagStripe({ className }: { className?: string }) {
  return <div aria-hidden className={cn("bg-flag h-1 w-full", className)} />;
}
