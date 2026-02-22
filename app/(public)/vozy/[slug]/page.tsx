import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { submitLead } from "@/lib/actions";
import { getVehicleBySlug, listPublishedVehicles } from "@/lib/data/repository";

export const revalidate = 300;

export async function generateStaticParams() {
  const vehicles = await listPublishedVehicles();
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const vehicle = await getVehicleBySlug(params.slug);
  if (!vehicle) return { title: "Vůz nenalezen" };
  const image = vehicle.images.find((img) => img.is_primary)?.url;
  return {
    title: `${vehicle.make} ${vehicle.model} | Dostupné vozy`,
    description: `${vehicle.year}, ${vehicle.mileage_km} km, ${vehicle.price_czk} Kč`,
    openGraph: { images: image ? [image] : undefined },
  };
}

export default async function VehicleDetail({ params }: { params: { slug: string } }) {
  const vehicle = await getVehicleBySlug(params.slug);
  if (!vehicle) notFound();

  return (
    <main className="container-page grid gap-6 py-8 lg:grid-cols-[2fr,1fr]">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">{vehicle.make} {vehicle.model} {vehicle.trim}</h1>
        <div className="grid gap-3 md:grid-cols-2">
          {vehicle.images.map((img) => (
            <Image key={img.id} src={img.url} alt={img.alt} width={900} height={620} sizes="(max-width:768px) 100vw, 50vw" className="h-64 w-full rounded-xl object-cover" loading="lazy" />
          ))}
        </div>
        <article className="card p-4">
          <h2 className="font-semibold">Parametry</h2>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-zinc-300">
            <li>Rok: {vehicle.year}</li><li>Nájezd: {vehicle.mileage_km} km</li><li>Palivo: {vehicle.fuel_type}</li><li>Převodovka: {vehicle.transmission}</li>
          </ul>
        </article>
        <article className="card p-4"><h2 className="font-semibold">Výbava</h2><p className="mt-2 text-sm text-zinc-300">{vehicle.equipment.join(", ")}</p></article>
        <article className="card p-4"><h2 className="font-semibold">Popis</h2><p className="mt-2 text-sm text-zinc-300">{vehicle.description}</p></article>
      </section>
      <aside className="card sticky top-4 h-fit p-4">
        <p className="text-2xl font-bold text-primary">{new Intl.NumberFormat("cs-CZ").format(vehicle.price_czk)} Kč</p>
        <form action={submitLead.bind(null, vehicle.id)} className="mt-4 space-y-2">
          <input name="name" required placeholder="Jméno" className="w-full rounded border border-border bg-bg px-3 py-2" />
          <input name="email" required type="email" placeholder="E-mail" className="w-full rounded border border-border bg-bg px-3 py-2" />
          <input name="phone" required placeholder="Telefon" className="w-full rounded border border-border bg-bg px-3 py-2" />
          <textarea name="message" required placeholder="Zpráva" className="w-full rounded border border-border bg-bg px-3 py-2" />
          <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />
          <button className="w-full rounded bg-primary px-4 py-2 font-semibold text-bg">Odeslat poptávku</button>
        </form>
      </aside>
    </main>
  );
}
