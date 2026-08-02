import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Prose } from "@/components/site/Prose";
import type { FaqItem } from "@/lib/articleContent";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 id="faq" className="scroll-mt-24 text-2xl font-bold tracking-tight sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="mt-6 w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`} className="border-border">
            <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <div className="[&_p:first-child]:mt-0">
                <Prose markdown={item.answer} />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
