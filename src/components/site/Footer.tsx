import { Link } from "@tanstack/react-router";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="size-4" />
            </span>
            <span className="font-bold">
              Secure<span className="text-primary">Me</span>247
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Enterprise-grade managed security and IT services. 24/7/365 SOC coverage for 500+
            businesses nationwide.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" />
              <a href="tel:+17037550014" className="hover:text-primary">
                (703) 755-0014
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" />
              <a href="mailto:info@secureme247.com" className="hover:text-primary">
                info@secureme247.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              11890 Sunrise Valley Dr Ste 540, Reston, VA 20191
            </li>
          </ul>
        </div>

        <FooterCol title="Services">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {s.title}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Industries">
          {industries.slice(0, 8).map((i) => (
            <li key={i.slug}>
              <Link
                to="/industries/$slug"
                params={{ slug: i.slug }}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {i.title}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Company">
          <li>
            <Link to="/about" className="text-muted-foreground hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-muted-foreground hover:text-primary">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/compliance" className="text-muted-foreground hover:text-primary">
              Compliance
            </Link>
          </li>
          <li>
            <Link to="/locations" className="text-muted-foreground hover:text-primary">
              Locations
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </li>
        </FooterCol>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SecureMe247. All rights reserved. · MSP &amp; MSSP based
            in Reston, Virginia.
          </p>
          <p className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label-mono text-muted-foreground">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">{children}</ul>
    </div>
  );
}