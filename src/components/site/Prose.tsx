import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "@tanstack/react-router";

export function Prose({ markdown }: { markdown: string }) {
  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-14 scroll-mt-24 text-2xl font-bold tracking-tight sm:text-3xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-10 text-xl font-semibold tracking-tight">{children}</h3>
          ),
          h4: ({ children }) => <h4 className="mt-8 text-lg font-semibold">{children}</h4>,
          p: ({ children }) => (
            <p className="mt-5 leading-relaxed text-muted-foreground">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mt-5 space-y-2.5 pl-5 text-muted-foreground [&>li]:list-disc [&>li]:marker:text-primary">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-5 list-decimal space-y-2.5 pl-5 text-muted-foreground marker:text-primary">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="mt-6 border-l-2 border-primary bg-surface/60 px-5 py-4 text-muted-foreground italic">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-sm text-primary">
              {children}
            </code>
          ),
          table: ({ children }) => (
            <div className="mt-6 overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-border bg-surface px-4 py-3 font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-border/60 px-4 py-3 text-muted-foreground">
              {children}
            </td>
          ),
          hr: () => <hr className="my-12 border-border" />,
          a: ({ href, children }) =>
            href && href.startsWith("/") ? (
              <Link to={href} className="font-medium text-primary underline-offset-4 hover:underline">
                {children}
              </Link>
            ) : (
              <a
                href={href}
                className="font-medium text-primary underline-offset-4 hover:underline"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
          img: ({ src, alt }) => (
            <img
              src={typeof src === "string" ? src : ""}
              alt={alt ?? ""}
              loading="lazy"
              className="mt-8 w-full rounded-xl border border-border"
            />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}