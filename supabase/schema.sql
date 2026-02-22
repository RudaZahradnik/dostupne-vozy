create extension if not exists pgcrypto;

create table if not exists vehicles (
  id uuid primary key default gen_random_uuid(),
  status text not null check (status in ('draft','published','archived')) default 'draft',
  make text not null,
  model text not null,
  trim text not null,
  year int not null,
  mileage_km int not null,
  price_czk int not null,
  fuel_type text not null,
  transmission text not null,
  power_kw int not null,
  engine_cc int,
  body_type text not null,
  color text not null,
  vin text,
  location text,
  description text not null,
  equipment jsonb not null default '[]'::jsonb,
  slug text unique not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

create table if not exists vehicle_images (
  id uuid primary key default gen_random_uuid(),
  vehicle_id uuid not null references vehicles(id) on delete cascade,
  storage_path text not null,
  alt text not null,
  sort_order int not null default 0,
  is_primary boolean not null default false
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  vehicle_id uuid references vehicles(id) on delete set null,
  name text not null,
  email text not null,
  phone text not null,
  message text not null,
  source text not null default 'detail-form',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists site_settings (
  id int primary key default 1,
  contact_phone text,
  contact_email text,
  address text,
  hero_text text,
  faq jsonb default '[]'::jsonb
);
