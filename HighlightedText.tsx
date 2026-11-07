/** Muestra un texto resaltando en dorado la primera aparición de `highlight`. */
export function HighlightedText({ text, highlight }: { text: string; highlight?: string }) {
  const index = highlight ? text.indexOf(highlight) : -1;
  if (!highlight || index === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <em className="text-gold-gradient font-normal">{highlight}</em>
      {text.slice(index + highlight.length)}
    </>
  );
}
