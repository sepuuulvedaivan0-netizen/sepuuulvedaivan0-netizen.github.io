import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface QuoteRotatorProps {
  messages: { title: string; text: string }[];
  intervalMs?: number;
}

/** Frases que rotan automáticamente, con botón de pausa accesible. */
export function QuoteRotator({ messages, intervalMs = 6000 }: QuoteRotatorProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || messages.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % messages.length), intervalMs);
    return () => window.clearInterval(id);
  }, [paused, messages.length, intervalMs]);

  const current = messages[index];
  if (!current) return null;

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div aria-live={paused ? "polite" : "off"} className="min-h-[5.5rem] max-w-3xl">
        <p key={`t-${index}`} className="animate-fade text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {current.title}
        </p>
        <blockquote key={`q-${index}`} className="animate-rise mt-2 font-display text-2xl leading-snug md:text-3xl">
          “{current.text}”
        </blockquote>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          {messages.map((m, i) => (
            <button
              key={m.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver mensaje ${i + 1}: ${m.title}`}
              aria-current={i === index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === index ? "w-10 bg-gold" : "w-4 bg-ink-foreground/25 hover:bg-ink-foreground/50",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="grid size-9 place-items-center rounded-full border border-ink-border text-ink-muted transition-colors hover:text-ink-foreground"
          aria-label={paused ? "Reanudar mensajes" : "Pausar mensajes"}
        >
          {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
        </button>
      </div>
    </div>
  );
}
