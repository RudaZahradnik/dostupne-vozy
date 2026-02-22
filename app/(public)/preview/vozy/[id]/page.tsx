import { notFound } from "next/navigation";
import { getVehicleById } from "@/lib/data/repository";

export default async function PreviewPage({ params, searchParams }: { params: { id: string }; searchParams: { token?: string } }) {
  if (!process.env.PREVIEW_TOKEN || searchParams.token !== process.env.PREVIEW_TOKEN) notFound();
  const vehicle = await getVehicleById(params.id);
  if (!vehicle) notFound();

  return (
    <main className="container-page py-8">
      <p className="mb-3 text-sm text-highlight">Preview režim</p>
      <h1 className="text-3xl font-bold">{vehicle.make} {vehicle.model} {vehicle.trim}</h1>
      <p className="mt-2 text-zinc-300">{vehicle.description}</p>
    </main>
  );
}
