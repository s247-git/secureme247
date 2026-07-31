import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  intro,
  ctaLabel = "Get Free Security Assessment",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="grid-backdrop relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 -translate-y-2/3 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        {eyebrow && <p className="label-mono text-primary">{eyebrow}</p>}
        <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {intro && <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">{intro}</p>}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            {ctaLabel} <ArrowRight className="size-4" />
          </Link>
          <a
            href="tel:+17037550014"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50"
          >
            <Phone className="size-4 text-primary" /> (703) 755-0014
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
          <span>500+ Businesses Protected</span>
          <span>Based in Reston, VA</span>
          <span>24/7/365 Operations</span>
          <span>NDA Upon Request</span>
        </div>
      </div>
    </section>
  );
}