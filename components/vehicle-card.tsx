import Image from "next/image";
import Link from "next/link";
import { Vehicle } from "@/lib/data/types";
import { Badge } from "@/components/ui/Badge";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const image = vehicle.images.find((img) => img.is_primary) ?? vehicle.images[0];

  return (
    <article className="card overflow-hidden">
      {image && (
        <Image
          src={image.url}
          alt={image.alt}
          width={640}
          height={420}
          className="h-52 w-full object-cover"
          sizes="(max-width:768px) 100vw, 33vw"
          priority={false}
        />
      )}
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{vehicle.make} {vehicle.model}</h3>
          <Badge>{vehicle.year}</Badge>
        </div>
        <p className="text-primary">{new Intl.NumberFormat("cs-CZ").format(vehicle.price_czk)} Kč</p>
        <p className="text-sm text-zinc-400">{new Intl.NumberFormat("cs-CZ").format(vehicle.mileage_km)} km • {vehicle.fuel_type}</p>
        <Link href={`/vozy/${vehicle.slug}`} className="inline-block text-sm text-highlight">Detail vozu →</Link>
      </div>
    </article>
  );
}
