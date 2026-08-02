import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CtaSection } from "@/components/site/CtaSection";
import { Prose } from "@/components/site/Prose";
import { blogPosts } from "@/data/blogPosts";
import { blogContent, cleanReadTime } from "@/lib/blogContent";
import { parseArticle } from "@/lib/articleContent";
import { ArticleToc } from "@/components/site/ArticleToc";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { legacyRedirect } from "@/lib/redirects";
import { SITE_URL, absoluteUrl, seoTitle } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) {
      const target = legacyRedirect(`/blog/${params.slug}`);
      if (target) throw redirect({ href: target, statusCode: 301 });
      throw notFound();
    }
    const article = parseArticle(blogContent[params.slug] ?? "");
    return { post, ...article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    }
    const { post, faqs } = loaderData;
    const title = seoTitle(post.title);
    const url = `${SITE_URL}/blog/${post.slug}`;
    const image = absoluteUrl(post.image);
    const scripts = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          image,
          datePublished: post.date,
          articleSection: post.category,
          mainEntityOfPage: url,
          author: { "@type": "Organization", name: "SecureMe247" },
          publisher: { "@type": "Organization", name: "SecureMe247", url: SITE_URL },
        }),
      },
    ];
    if (faqs.length > 0) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      });
    }
    return {
      meta: [
        { title },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts,
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, body, faqs, toc } = Route.useLoaderData();
  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 py-14">
        <article className="mx-auto max-w-3xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
        <div className="min-w-0">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-3.5" /> All insights
        </Link>

        <p className="mt-8 font-mono text-xs text-primary">{post.category}</p>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          {post.date} · {cleanReadTime(post.readTime)} · SecureMe247 Security Team
        </p>

        <img
          src={post.image}
          alt={post.title}
          className="mt-8 aspect-[16/9] w-full rounded-2xl border border-border object-cover"
        />

        <p className="mt-10 border-l-2 border-primary pl-5 text-lg leading-relaxed text-muted-foreground">
          {post.description}
        </p>

        {toc.length >= 3 && (
          <div className="mt-8 rounded-2xl border border-border bg-surface/60 p-5 lg:hidden">
            <ArticleToc items={toc} />
          </div>
        )}

        <div className="mt-4">
          <Prose markdown={body} />
        </div>

        <FaqAccordion items={faqs} />
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8">
            <ArticleToc items={toc} />
          </div>
        </aside>
        </article>
      </div>

      {related.length > 0 && (
        <section className="border-t border-border/60 bg-surface/40">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-2xl font-bold tracking-tight">More on {post.category}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
                >
                  <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}