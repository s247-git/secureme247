import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { complianceFrameworks } from "@/data/complianceFrameworks";
import { localPages } from "@/data/localPages";
import { blogPosts } from "@/data/blogPosts";
import { states, cities } from "@/data/locations";
import { SITE_URL } from "@/lib/seo";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/industries", changefreq: "monthly", priority: "0.8" },
          { path: "/compliance", changefreq: "monthly", priority: "0.8" },
          { path: "/locations", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/about", changefreq: "yearly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" },
          ...services.map((s) => ({ path: `/services/${s.slug}`, priority: "0.8" as const })),
          ...industries.map((i) => ({ path: `/industries/${i.slug}`, priority: "0.7" as const })),
          ...complianceFrameworks.map((f) => ({
            path: `/compliance/${f.slug}`,
            priority: "0.7" as const,
          })),
          ...blogPosts.map((p) => ({ path: `/blog/${p.slug}`, priority: "0.6" as const })),
          ...states.map((s) => ({ path: `/locations/${s.slug}`, priority: "0.5" as const })),
          ...cities.map((c) => ({ path: `/cybersecurity/${c.slug}`, priority: "0.5" as const })),
          ...localPages.map((p) => ({ path: `/${p.slug}`, priority: "0.7" as const })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${SITE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
