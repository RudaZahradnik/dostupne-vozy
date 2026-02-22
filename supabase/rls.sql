alter table vehicles enable row level security;
alter table vehicle_images enable row level security;
alter table leads enable row level security;
alter table site_settings enable row level security;

create policy "Public can read published vehicles" on vehicles
for select using (status = 'published');

create policy "Public can read images of published vehicles" on vehicle_images
for select using (
  exists (
    select 1 from vehicles v where v.id = vehicle_images.vehicle_id and v.status = 'published'
  )
);

create policy "Admin full access vehicles" on vehicles
for all using ((auth.jwt() ->> 'role') = 'admin') with check ((auth.jwt() ->> 'role') = 'admin');

create policy "Admin full access images" on vehicle_images
for all using ((auth.jwt() ->> 'role') = 'admin') with check ((auth.jwt() ->> 'role') = 'admin');

create policy "Admin full access leads" on leads
for all using ((auth.jwt() ->> 'role') = 'admin') with check ((auth.jwt() ->> 'role') = 'admin');

create policy "Admin full access settings" on site_settings
for all using ((auth.jwt() ->> 'role') = 'admin') with check ((auth.jwt() ->> 'role') = 'admin');
