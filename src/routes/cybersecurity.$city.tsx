import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { cities } from "@/data/locations";
import { services } from "@/data/services";

export const Route = createFileRoute("/cybersecurity/$city")({
  loader: ({ params }) => {
    const city = cities.find((c) => c.slug === params.city);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Location not found" }, { name: "robots", content: "noindex" }] };
    }
    const { city } = loaderData;
    const title = `Cybersecurity & Managed IT in ${city.name}, ${city.stateCode} | SecureMe247`;
    const description = `24/7 managed detection and response, IT support and compliance services for ${city.name}, ${city.state} businesses. Free security assessment.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: CityPage,
});

const highlights = [
  "24/7/365 SOC monitoring with 30-minute response",
  "Managed detection and response across endpoints, cloud and identity",
  "Compliance programs for SOC 2, HIPAA, PCI DSS, CMMC and NIST CSF",
  "Named engineers who learn your environment — no ticket roulette",
  "Flat monthly pricing with no hidden tiers or upsells",
  "Free initial assessment with no commitment",
];

function CityPage() {
  const { city } = Route.useLoaderData();
  const nearby = cities
    .filter((c) => c.stateSlug === city.stateSlug && c.slug !== city.slug)
    .slice(0, 8);

  return (
    <>
      <PageHero
        eyebrow={`${city.name}, ${city.stateCode}`}
        title={`Cybersecurity & Managed IT in ${city.name}`}
        intro={`SecureMe247 protects ${city.name} businesses with enterprise-grade security operations, IT support and compliance — delivered remotely 24/7 with on-site help when it matters.`}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">
          Why {city.name} businesses choose SecureMe247
        </h2>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border/60 bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Services available in {city.name}, {city.stateCode}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
              >
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight">Nearby cities in {city.state}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {nearby.map((c) => (
              <Link
                key={c.slug}
                to="/cybersecurity/$city"
                params={{ city: c.slug }}
                className="rounded-lg border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/locations/$state"
              params={{ state: city.stateSlug }}
              className="font-mono text-xs text-primary hover:underline"
            >
              ← All {city.state} locations
            </Link>
          </div>
        </section>
      )}

      <CtaSection title={`Protect your ${city.name} business today`} />
    </>
  );
}