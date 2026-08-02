import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SITE_URL, seoTitle } from "@/lib/seo";

const TITLE = "Terms of Service | SecureMe247";
const DESCRIPTION =
  "The terms that govern use of the SecureMe247 website and the delivery of our managed IT, cybersecurity, and compliance services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: seoTitle(TITLE) },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/terms` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        intro="These terms cover your use of this website and the general framework for our service engagements."
      />
      <section className="mx-auto max-w-3xl space-y-8 px-6 py-16 text-muted-foreground">
        <p className="text-sm">Last updated: August 2, 2026</p>

        <Block title="Use of this site">
          You may browse and share this site for lawful business purposes. You may not attempt to
          probe, scan, or test the security of our infrastructure, interfere with availability, or
          scrape content for resale.
        </Block>

        <Block title="Service agreements">
          Descriptions of services, response targets, and coverage windows on this site are summary
          information for evaluation. The binding scope, service levels, pricing, and remedies for a
          client engagement are set out in the signed master services agreement and its statements
          of work, which take precedence over anything published here.
        </Block>

        <Block title="No guarantee of outcomes">
          Cybersecurity reduces risk but cannot eliminate it. We deliver our services with
          reasonable skill and care and to the standards in your agreement. We do not warrant that
          any environment will be free from compromise, downtime, or data loss.
        </Block>

        <Block title="Intellectual property">
          All content on this site, including text, graphics, and reports we publish, belongs to
          SecureMe247. Deliverables produced for a client are governed by the ownership terms in
          that client's agreement.
        </Block>

        <Block title="Confidentiality">
          Information exchanged during assessments and engagements is treated as confidential. We
          sign an NDA on request before any technical discovery begins.
        </Block>

        <Block title="Governing law">
          These terms are governed by the laws of the Commonwealth of Virginia, without regard to
          conflict of law rules.
        </Block>

        <Block title="Contact">
          SecureMe247, 11890 Sunrise Valley Dr Ste 540, Reston, VA 20191. Phone (703) 755-0014.
          Email info@secureme247.com.
        </Block>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-foreground">{title}</h2>
      <p className="mt-3 leading-relaxed">{children}</p>
    </div>
  );
}
