"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { leadSchema } from "@/lib/validation/lead";
import { vehicleSchema } from "@/lib/validation/vehicle";

const memoryLeads: Record<string, number[]> = {};

function throttle(ip: string) {
  const now = Date.now();
  const windowMs = 60_000;
  const maxRequests = 5;
  const history = (memoryLeads[ip] ?? []).filter((x) => now - x < windowMs);
  history.push(now);
  memoryLeads[ip] = history;
  return history.length <= maxRequests;
}

export async function submitLead(vehicleId: string, formData: FormData) {
  const input = Object.fromEntries(formData.entries());
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "Neplatný formulář" };
  if (parsed.data.company) return { ok: false, error: "Spam detekován" };

  const ip = headers().get("x-forwarded-for") ?? "local";
  if (!throttle(ip)) return { ok: false, error: "Příliš mnoho požadavků" };

  console.log("Lead stored", { vehicleId, ...parsed.data });
  revalidatePath("/admin/leady");
  return { ok: true };
}

export async function saveVehicleAction(formData: FormData) {
  const raw = Object.fromEntries(formData.entries());
  const parsed = vehicleSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, error: parsed.error.flatten() };

  console.log("Vehicle saved", parsed.data);
  revalidatePath("/admin/vozy");
  revalidatePath("/vozy");
  return { ok: true };
}
