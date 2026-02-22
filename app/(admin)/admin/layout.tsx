import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-border bg-surface p-4">
        <p className="mb-4 font-semibold text-highlight">Admin</p>
        <nav className="space-y-2 text-sm">
          <Link href="/admin/vozy" className="block">Vozy</Link>
          <Link href="/admin/leady" className="block">Leady</Link>
          <Link href="/admin/media" className="block">Media</Link>
          <Link href="/admin/nastaveni" className="block">Nastavení</Link>
        </nav>
      </aside>
      <main className="ml-64 p-6">{children}</main>
    </div>
  );
}
