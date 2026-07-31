import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { states, cities } from "@/data/locations";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Managed IT & Cybersecurity Locations | SecureMe247" },
      {
        name: "description",
        content: `Managed IT and cybersecurity services in ${cities.length}+ cities across ${states.length} states, headquartered in Reston, Virginia.`,
      },
      { property: "og:title", content: "Service Locations | SecureMe247" },
      {
        property: "og:description",
        content: "Find managed security and IT support in your city.",
      },
    ],
  }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Security Coverage Across the Country"
        intro={`Headquartered in Reston, Virginia and serving ${cities.length} cities in ${states.length} states with remote-first operations and on-site support where you need it.`}
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((s) => (
            <Link
              key={s.slug}
              to="/locations/$state"
              params={{ state: s.slug }}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                <h2 className="font-semibold">{s.name}</h2>
              </div>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {s.cities.length} cities served
              </p>
            </Link>
          ))}
        </div>
      </section>
      <CtaSection title="Local support, national coverage" />
    </>
  );
}