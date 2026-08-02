import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Cybersecurity & IT Services | SecureMe247" },
      {
        name: "description",
        content:
          "MDR, endpoint, network and cloud security, IT support, backup, compliance, penetration testing and vCISO — all from one 24/7 partner.",
      },
      { property: "og:title", content: "Cybersecurity & IT Services | SecureMe247" },
      {
        property: "og:description",
        content: "Nine managed security and IT service lines backed by a 24/7 SOC.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive Security Services"
        intro="Complete IT and cybersecurity services from a single partner. Security operations, IT support, compliance, backup, and strategic leadership backed by our 24/7 team."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/50"
            >
              <span className="font-mono text-xs text-primary">{s.eyebrow}</span>
              <h2 className="mt-4 text-lg font-semibold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Explore {s.title}{" "}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}