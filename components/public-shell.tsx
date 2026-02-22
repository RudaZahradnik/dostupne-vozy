import Link from "next/link";

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-border bg-bg/95">
        <nav className="container-page flex items-center justify-between py-4">
          <Link href="/" className="font-semibold text-highlight">Dostupné vozy</Link>
          <div className="flex gap-4 text-sm text-zinc-300">
            <Link href="/vozy">Vozy</Link>
            <Link href="/sluzby">Služby</Link>
            <Link href="/o-nas">O nás</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
}
