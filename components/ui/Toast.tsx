export function Toast({ message }: { message: string }) {
  return <div className="fixed bottom-4 right-4 rounded-lg border border-primary/40 bg-surface px-4 py-2 text-sm">{message}</div>;
}
