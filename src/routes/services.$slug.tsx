import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { SectionBlocks } from "@/components/site/SectionBlocks";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    const title = `${service.title} | SecureMe247`;
    return {
      meta: [
        { title },
        { name: "description", content: service.description },
        { property: "og:title", content: title },
        { property: "og:description", content: service.description },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero eyebrow={service.eyebrow} title={service.title} intro={service.tagline} />
      <SectionBlocks sections={service.sections} />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Related services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {related.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="rounded-xl border border-border bg-surface px-5 py-4 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </section>

      <CtaSection title={`Ready to deploy ${service.title}?`} />
    </>
  );
}