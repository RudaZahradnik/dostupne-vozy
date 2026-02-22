export function Modal({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 grid place-items-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-xl border border-border bg-surface p-4">
        <h3 className="mb-2 font-semibold">{title}</h3>
        {children}
      </div>
    </div>
  );
}
