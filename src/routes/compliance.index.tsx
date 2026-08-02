import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { complianceFrameworks } from "@/data/complianceFrameworks";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/compliance/")({
  head: () => ({
    meta: [
      { title: "Compliance Frameworks We Support | SecureMe247" },
      {
        name: "description",
        content:
          "SOC 2, HIPAA, PCI DSS, NIST CSF, ISO 27001, CMMC, GDPR, FedRAMP, HITRUST, DFARS, ITAR and GLBA compliance programs managed end to end.",
      },
      { property: "og:title", content: "Compliance Frameworks We Support | SecureMe247" },
      {
        property: "og:description",
        content: "Twelve regulatory frameworks mapped to your controls and kept audit-ready.",
      },
      { property: "og:url", content: `${SITE_URL}/compliance` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/compliance` }],
  }),
  component: ComplianceIndex,
});

function ComplianceIndex() {
  return (
    <>
      <PageHero
        eyebrow="Compliance & GRC"
        title="Compliance Frameworks We Support"
        intro="We map your controls, close the gaps, and keep evidence audit-ready year-round across the frameworks your customers and regulators demand."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {complianceFrameworks.map((f) => (
            <Link
              key={f.slug}
              to="/compliance/$slug"
              params={{ slug: f.slug }}
              className="group rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/50"
            >
              <span className="rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
                {f.title}
              </span>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Framework details{" "}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaSection title="Get audit-ready without the fire drill" />
    </>
  );
}