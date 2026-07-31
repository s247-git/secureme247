import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { states, cities, type City } from "@/data/locations";

export const Route = createFileRoute("/locations/$state")({
  loader: ({ params }) => {
    const state = states.find((s) => s.slug === params.state);
    if (!state) throw notFound();
    return { state, list: cities.filter((c) => c.stateSlug === state.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "State not found" }, { name: "robots", content: "noindex" }] };
    }
    const { state, list } = loaderData;
    const title = `Managed IT & Cybersecurity in ${state.name} | SecureMe247`;
    const description = `Managed security, IT support and compliance services across ${list.length} cities in ${state.name}, delivered 24/7 by SecureMe247.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: StatePage,
});

function StatePage() {
  const { state, list } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={`${state.name} Coverage`}
        title={`Managed IT & Cybersecurity in ${state.name}`}
        intro={`24/7 SOC monitoring, MDR, IT support and compliance for businesses across ${list.length} ${state.name} cities.`}
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight">Cities we serve in {state.name}</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((c: City) => (
            <Link
              key={c.slug}
              to="/cybersecurity/$city"
              params={{ city: c.slug }}
              className="rounded-xl border border-border bg-surface px-5 py-4 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              {c.name}, {c.stateCode}
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <Link to="/locations" className="font-mono text-xs text-primary hover:underline">
            ← All states
          </Link>
        </div>
      </section>
      <CtaSection />
    </>
  );
}