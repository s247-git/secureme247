import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaSection({
  title = "Don't Wait for a Breach",
  body = "Get your free security assessment today. No commitment. No sales pressure. Just actionable insights to protect your business.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="grid-backdrop border-t border-border/60">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-5 text-muted-foreground">{body}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            Get Free Security Assessment <ArrowRight className="size-4" />
          </Link>
          <a
            href="tel:+17037550014"
            className="inline-flex items-center rounded-lg border border-border bg-surface px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50"
          >
            Talk to an Analyst
          </a>
        </div>
      </div>
    </section>
  );
}