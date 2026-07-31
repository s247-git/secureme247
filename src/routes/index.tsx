import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  ArrowRight,
  Radar,
  Laptop,
  Network,
  Headphones,
  Cloud,
  DatabaseBackup,
  FileCheck,
  Bug,
  UserCog,
  Cpu,
  BrainCircuit,
  BadgeCheck,
} from "lucide-react";
import { SocConsole } from "@/components/site/SocConsole";
import { services as serviceData } from "@/data/services";
import { blogPosts } from "@/data/blogPosts";
import { cleanReadTime } from "@/lib/blogContent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SecureMe247 | MSP & MSSP in Reston, VA" },
      {
        name: "description",
        content:
          "24/7/365 managed detection, IT support and compliance for 500+ businesses. Enterprise-grade cyber defense without enterprise complexity.",
      },
      { property: "og:title", content: "SecureMe247 | MSP & MSSP in Reston, VA" },
      {
        property: "og:description",
        content:
          "24/7 SOC monitoring, MDR, penetration testing, vCISO and compliance for growing businesses.",
      },
    ],
  }),
  component: Index,
});

const heroStats = [
  { value: "500+", label: "Businesses Protected" },
  { value: "<30min", label: "Mean Response Time" },
  { value: "24/7", label: "SOC Monitoring" },
  { value: "19", label: "Service Offerings" },
];

const frameworks = ["SOC 2", "HIPAA", "PCI DSS", "NIST CSF", "ISO 27001", "CMMC", "GDPR"];

const serviceIcons: Record<string, React.ElementType> = {
  mdr: Radar,
  endpoint: Laptop,
  network: Network,
  "it-support": Headphones,
  cloud: Cloud,
  "backup-dr": DatabaseBackup,
  compliance: FileCheck,
  "penetration-testing": Bug,
  vciso: UserCog,
};

const why = [
  {
    Icon: Cpu,
    title: "SOC-as-a-Service",
    body: "Get a fully staffed security operations center without the $2M+ annual overhead. Our experts become an extension of your team.",
  },
  {
    Icon: BrainCircuit,
    title: "AI-Powered Detection",
    body: "Machine learning models trained on millions of threat signals identify attacks that traditional tools miss — before they cause damage.",
  },
  {
    Icon: BadgeCheck,
    title: "Compliance-Ready",
    body: "SOC 2, HIPAA, PCI DSS, and ISO 27001 frameworks mapped to your controls, so audits stop being a fire drill.",
  },
];

const posts = blogPosts.slice(0, 3);

function Index() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="grid-backdrop relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute left-1/2 top-0 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <span className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary shadow-glow">
            <ShieldCheck className="size-7" />
          </span>
          <h1 className="mt-10 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            MSP &amp; MSSP Reston, VA:{" "}
            <span className="text-glow text-primary">Enterprise-Grade</span> Cyber Defense for Your
            Business
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground">
            24/7/365 managed security services that protect{" "}
            <strong className="text-foreground">500+ businesses</strong> from evolving threats.
            Enterprise-grade defense without enterprise complexity.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Get Free Security Assessment <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-lg border border-border bg-surface px-7 py-4 font-semibold transition-colors hover:border-primary/50"
            >
              View Services
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-border">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-2xl font-bold text-primary">{s.value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Frameworks */}
      <div className="border-b border-border/60 bg-surface/50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 py-6">
          <span className="label-mono mr-2 text-muted-foreground">Security Frameworks</span>
          {frameworks.map((f) => (
            <span
              key={f}
              className="rounded-md border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted-foreground"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Comprehensive Security Services
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Complete IT and cybersecurity services from a single partner. Security operations, IT
          support, compliance, backup, and strategic leadership backed by our 24/7 team.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.Icon className="size-5" />
                </span>
                <span className="font-mono text-xs text-primary">{s.tag}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>
      </section>

      <SocConsole />

      {/* Why */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Why SecureMe247</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          The security expertise of an enterprise team, delivered as a service your business can
          actually afford.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {why.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border bg-surface p-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <w.Icon className="size-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="border-t border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Latest Insights</h2>
              <p className="mt-4 text-muted-foreground">
                Stay ahead of emerging threats with expert analysis.
              </p>
            </div>
            <a href="#blog" className="text-sm font-semibold text-primary">
              View all posts →
            </a>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/50"
              >
                <p className="label-mono text-muted-foreground">{p.date}</p>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="grid-backdrop border-t border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Don't Wait for a Breach</h2>
          <p className="mt-5 text-muted-foreground">
            Get your free security assessment today. No commitment. No sales pressure. Just
            actionable insights to protect your business.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@secureme247.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Get Free Security Assessment <ArrowRight className="size-4" />
            </a>
            <a
              href="tel:+17035550147"
              className="inline-flex items-center rounded-lg border border-border bg-surface px-7 py-4 font-semibold transition-colors hover:border-primary/50"
            >
              Talk to an Analyst
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-surface/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-10">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="size-4" />
            </span>
            <span className="text-sm font-semibold">
              Secure<span className="text-primary">Me</span>247 · Reston, VA
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SecureMe247. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
