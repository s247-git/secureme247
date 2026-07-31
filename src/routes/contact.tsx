import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { services } from "@/data/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SecureMe247 | Free Security Assessment" },
      {
        name: "description",
        content:
          "Talk to a SecureMe247 security analyst. Free assessment, no commitment. Call (703) 755-0014 or send us a message from Reston, Virginia.",
      },
      { property: "og:title", content: "Contact SecureMe247" },
      {
        property: "og:description",
        content: "Get a free, no-commitment security assessment from our Reston, VA team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="label-mono text-primary">Contact</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight">
          Get Your Free Security Assessment
        </h1>
        <p className="mt-5 text-muted-foreground">
          Tell us what you're worried about. A senior analyst — not a sales rep — will review your
          environment and share findings. No commitment, NDA on request.
        </p>

        <ul className="mt-10 space-y-5 text-sm">
          <ContactItem icon={Phone} label="Phone">
            <a href="tel:+17037550014" className="hover:text-primary">
              (703) 755-0014
            </a>
          </ContactItem>
          <ContactItem icon={Mail} label="Email">
            <a href="mailto:info@secureme247.com" className="hover:text-primary">
              info@secureme247.com
            </a>
          </ContactItem>
          <ContactItem icon={MapPin} label="Headquarters">
            11890 Sunrise Valley Dr, Suite 300, Reston, VA 20191
          </ContactItem>
          <ContactItem icon={Clock} label="SOC Hours">
            24/7/365 monitoring · Office Mon–Fri, 8am–6pm ET
          </ContactItem>
        </ul>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
            (e.target as HTMLFormElement).reset();
            toast.success("Request received — an analyst will reach out within one business day.");
          }, 600);
        }}
        className="rounded-2xl border border-border bg-surface p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" required />
          <Field label="Work email" name="email" type="email" required />
          <Field label="Company" name="company" />
          <Field label="Phone" name="phone" type="tel" />
        </div>

        <label className="mt-5 block">
          <span className="label-mono text-muted-foreground">Interested in</span>
          <select
            name="service"
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          >
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
        </label>

        <label className="mt-5 block">
          <span className="label-mono text-muted-foreground">How can we help?</span>
          <textarea
            name="message"
            rows={5}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            placeholder="Tell us about your environment, compliance deadlines, or recent incidents."
          />
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60"
        >
          <ShieldCheck className="size-4" />
          {submitting ? "Sending…" : "Request Free Assessment"}
        </button>
        <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
          We respond within one business day.
        </p>
      </form>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface">
        <Icon className="size-4 text-primary" />
      </span>
      <span>
        <span className="label-mono block text-muted-foreground">{label}</span>
        <span className="mt-1 block">{children}</span>
      </span>
    </li>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="label-mono text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}