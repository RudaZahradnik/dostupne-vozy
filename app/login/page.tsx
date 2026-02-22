import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="container-page grid min-h-screen place-items-center">
      <div className="card w-full max-w-md p-6">
        <h1 className="text-2xl font-bold">Admin login</h1>
        <p className="mt-2 text-sm text-zinc-300">Pro produkci připojte Supabase Auth.</p>
        <Link href="/admin/vozy" className="mt-4 inline-block rounded bg-primary px-4 py-2 font-semibold text-bg">Pokračovat (demo)</Link>
      </div>
    </main>
  );
}
