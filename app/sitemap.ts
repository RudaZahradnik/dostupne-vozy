import type { MetadataRoute } from "next";
import { listPublishedVehicles } from "@/lib/data/repository";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://dostupne-vozy.cz";
  const vehicles = await listPublishedVehicles();
  return [
    "",
    "/vozy",
    "/o-nas",
    "/sluzby",
    "/recenze",
    "/faq",
    "/kontakt",
  ].map((path) => ({ url: `${base}${path}`, changeFrequency: "weekly", priority: path === "" ? 1 : 0.8 }))
    .concat(vehicles.map((v) => ({ url: `${base}/vozy/${v.slug}`, changeFrequency: "daily", priority: 0.9 })));
}
