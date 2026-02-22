import Link from "next/link";
import { listAdminVehicles } from "@/lib/data/repository";
import { Badge } from "@/components/ui/Badge";

export default async function AdminVehiclesPage() {
  const vehicles = await listAdminVehicles();
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Správa vozů</h1>
        <Link href="/admin/vozy/new" className="rounded bg-primary px-3 py-2 font-semibold text-bg">Nový vůz</Link>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-black/20 text-left"><tr><th className="p-3">Vůz</th><th>Status</th><th>Cena</th><th></th></tr></thead>
          <tbody>
            {vehicles.map((v) => (
              <tr key={v.id} className="border-t border-border"><td className="p-3">{v.make} {v.model}</td><td><Badge>{v.status}</Badge></td><td>{new Intl.NumberFormat("cs-CZ").format(v.price_czk)} Kč</td><td><Link href={`/admin/vozy/${v.id}`} className="text-highlight">Upravit</Link></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
