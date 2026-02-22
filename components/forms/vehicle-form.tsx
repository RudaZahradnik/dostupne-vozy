"use client";

import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { vehicleSchema, type VehicleInput } from "@/lib/validation/vehicle";
import { saveVehicleAction } from "@/lib/actions";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";

export function VehicleForm({ id = "v1" }: { id?: string }) {
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<VehicleInput>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: { status: "draft", fuel_type: "Nafta", transmission: "Automatická" },
  });

  const previewUrl = useMemo(() => `/preview/vozy/${id}?token=${process.env.NEXT_PUBLIC_PREVIEW_TOKEN ?? "preview"}`,[id]);

  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <form action={saveVehicleAction} onSubmit={handleSubmit(() => undefined)} className="card space-y-3 p-4">
        <Tabs tabs={["Základ", "Parametry", "SEO"]} />
        <Select {...register("status")}><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></Select>
        <Input placeholder="Značka" {...register("make")} />
        <Input placeholder="Model" {...register("model")} />
        <Input placeholder="Trim" {...register("trim")} />
        <Input type="number" placeholder="Rok" {...register("year")} />
        <Input type="number" placeholder="Cena" {...register("price_czk")} />
        <Input type="number" placeholder="Nájezd" {...register("mileage_km")} />
        <Input placeholder="Palivo" {...register("fuel_type")} />
        <Input placeholder="Převodovka" {...register("transmission")} />
        <textarea placeholder="Popis" className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm" {...register("description")} />
        {Object.keys(errors).length > 0 && <p className="text-sm text-red-400">Formulář obsahuje chyby.</p>}
        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Ukládám..." : "Uložit vůz"}</Button>
      </form>
      <aside className="card p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold">Live preview</h3>
          <div className="flex gap-2">
            <Button type="button" variant="ghost" onClick={() => setViewport("mobile")}>Mobile</Button>
            <Button type="button" variant="ghost" onClick={() => setViewport("desktop")}>Desktop</Button>
          </div>
        </div>
        <iframe src={previewUrl} className={viewport === "mobile" ? "h-[650px] w-[390px] max-w-full rounded border border-border" : "h-[650px] w-full rounded border border-border"} title="Vehicle preview" />
      </aside>
    </div>
  );
}
