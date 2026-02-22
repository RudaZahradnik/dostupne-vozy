import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { VehicleCard } from "@/components/vehicle-card";
import { listPublishedVehicles } from "@/lib/data/repository";

export default async function HomePage() {
  const vehicles = await listPublishedVehicles();
  const featured = vehicles.filter((v) => v.featured).slice(0, 3);

  return (
    <main className="container-page space-y-14 py-10">
      <section className="card p-8">
        <p className="text-sm text-highlight">Prémiové vozy z dovozu</p>
        <h1 className="mt-2 text-4xl font-bold">Dostupné vozy</h1>
        <p className="mt-3 max-w-2xl text-zinc-300">Vybrané vozy s ověřenou historií, férovým původem a kompletním servisem.</p>
        <div className="mt-5 flex gap-3">
          <Link href="/vozy" className="rounded-lg bg-primary px-4 py-2 font-semibold text-bg">Prohlédnout katalog</Link>
          <Link href="/kontakt" className="rounded-lg border border-border px-4 py-2">Nezávazná konzultace</Link>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Doporučené vozy</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Prověřený původ", "VIN kontrola a dokumentace"],
          ["Dovoz na klíč", "Kompletní servis od výběru po přepis"],
          ["Financování", "Leasing i úvěr s rychlým schválením"],
        ].map(([t, d]) => (
          <article key={t} className="card p-5"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-zinc-300">{d}</p></article>
        ))}
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">FAQ</h2>
        <Accordion items={[{ q: "Jak dlouho trvá dovoz?", a: "Typicky 7–14 dní." }, { q: "Dáváte záruku?", a: "Ano, standardně 12 měsíců." }]} />
      </section>
    </main>
  );
}
