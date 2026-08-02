#!/usr/bin/env node
/**
 * Post-deploy check: fetch the sitemap, request every <loc> URL and report
 * any that do not return HTTP 200.
 *
 * Usage:
 *   node scripts/check-sitemap.mjs [baseUrl]
 *   SITE_URL=https://example.com node scripts/check-sitemap.mjs
 *
 * Env options:
 *   CONCURRENCY   parallel requests (default 10)
 *   TIMEOUT_MS    per-request timeout (default 20000)
 *   RETRIES       retries per failing URL (default 1)
 *
 * Exits with code 1 if any URL fails, so CI / post-deploy hooks catch it.
 */

const BASE_URL = (process.argv[2] || process.env.SITE_URL || "https://secureme247.com").replace(/\/$/, "");
const SITEMAP_URL = process.env.SITEMAP_URL || `${BASE_URL}/sitemap.xml`;
const CONCURRENCY = Number(process.env.CONCURRENCY || 10);
const TIMEOUT_MS = Number(process.env.TIMEOUT_MS || 20000);
const RETRIES = Number(process.env.RETRIES || 1);

async function fetchWithTimeout(url, init = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { redirect: "follow", signal: controller.signal, ...init });
  } finally {
    clearTimeout(timer);
  }
}

async function getSitemapUrls(sitemapUrl, seen = new Set()) {
  if (seen.has(sitemapUrl)) return [];
  seen.add(sitemapUrl);

  const res = await fetchWithTimeout(sitemapUrl);
  if (!res.ok) throw new Error(`Sitemap ${sitemapUrl} returned ${res.status}`);
  const xml = await res.text();

  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  const isIndex = /<sitemapindex[\s>]/.test(xml);
  if (!isIndex) return locs;

  const nested = await Promise.all(locs.map((child) => getSitemapUrls(child, seen)));
  return nested.flat();
}

async function checkUrl(url) {
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    try {
      let res = await fetchWithTimeout(url, { method: "HEAD" });
      // Some hosts don't implement HEAD for SSR routes - fall back to GET.
      if (res.status === 405 || res.status === 501) {
        res = await fetchWithTimeout(url, { method: "GET" });
      }
      if (res.status === 200) return { url, status: 200, ok: true };
      if (attempt === RETRIES) return { url, status: res.status, ok: false };
    } catch (err) {
      if (attempt === RETRIES) {
        return { url, status: 0, ok: false, error: String(err?.message || err) };
      }
    }
  }
  return { url, status: 0, ok: false };
}

async function runPool(items, worker, concurrency) {
  const results = [];
  let cursor = 0;
  const runners = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index]);
    }
  });
  await Promise.all(runners);
  return results;
}

async function main() {
  console.log(`Post-deploy check -> ${SITEMAP_URL}`);
  const urls = await getSitemapUrls(SITEMAP_URL);
  if (urls.length === 0) throw new Error("No <loc> entries found in the sitemap");
  console.log(`Checking ${urls.length} URLs (concurrency ${CONCURRENCY})...`);

  const started = Date.now();
  const results = await runPool(urls, checkUrl, CONCURRENCY);
  const failures = results.filter((r) => !r.ok);
  const seconds = ((Date.now() - started) / 1000).toFixed(1);

  if (failures.length === 0) {
    console.log(`PASS: all ${urls.length} URLs returned 200 in ${seconds}s`);
    return;
  }

  console.error(`FAIL: ${failures.length} of ${urls.length} URLs did not return 200 (${seconds}s):\n`);
  for (const f of failures) {
    console.error(`  ${f.status || "ERR"}  ${f.url}${f.error ? `  (${f.error})` : ""}`);
  }
  process.exitCode = 1;
}

main().catch((err) => {
  console.error(`FAIL: sitemap check errored: ${err?.message || err}`);
  process.exitCode = 1;
});