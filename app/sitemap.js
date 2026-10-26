import { notes } from "../content/notes";
import { siteUrl } from "../content/site";

export default function sitemap() {
  const posts = notes.filter((note) => note.published).map((note) => ({ url: `${siteUrl}/notes/${note.slug}` }));
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/notes`, changeFrequency: "weekly", priority: 0.6 },
    ...posts,
  ];
}
