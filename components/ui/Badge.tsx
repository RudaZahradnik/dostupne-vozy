import clsx from "clsx";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={clsx("rounded-full border border-primary/40 bg-primary/10 px-2 py-1 text-xs text-highlight", className)}>{children}</span>;
}
