import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { SectionBlocks } from "@/components/site/SectionBlocks";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { services } from "@/data/services";
import { serviceContent, type ServiceContent } from "@/data/serviceContent";
import { legacyRedirect } from "@/lib/redirects";
import { SITE_URL, seoTitle } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) {
      const target = legacyRedirect(`/services/${params.slug}`);
      if (target) throw redirect({ href: target, statusCode: 301 });
      throw notFound();
    }
    return { service, content: serviceContent[service.slug] ?? null };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const { service, content } = loaderData;
    const title = seoTitle(service.title);
    const url = `${SITE_URL}/services/${service.slug}`;
    const description = content?.h1Support ?? service.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            url,
            serviceType: service.eyebrow,
            areaServed: "United States",
            provider: { "@type": "Organization", name: "SecureMe247", url: SITE_URL },
          }),
        },
        ...(content && content.faqs.length
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: content.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.question,
                    acceptedAnswer: { "@type": "Answer", text: f.answer },
                  })),
                }),
              },
            ]
          : []),
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const content: ServiceContent | null = serviceContent[service.slug] ?? null;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero eyebrow={service.eyebrow} title={service.title} intro={service.tagline} />

      {content ? (
        <>
          <section className="mx-auto max-w-3xl px-6 py-16">
            <p className="text-xl font-medium leading-relaxed text-foreground">
              {content.h1Support}
            </p>
            <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
              {content.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section className="border-y border-border/60 bg-surface/40">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4">
              {content.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-mono text-3xl font-bold text-primary">{s.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl font-bold tracking-tight">{content.signsHeading}</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              If two or more of these are true, this is worth a conversation.
            </p>
            <ul className="mt-10 grid gap-3 md:grid-cols-2">
              {content.signs.map((sign) => (
                <li
                  key={sign}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4"
                >
                  <AlertTriangle className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{sign}</span>
                </li>
              ))}
            </ul>
          </section>

          <SectionBlocks sections={[content.deepDive]} />

          <section className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl font-bold tracking-tight">How we deliver it</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A repeatable process, not a custom experiment on your business.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {content.process.map((step) => (
                <div key={step.title} className="rounded-2xl border border-border bg-surface p-7">
                  <h3 className="text-base font-semibold text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          <SectionBlocks sections={[content.mistakes]} />

          <section className="mx-auto max-w-3xl px-6 pb-4">
            <FaqAccordion
              items={content.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
            />
          </section>
        </>
      ) : (
        <SectionBlocks sections={service.sections} />
      )}

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