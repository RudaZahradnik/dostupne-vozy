import { mockVehicles } from "./mock";
import { Vehicle } from "./types";

export async function listPublishedVehicles(): Promise<Vehicle[]> {
  return mockVehicles.filter((v) => v.status === "published");
}

export async function listAdminVehicles(): Promise<Vehicle[]> {
  return mockVehicles;
}

export async function getVehicleBySlug(slug: string): Promise<Vehicle | undefined> {
  return mockVehicles.find((v) => v.slug === slug && v.status === "published");
}

export async function getVehicleById(id: string): Promise<Vehicle | undefined> {
  return mockVehicles.find((v) => v.id === id);
}
