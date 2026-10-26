import Link from "next/link";
import ThoughtIcon from "./ThoughtIcon";
import { notes } from "../../content/notes";
import { thoughts } from "../../content/thoughts";
import { showDrafts } from "../../content/site";

const marks = ["{ ? }", "Go.", "0.83", "AI / I"];
const tileClass = ["tile-feature", "tile-small", "tile-small", "tile-wide"];

function BlogTile({ note, index }) {
  const linked = note.published || showDrafts;
  const body = (
    <>
      <div className="tile-cover" aria-hidden="true"><span>Blog / 0{index + 1}</span><strong>{marks[index]}</strong></div>
      <div className="tile-copy">
        <div className="essay-meta">
          <span>{note.category}</span>
          {note.published ? <span>{note.date} · {note.readingTime}</span> : <span className="draft-label">In the works</span>}
        </div>
        <h3>{note.title}</h3>
        {index !== 1 && index !== 2 && <p>{note.excerpt}</p>}
        {linked && <span className="essay-cta">Read <span aria-hidden="true">↗</span></span>}
      </div>
    </>
  );
  const className = `bento-tile blog-tile ${tileClass[index] ?? "tile-small"}`;
  return linked
    ? <Link className={className} href={`/notes/${note.slug}`}>{body}</Link>
    : <article className={className}>{body}</article>;
}

/** One grid for both kinds of writing: long-form blogs and short thoughts. */
export default function NotebookGrid({ home = false }) {
  const published = thoughts.filter((thought) => !thought.placeholder).slice(0, 3);
  return (
    <div className="bento">
      {notes.slice(0, 1).map((note) => <BlogTile key={note.slug} note={note} index={0} />)}
      <article className="bento-tile tile-thoughts">
        <div className="thoughts-head">
          <span className="portal-symbol" aria-hidden="true"><ThoughtIcon /></span>
          <p className="eyebrow">Thoughts / In the moment</p>
        </div>
        <h3>Before the thought disappears.</h3>
        {published.length ? (
          <ul className="thought-list">
            {published.map((thought) => <li key={thought.id}><p>{thought.text}</p><span>{thought.date}</span></li>)}
          </ul>
        ) : (
          <p>Quick observations, open questions and small discoveries, captured on the go. First entries are on the way.</p>
        )}
      </article>
      {notes.slice(1).map((note, i) => <BlogTile key={note.slug} note={note} index={i + 1} />)}
      {home ? (
        <Link className="bento-tile tile-cta" href="/notes">
          <p className="eyebrow">The notebook</p>
          <h3>Every thought and blog,<br />in one place.</h3>
          <span className="essay-cta">Open the notebook <span aria-hidden="true">↗</span></span>
        </Link>
      ) : (
        <article className="bento-tile tile-cta">
          <p className="eyebrow">How it works</p>
          <h3>Thoughts arrive in a moment. Blogs take a few pages.</h3>
          <p>New pieces appear here as they are finished.</p>
        </article>
      )}
    </div>
  );
}
