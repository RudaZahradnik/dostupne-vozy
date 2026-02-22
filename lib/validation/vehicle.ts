import { z } from "zod";

export const vehicleSchema = z.object({
  status: z.enum(["draft", "published", "archived"]),
  make: z.string().min(2),
  model: z.string().min(1),
  trim: z.string().min(1),
  year: z.coerce.number().min(1980).max(2099),
  mileage_km: z.coerce.number().min(0),
  price_czk: z.coerce.number().min(1),
  fuel_type: z.string().min(1),
  transmission: z.string().min(1),
  power_kw: z.coerce.number().min(1),
  engine_cc: z.coerce.number().optional(),
  body_type: z.string().min(1),
  color: z.string().min(1),
  vin: z.string().optional(),
  location: z.string().optional(),
  description: z.string().min(20),
  equipmentRaw: z.string().optional(),
});

export type VehicleInput = z.infer<typeof vehicleSchema>;
