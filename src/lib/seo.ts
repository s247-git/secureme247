export const SITE_URL = "https://secureme247.com";

export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Keep titles under the ~60 char SERP truncation limit. */
export function seoTitle(title: string, suffix = " | SecureMe247", max = 60) {
  const full = `${title}${suffix}`;
  if (full.length <= max) return full;
  if (title.length <= max) return title;
  const cut = title.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 30 ? cut.slice(0, lastSpace) : cut).replace(/[\s,:–-]+$/, "")}…`;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SecureMe247",
  url: SITE_URL,
  telephone: "+1-703-755-0014",
  email: "info@secureme247.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11890 Sunrise Valley Dr",
    addressLocality: "Reston",
    addressRegion: "VA",
    postalCode: "20191",
    addressCountry: "US",
  },
  description:
    "24/7 managed security and IT services: SOC monitoring, MDR, compliance and IT support from Reston, Virginia.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SecureMe247",
  url: SITE_URL,
};
