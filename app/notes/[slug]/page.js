import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "../../../content/notes";
import EditorialShell from "../../components/EditorialShell";
import ReadingProgress from "../../components/ReadingProgress";
export function generateStaticParams() { return notes.map(({slug}) => ({slug})); }
export async function generateMetadata({params}) { const {slug} = await params; const note = notes.find(n => n.slug === slug); return {title: `${note?.title || "Note not found"} — Shubh`, robots:{index:false,follow:false}}; }
export default async function Essay({params}) {
  const {slug} = await params; const note = notes.find(n => n.slug === slug); if (!note) notFound();
  const next = notes[(notes.indexOf(note)+1)%notes.length];
  return <EditorialShell><ReadingProgress /><Link className="text-link" href="/notes#blogs">← All blogs</Link><header className="article-header"><p className="eyebrow">{note.category} / <span className="draft-label">Draft outline</span></p><h1>{note.title}</h1><p className="editorial-deck">{note.excerpt}</p><p className="article-byline">Shubh Shrivastava · Publication date and reading time pending</p></header><div className="article-layout"><aside className="article-toc"><p className="eyebrow">In this note</p><nav aria-label="Article contents">{note.sections.map((title,i)=><a key={title} href={`#part-${i}`}>0{i+1} / {title}</a>)}</nav></aside><article className="reader-body"><p className="draft-notice">Outline only. The prompts below reserve space for the author’s real experiences and writing.</p>{note.sections.map((title,i)=><section id={`part-${i}`} key={title}><p className="eyebrow">0{i+1}</p><h2>{title}</h2><div className="content-slot"><span>Writing placeholder</span><p>{note.prompts[i]}</p></div>{i===1 && <div className="quote-slot"><span className="eyebrow">Pull quote / Pending</span><p>A memorable line from the finished essay will live here.</p></div>}</section>)}<div className="article-end"><p className="eyebrow">Keep exploring</p><Link href={`/notes/${next.slug}`}>{next.title} ↗</Link></div></article></div></EditorialShell>;
}
