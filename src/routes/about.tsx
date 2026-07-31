import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Clock, Users, Target } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SecureMe247 | MSP & MSSP in Reston, Virginia" },
      {
        name: "description",
        content:
          "SecureMe247 is a Reston, Virginia MSP and MSSP protecting 500+ businesses with 24/7 SOC monitoring, managed IT and compliance expertise.",
      },
      { property: "og:title", content: "About SecureMe247" },
      {
        property: "og:description",
        content: "One partner for IT operations and cyber defense, based in Reston, Virginia.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { icon: Users, value: "500+", label: "Businesses protected" },
  { icon: Clock, value: "24/7/365", label: "SOC coverage" },
  { icon: Target, value: "30 min", label: "Average response" },
  { icon: ShieldCheck, value: "12", label: "Frameworks supported" },
];

const values = [
  {
    title: "Both MSP and MSSP",
    body: "Most providers do IT or security. We do both, so nothing falls between the help desk and the SOC.",
  },
  {
    title: "Named engineers",
    body: "You work with people who know your environment. No ticket roulette, no rotating vendors.",
  },
  {
    title: "Flat, honest pricing",
    body: "One monthly price. No hidden tiers, no surprise per-incident invoices, no upsell pressure.",
  },
  {
    title: "Compliance in the DNA",
    body: "Headquartered in Northern Virginia, we live and breathe CMMC, HIPAA, SOC 2 and PCI DSS every day.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Enterprise Cyber Defense Without Enterprise Complexity"
        intro="SecureMe247 is a managed IT and cybersecurity provider headquartered in Reston, Virginia. We combine a 24/7 security operations center with hands-on IT support so growing organizations get Fortune 500 protection at a price that makes sense."
      />

      <section className="border-b border-border/60 bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-surface p-6">
              <s.icon className="size-5 text-primary" />
              <p className="mt-4 text-3xl font-bold tracking-tight">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">What makes us different</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-surface p-7">
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection title="Let's talk about your risk" />
    </>
  );
}