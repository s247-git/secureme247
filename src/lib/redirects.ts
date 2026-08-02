import { cities, states } from "@/data/locations";
import { localPages } from "@/data/localPages";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blogPosts";

const citySlugs = new Set<string>(cities.map((c) => c.slug));
const localSlugs = new Set<string>(localPages.map((p) => p.slug));
const serviceSlugs = new Set<string>(services.map((s) => s.slug));
const blogSlugs = new Set<string>(blogPosts.map((p) => p.slug));
const stateSlugs = new Set<string>(states.map((s) => s.slug));

/** Old blog slugs from the previous site that no longer exist. */
export const blogAliases: Record<string, string> = {
  "managed-it-services-fairfax-va": "managed-it-services-reston-va-2026",
  "cmmc-compliance-checklist": "cmmc-compliance-guide-2026",
  "computer-support-fairfax-va-2026": "computer-support-reston-va-2026",
  "hipaa-compliance-cybersecurity": "hipaa-compliance-cybersecurity-guide",
  "ransomware-protection-guide-2026": "ransomware-defense-guide",
  "trusted-it-partners-northern-virginia": "northern-virginia-it-support-guide-2026",
  "soc-2-compliance-checklist": "soc2-compliance-checklist",
  "zero-trust-architecture": "zero-trust-architecture-guide",
};

/** Old service slugs from the previous site mapped to current destinations. */
export const serviceAliases: Record<string, string> = {
  "managed-security": "/services/mdr",
  "soc-as-a-service": "/services/mdr",
  "cloud-security": "/services/cloud",
  "endpoint-protection": "/services/endpoint",
  "network-security": "/services/network",
  "penetration-testing": "/services/pentest",
  "backup-disaster-recovery": "/services/backup-dr",
  "hipaa-compliance": "/compliance/hipaa",
  "cmmc-compliance": "/compliance/cmmc",
  "soc-2-compliance": "/compliance/soc-2",
  "pci-compliance": "/compliance/pci-dss",
  "virtual-ciso": "/services/vciso",
  "it-services": "/services/it-support",
  "managed-it": "/services/it-support",
};

/** Standalone legacy paths that have no direct equivalent. */
const staticRedirects: Record<string, string> = {
  "/book": "/contact",
  "/booking": "/contact",
  "/support": "/contact",
  "/get-started": "/contact",
  "/quote": "/contact",
  "/pricing": "/services",
  "/solutions": "/services",
  "/breadcrumbs": "/",
  "/home": "/",
  "/index": "/",
  "/local": "/locations",
  "/insights": "/blog",
  "/news": "/blog",
  "/resources": "/blog",
  "/careers": "/about",
  "/team": "/about",
  "/company": "/about",
};

function citySlugFor(raw: string): string | null {
  if (citySlugs.has(raw)) return raw;
  const stripped = raw.replace(/-(va|md|dc)$/, "");
  if (citySlugs.has(stripped)) return stripped;
  return null;
}

/**
 * Resolve a legacy URL from the previous site to its current path.
 * Returns null when there is no known mapping.
 */
export function legacyRedirect(pathname: string): string | null {
  const clean = ("/" + pathname.replace(/^\/+/, "").replace(/\/+$/, "")).toLowerCase();
  if (clean === "/") return null;

  if (staticRedirects[clean]) return staticRedirects[clean];

  const parts = clean.slice(1).split("/");
  const seg = (i: number): string => parts[i] ?? "";

  // /{city} -> /cybersecurity/{city}
  if (parts.length === 1) {
    const city = citySlugFor(seg(0));
    if (city) return `/cybersecurity/${city}`;
    if (stateSlugs.has(seg(0))) return `/locations/${seg(0)}`;
    return null;
  }

  if (parts.length === 2) {
    const first = seg(0);
    const second = seg(1);

    // /local/{slug} -> /{slug}
    if (first === "local") {
      if (localSlugs.has(second)) return `/${second}`;
      const city = citySlugFor(second);
      if (city) return `/cybersecurity/${city}`;
      return "/locations";
    }

    // /reston/{service} and other /{city}/{service} pairs
    if (citySlugFor(first) && serviceSlugs.has(second)) return `/services/${second}`;
    if (citySlugFor(first) && serviceAliases[second]) return serviceAliases[second];

    if (first === "services") {
      if (serviceSlugs.has(second)) return null;
      if (serviceAliases[second]) return serviceAliases[second];
      const city = citySlugFor(second);
      if (city) return `/cybersecurity/${city}`;
      if (stateSlugs.has(second)) return `/locations/${second}`;
      return "/services";
    }

    if (first === "blog") {
      if (blogSlugs.has(second)) return null;
      if (blogAliases[second]) return `/blog/${blogAliases[second]}`;
      return "/blog";
    }

    if (first === "cybersecurity") {
      const city = citySlugFor(second);
      if (city && city !== second) return `/cybersecurity/${city}`;
      return null;
    }

    if (first === "locations" && !stateSlugs.has(second)) {
      const city = citySlugFor(second);
      if (city) return `/cybersecurity/${city}`;
    }
  }

  return null;
}
