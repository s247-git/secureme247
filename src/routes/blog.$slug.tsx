import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CtaSection } from "@/components/site/CtaSection";
import { Prose } from "@/components/site/Prose";
import { blogPosts } from "@/data/blogPosts";
import { blogContent, cleanReadTime } from "@/lib/blogContent";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post, body: blogContent[params.slug] ?? "" };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const title = `${post.title} | SecureMe247`;
    return {
      meta: [
        { title },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.image },
        { name: "twitter:image", content: post.image },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, body } = Route.useLoaderData();
  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 py-14">
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

        <div className="mt-4">
          <Prose markdown={body} />
        </div>
      </article>

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