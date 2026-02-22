import type { Metadata } from "next";
import { VehicleCard } from "@/components/vehicle-card";
import { listPublishedVehicles } from "@/lib/data/repository";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Katalog vozů | Dostupné vozy",
  description: "Katalog dostupných vozů z dovozu.",
};

export default async function CarsPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const vehicles = await listPublishedVehicles();
  const fuel = typeof searchParams.fuel === "string" ? searchParams.fuel : undefined;
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : "new";

  let filtered = fuel ? vehicles.filter((v) => v.fuel_type === fuel) : vehicles;
  if (sort === "price_asc") filtered = [...filtered].sort((a, b) => a.price_czk - b.price_czk);

  return (
    <main className="container-page py-8">
      <h1 className="mb-4 text-3xl font-bold">Katalog vozů</h1>
      <div className="mb-5 flex flex-wrap gap-2 text-sm text-zinc-300">
        <a className="rounded border border-border px-3 py-1" href="/vozy?sort=new">Nejnovější</a>
        <a className="rounded border border-border px-3 py-1" href="/vozy?sort=price_asc">Cena ↑</a>
        <a className="rounded border border-border px-3 py-1" href="/vozy?fuel=Nafta">Nafta</a>
      </div>
      {!filtered.length ? <p className="card p-5 text-zinc-400">Žádné vozy podle filtru.</p> : <div className="grid gap-4 md:grid-cols-3">{filtered.map((v) => <VehicleCard key={v.id} vehicle={v} />)}</div>}
    </main>
  );
}
