import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const sectionVariants = cva("relative py-20 md:py-28", {
  variants: {
    tone: {
      paper: "bg-background text-foreground",
      muted: "bg-secondary text-foreground",
      ink: "bg-ink-gradient text-ink-foreground",
    },
  },
  defaultVariants: { tone: "paper" },
});

export type SectionTone = NonNullable<VariantProps<typeof sectionVariants>["tone"]>;

interface SectionProps extends VariantProps<typeof sectionVariants> {
  id?: string | undefined;
  className?: string | undefined;
  children: ReactNode;
}

/** Contenedor de sección con fondo y espaciado consistentes. */
export function Section({ id, tone, className, children }: SectionProps) {
  return (
    <section id={id} className={cn(sectionVariants({ tone }), className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}
