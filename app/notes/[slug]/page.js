import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "../../../content/notes";
import { showDrafts } from "../../../content/site";
import EditorialShell from "../../components/EditorialShell";
import ReadingProgress from "../../components/ReadingProgress";

const visible = notes.filter((note) => note.published || showDrafts);

export const dynamicParams = false;

export function generateStaticParams() {
  return visible.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const note = visible.find((n) => n.slug === slug);
  if (!note) return { title: "Note not found" };
  return {
    title: note.title,
    description: note.excerpt,
    alternates: { canonical: `/notes/${note.slug}` },
    robots: note.published ? undefined : { index: false, follow: false },
  };
}

// A published note's `body` holds one string (or an array of paragraphs) per section.
function SectionBody({ note, index }) {
  if (note.published) {
    const paragraphs = [note.body?.[index] ?? []].flat();
    return paragraphs.map((text, i) => <p key={i}>{text}</p>);
  }
  return <div className="content-slot"><span>Writing placeholder</span><p>{note.prompts[index]}</p></div>;
}

export default async function Essay({ params }) {
  const { slug } = await params;
  const note = visible.find((n) => n.slug === slug);
  if (!note) notFound();
  const next = visible[(visible.indexOf(note) + 1) % visible.length];
  return (
    <EditorialShell>
      <ReadingProgress />
      <Link className="text-link" href="/notes">← All writing</Link>
      <header className="article-header">
        <p className="eyebrow">{note.category}{!note.published && <> / <span className="draft-label">Draft outline</span></>}</p>
        <h1>{note.title}</h1>
        <p className="editorial-deck">{note.excerpt}</p>
        <p className="article-byline">Shubh Shrivastava{note.published ? ` · ${note.date} · ${note.readingTime}` : " · Draft"}</p>
      </header>
      <div className="article-layout">
        <aside className="article-toc">
          <p className="eyebrow">In this note</p>
          <nav aria-label="Article contents">{note.sections.map((title, i) => <a key={title} href={`#part-${i}`}>0{i + 1} / {title}</a>)}</nav>
        </aside>
        <article className="reader-body">
          {note.sections.map((title, i) => (
            <section id={`part-${i}`} key={title}>
              <p className="eyebrow">0{i + 1}</p>
              <h2>{title}</h2>
              <SectionBody note={note} index={i} />
            </section>
          ))}
          {next !== note && (
            <div className="article-end"><p className="eyebrow">Keep exploring</p><Link href={`/notes/${next.slug}`}>{next.title} ↗</Link></div>
          )}
        </article>
      </div>
    </EditorialShell>
  );
}
