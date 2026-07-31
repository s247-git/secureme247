import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { SectionBlocks } from "@/components/site/SectionBlocks";
import { localPages } from "@/data/localPages";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const page = localPages.find((p) => p.slug === params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] };
    }
    const { page } = loaderData;
    return {
      meta: [
        { title: `${page.title} | SecureMe247` },
        { name: "description", content: page.description },
        { property: "og:title", content: page.title },
        { property: "og:description", content: page.description },
      ],
    };
  },
  component: LocalPage,
});

function LocalPage() {
  const { page } = Route.useLoaderData();
  const others = localPages.filter((p) => p.slug !== page.slug);

  return (
    <>
      <PageHero eyebrow="Northern Virginia" title={page.title} intro={page.intro} />
      <SectionBlocks sections={page.sections} />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Related local pages</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/$slug"
              params={{ slug: p.slug }}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
            >
              {p.title}
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}