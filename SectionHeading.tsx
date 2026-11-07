import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function Eyebrow({ children, tone = "light" }: { children: string; tone?: "light" | "dark" }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]",
        tone === "dark" ? "text-gold" : "text-flag-blue",
      )}
    >
      <span aria-hidden className="bg-flag h-[3px] w-8 rounded-full" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-5", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Heading
        className={cn(
          "font-display text-4xl font-medium leading-[1.05] md:text-5xl",
          tone === "dark" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className={cn("text-lg leading-relaxed", tone === "dark" ? "text-ink-muted" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  );
}
