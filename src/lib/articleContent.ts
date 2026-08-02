export type TocItem = { id: string; text: string; level: 2 | 3 };
export type FaqItem = { question: string; answer: string };

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function headingText(line: string) {
  return line
    .replace(/^#{2,4}\s+/, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\\([^\\])/g, "$1")
    .trim();
}

/**
 * Splits a scraped article body into:
 *  - body: the main markdown (trailing duplicate CTA/related blocks removed)
 *  - faqs: structured question/answer pairs
 *  - toc:  h2/h3 headings of the body
 */
export function parseArticle(markdown: string) {
  const lines = markdown.split("\n");

  // Drop trailing marketing/CTA sections that duplicate on-page components.
  const cutRe = /^##\s+(Need Security Expertise|Related Services|Ready to|Get Started|Talk to)/i;
  const cutIndex = lines.findIndex((l) => cutRe.test(l));
  const trimmed = cutIndex > -1 ? lines.slice(0, cutIndex) : lines;

  // Extract the FAQ section.
  const faqRe = /^##\s+(Frequently Asked Questions|FAQs?)\b/i;
  const faqIndex = trimmed.findIndex((l) => faqRe.test(l));
  const bodyLines = faqIndex > -1 ? trimmed.slice(0, faqIndex) : trimmed;
  const faqLines = faqIndex > -1 ? trimmed.slice(faqIndex + 1) : [];

  const faqs: FaqItem[] = [];
  let current: FaqItem | null = null;
  const junkRe = /^(was this article helpful|share this|related (posts|articles|services)|about the author|tags)\b/i;
  for (const raw of faqLines) {
    const line = raw.trim();
    if (!line) continue;
    if (junkRe.test(line.replace(/^#{2,4}\s+|[*_]/g, ""))) break;
    if (/^#{2,4}\s+/.test(line)) {
      const text = headingText(line);
      if (text.endsWith("?")) {
        current = { question: text, answer: "" };
        faqs.push(current);
      }
      continue;
    }
    const plain = line.replace(/^\*\*(.+)\*\*:?$/, "$1").trim();
    if (plain.endsWith("?") && plain.length < 200) {
      current = { question: plain, answer: "" };
      faqs.push(current);
    } else if (current) {
      current.answer = current.answer ? `${current.answer}\n\n${line}` : line;
    }
  }

  const toc: TocItem[] = [];
  let inFence = false;
  for (const line of bodyLines) {
    if (/^```/.test(line)) inFence = !inFence;
    if (inFence) continue;
    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (!match) continue;
    const text = headingText(line);
    if (!text) continue;
    toc.push({ id: slugifyHeading(text), text, level: (match[1]?.length ?? 2) as 2 | 3 });
  }
  const validFaqs = faqs.filter((f) => f.answer.trim().length > 0);
  if (validFaqs.length > 0) {
    toc.push({ id: "faq", text: "Frequently Asked Questions", level: 2 });
  }

  return {
    body: bodyLines.join("\n").trim(),
    faqs: validFaqs,
    toc,
  };
}
