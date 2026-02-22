import { VehicleForm } from "@/components/forms/vehicle-form";

export default function NewVehiclePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Nový vůz</h1>
      <VehicleForm id="v1" />
    </section>
  );
}
