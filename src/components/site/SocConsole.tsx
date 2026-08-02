import { ShieldCheck, Sparkles, AlertTriangle, Globe } from "lucide-react";

const stats = [
  { value: "14,283", label: "Threats Blocked", sub: "this month" },
  { value: "<30min", label: "Avg Response Time", sub: "24/7 coverage" },
  { value: "500+", label: "Protected Devices", sub: "and growing" },
];

const detections = [
  { Icon: ShieldCheck, text: "Phishing campaign blocked - 247 endpoints", time: "just now" },
  { Icon: Sparkles, text: "AI threat rules updated - 12 new signatures", time: "3m ago" },
  {
    Icon: AlertTriangle,
    text: "Critical vuln scan complete - 0 critical, 3 high",
    time: "12m ago",
  },
  { Icon: Globe, text: "Geo-block rule deployed - 14 countries blocked", time: "1h ago" },
];

export function SocConsole() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-2">
        <div>
          <p className="label-mono text-primary">How It Works</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            A Look Inside a SOC
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            This is what our security analysts see 24/7: the live operations dashboard monitoring
            threats across every client environment. When you partner with SecureMe247,{" "}
            <strong className="text-foreground">your business is watched by our team</strong>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-primary">
              <span className="size-2 animate-pulse-dot rounded-full bg-primary" />
              All Systems Secure
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground">
              Response Time <span className="font-mono text-foreground">&lt;30min</span>
            </span>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-lg border border-primary/50 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            Schedule a live demo
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-glow-sm">
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <span className="label-mono text-muted-foreground">SecureMe247 · SOC Console</span>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-primary">
              <span className="size-2 animate-pulse-dot rounded-full bg-primary" /> Live
            </span>
          </div>

          <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-5">
                <p className="font-mono text-xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 text-xs font-medium">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="px-5 py-4">
            <p className="label-mono text-muted-foreground">Recent Detections</p>
            <ul className="mt-3 space-y-2">
              {detections.map((d) => (
                <li
                  key={d.text}
                  className="flex items-center gap-3 rounded-lg bg-surface-2 px-3 py-3 text-sm"
                >
                  <d.Icon className="size-4 shrink-0 text-primary" />
                  <span className="flex-1 text-muted-foreground">{d.text}</span>
                  <span className="font-mono text-xs text-muted-foreground">{d.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between border-t border-border px-5 py-4">
            <span className="text-sm text-muted-foreground">Average Incident Response Time</span>
            <span className="font-mono text-lg font-bold text-primary">14.8 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}