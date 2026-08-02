import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { SectionBlocks } from "@/components/site/SectionBlocks";
import { complianceFrameworks } from "@/data/complianceFrameworks";
import { SITE_URL, seoTitle } from "@/lib/seo";

export const Route = createFileRoute("/compliance/$slug")({
  loader: ({ params }) => {
    const framework = complianceFrameworks.find((f) => f.slug === params.slug);
    if (!framework) throw notFound();
    return { framework };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Framework not found" }, { name: "robots", content: "noindex" }] };
    }
    const { framework } = loaderData;
    const title = seoTitle(`${framework.title} Compliance`);
    const url = `${SITE_URL}/compliance/${framework.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: framework.description },
        { property: "og:title", content: title },
        { property: "og:description", content: framework.description },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: FrameworkDetail,
});

function FrameworkDetail() {
  const { framework } = Route.useLoaderData();
  const others = complianceFrameworks.filter((f) => f.slug !== framework.slug);

  return (
    <>
      <PageHero
        eyebrow="Compliance Framework"
        title={framework.title}
        intro={framework.intro}
        ctaLabel={`Start your ${framework.title} journey`}
      />
      <SectionBlocks sections={framework.sections} />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Other frameworks</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((f) => (
            <Link
              key={f.slug}
              to="/compliance/$slug"
              params={{ slug: f.slug }}
              className="rounded-lg border border-border bg-surface px-4 py-2 font-mono text-xs transition-colors hover:border-primary/50 hover:text-primary"
            >
              {f.title}
            </Link>
          ))}
        </div>
      </section>

      <CtaSection title={`Need ${framework.title} help?`} />
    </>
  );
}