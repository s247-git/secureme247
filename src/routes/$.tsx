import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { legacyRedirect } from "@/lib/redirects";

export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const path = "/" + (params._splat ?? "");
    const target = legacyRedirect(path);
    if (target) throw redirect({ href: target, statusCode: 301 });
    throw notFound();
  },
  head: () => ({
    meta: [
      { title: "Page not found | SecureMe247" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => null,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">This page has moved or no longer exists</h1>
      <p className="mt-4 text-muted-foreground">
        Try our services, browse locations, or get in touch and we will point you the right way.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/services" className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
          View services
        </Link>
        <Link to="/locations" className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold">
          Browse locations
        </Link>
        <Link to="/contact" className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold">
          Contact us
        </Link>
      </div>
    </section>
  );
}
