import { VehicleForm } from "@/components/forms/vehicle-form";

export default function EditVehiclePage({ params }: { params: { id: string } }) {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Upravit vůz</h1>
      <VehicleForm id={params.id} />
    </section>
  );
}
