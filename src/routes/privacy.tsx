import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SITE_URL, seoTitle } from "@/lib/seo";

const TITLE = "Privacy Policy | SecureMe247";
const DESCRIPTION =
  "How SecureMe247 collects, uses, protects, and retains information from visitors and clients of our managed IT and cybersecurity services.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: seoTitle(TITLE) },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/privacy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This policy explains what information SecureMe247 collects, why we collect it, and how we protect it."
      />
      <section className="mx-auto max-w-3xl space-y-8 px-6 py-16 text-muted-foreground">
        <p className="text-sm">Last updated: August 2, 2026</p>

        <Block title="Information we collect">
          We collect the details you submit through our contact and assessment forms, such as your
          name, business email, phone number, company, and the description of what you need help
          with. We also collect standard technical data such as IP address, browser type, and pages
          visited so we can keep the site secure and understand which content is useful.
        </Block>

        <Block title="How we use it">
          We use your information to respond to your request, prepare an IT or security assessment,
          deliver contracted services, and send operational messages about work in progress. We do
          not sell your information, and we do not share it with third parties for their own
          marketing.
        </Block>

        <Block title="Service providers">
          We use vetted providers for website hosting, email delivery, and customer records. These
          providers process data only on our instructions and under confidentiality obligations.
        </Block>

        <Block title="Client data and confidentiality">
          Data belonging to client environments we monitor or manage is handled under the terms of
          the applicable service agreement, including any NDA, and is segregated per client. We
          apply least-privilege access, encryption in transit and at rest, logging, and multi-factor
          authentication for all administrative access.
        </Block>

        <Block title="Retention">
          Inquiry records are retained for up to 24 months unless you ask us to remove them sooner.
          Client records are retained for the duration of the engagement plus any period required by
          contract, regulation, or applicable compliance framework.
        </Block>

        <Block title="Your choices">
          You can request a copy of the information we hold about you, ask us to correct it, or ask
          us to delete it. Email info@secureme247.com and we will respond within 30 days.
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
