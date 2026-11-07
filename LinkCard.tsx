import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import type { AppPath } from "@/lib/routes";
import { cn } from "@/lib/utils";

interface LinkCardProps {
  to: AppPath;
  title: string;
  text: string;
  index?: number;
  cta?: string;
  className?: string;
}

export function LinkCard({ to, title, text, index, cta = "Ver página", className }: LinkCardProps) {
  return (
    <Link
      to={to}
      className={cn(
        "group relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-2xl border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lift",
        className,
      )}
    >
      <div className="space-y-3">
        {index !== undefined && (
          <span className="font-display text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
        )}
        <h3 className="font-display text-2xl font-medium leading-tight">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        {cta}
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
      <span
        aria-hidden
        className="bg-flag absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
      />
    </Link>
  );
}
