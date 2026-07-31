const modules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const blogContent: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, body]) => [
    path.split("/").pop()!.replace(/\.md$/, ""),
    body,
  ]),
);

export function cleanReadTime(value: string) {
  return value.replace(/^\d{4}/, "").trim() || "8 min read";
}