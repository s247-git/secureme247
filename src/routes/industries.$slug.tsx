import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { SectionBlocks } from "@/components/site/SectionBlocks";
import { industries } from "@/data/industries";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = industries.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Industry not found" }, { name: "robots", content: "noindex" }] };
    }
    const { industry } = loaderData;
    const title = `${industry.title} | SecureMe247`;
    return {
      meta: [
        { title },
        { name: "description", content: industry.description },
        { property: "og:title", content: title },
        { property: "og:description", content: industry.description },
      ],
    };
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { industry } = Route.useLoaderData();
  const others = industries.filter((i) => i.slug !== industry.slug);
  const frameworks: readonly string[] =
    (industry as { frameworks?: readonly string[] }).frameworks ?? [];

  return (
    <>
      <PageHero eyebrow="Industry Focus" title={industry.title} intro={industry.intro} />

      {frameworks.length > 0 && (
        <section className="border-b border-border/60 bg-surface/40">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <p className="label-mono text-muted-foreground">Frameworks that apply</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {frameworks.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2 font-mono text-xs"
                >
                  <ShieldCheck className="size-3.5 text-primary" />
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <SectionBlocks sections={industry.sections} />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Other industries we serve</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((i) => (
            <Link
              key={i.slug}
              to="/industries/$slug"
              params={{ slug: i.slug }}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
            >
              {i.title}
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}