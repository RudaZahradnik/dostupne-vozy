export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-2">
      {items.map((it) => (
        <details key={it.q} className="card p-4">
          <summary className="cursor-pointer font-semibold">{it.q}</summary>
          <p className="mt-2 text-sm text-zinc-300">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
