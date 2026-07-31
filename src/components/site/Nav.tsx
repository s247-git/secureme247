import { ShieldCheck } from "lucide-react";

const links = ["Services", "Locations", "About", "Blog", "Contact"];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow-sm">
            <ShieldCheck className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight">
              Secure<span className="text-primary">Me</span>247
            </span>
            <span className="label-mono block text-muted-foreground">Cyber Defense</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:scale-[1.02] sm:inline-flex"
        >
          <ShieldCheck className="size-4" />
          Free Assessment
        </a>
      </div>
    </header>
  );
}