import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { industries } from "@/data/industries";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries We Protect | SecureMe247" },
      {
        name: "description",
        content:
          "Security and IT built for healthcare, financial services, government contractors, legal, manufacturing, education, nonprofit, retail and more.",
      },
      { property: "og:title", content: "Industries We Protect | SecureMe247" },
      {
        property: "og:description",
        content: "Industry-specific cybersecurity programs mapped to the regulations you face.",
      },
    ],
  }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Security Built for Your Industry"
        intro="Every sector faces different threats, regulations, and operational realities. We tailor the controls, the compliance mapping, and the response playbooks to yours."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link
              key={i.slug}
              to="/industries/$slug"
              params={{ slug: i.slug }}
              className="group rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/50"
            >
              <h2 className="text-lg font-semibold">{i.title}</h2>
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                {i.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Explore{" "}
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