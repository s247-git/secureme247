import { Check } from "lucide-react";

type Item = { readonly title: string; readonly body: string };
type Section = { readonly heading: string; readonly intro: string; readonly items: readonly Item[] };

export function SectionBlocks({ sections }: { sections: readonly Section[] }) {
  return (
    <>
      {sections.map((section, idx) => {
        const detailed = section.items.some((i) => i.body);
        return (
          <section
            key={section.heading + idx}
            className={idx % 2 === 1 ? "border-y border-border/60 bg-surface/40" : ""}
          >
            <div className="mx-auto max-w-7xl px-6 py-16">
              <h2 className="text-3xl font-bold tracking-tight">{section.heading}</h2>
              {section.intro && (
                <p className="mt-4 max-w-2xl text-muted-foreground">{section.intro}</p>
              )}

              {detailed ? (
                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border bg-surface p-7"
                    >
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      {item.body && (
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="mt-10 grid gap-3 md:grid-cols-2">
                  {section.items.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{item.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}