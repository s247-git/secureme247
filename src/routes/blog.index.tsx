import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { blogPosts } from "@/data/blogPosts";
import { cleanReadTime } from "@/lib/blogContent";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Cybersecurity Insights & Threat Intelligence | SecureMe247" },
      {
        name: "description",
        content:
          "Practical guides on ransomware, zero trust, compliance, cloud security and incident response from the SecureMe247 security team.",
      },
      { property: "og:title", content: "Cybersecurity Insights & Threat Intelligence" },
      {
        property: "og:description",
        content: "Threat intelligence, compliance guides, and security best practices.",
      },
    ],
  }),
  component: BlogIndex,
});

const ALL = "All";

function BlogIndex() {
  const categories = [ALL, ...Array.from(new Set(blogPosts.map((p) => p.category))).sort()];
  const [active, setActive] = useState<string>(ALL);
  const posts = active === ALL ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Cybersecurity Insights & Threat Intelligence"
        intro="Field notes from our SOC: threat research, compliance walkthroughs, and the defensive playbooks we deploy for clients every day."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-lg border px-3.5 py-2 font-mono text-xs transition-colors ${
                active === c
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/50"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs text-primary">{post.category}</span>
                <h2 className="mt-3 text-base font-semibold leading-snug group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-auto pt-5 font-mono text-xs text-muted-foreground">
                  {post.date} · {cleanReadTime(post.readTime)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection title="Turn insight into protection" />
    </>
  );
}