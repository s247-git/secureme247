import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ShieldCheck, Menu, X } from "lucide-react";

const links = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Compliance", to: "/compliance" },
  { label: "Locations", to: "/locations" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow-sm">
            <ShieldCheck className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight">
              Secure<span className="text-primary">Me</span>247
            </span>
            <span className="label-mono block text-muted-foreground">Cyber Defense</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            <ShieldCheck className="size-4" />
            Free Assessment
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border p-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-6 py-4 lg:hidden">
          <ul className="space-y-1">
            {[...links, { label: "Contact", to: "/contact" as const }].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-surface hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}