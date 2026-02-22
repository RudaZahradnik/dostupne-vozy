export type VehicleStatus = "draft" | "published" | "archived";

export type Vehicle = {
  id: string;
  status: VehicleStatus;
  make: string;
  model: string;
  trim: string;
  year: number;
  mileage_km: number;
  price_czk: number;
  fuel_type: string;
  transmission: string;
  power_kw: number;
  engine_cc?: number | null;
  body_type: string;
  color: string;
  vin?: string | null;
  location?: string | null;
  description: string;
  equipment: string[];
  slug: string;
  featured?: boolean;
  created_at: string;
  updated_at: string;
  published_at?: string | null;
  images: { id: string; url: string; alt: string; is_primary: boolean }[];
};

export type Lead = {
  id: string;
  vehicle_id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  source: string;
  status: string;
  created_at: string;
};
