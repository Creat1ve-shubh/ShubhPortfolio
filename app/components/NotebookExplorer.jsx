"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { notes } from "../../content/notes";
import { thoughts } from "../../content/thoughts";

const views = {
  thoughts: { eyebrow: "01 / In the moment", title: "Before the thought disappears.", description: "Quick observations, passing questions, and little discoveries, captured on the go. Random, informal, and sometimes unfinished—there’s no need for every thought to become an essay.", format: "Short-form / Unfiltered / In progress" },
  blogs: { eyebrow: "02 / With a little more time", title: "Ideas worth sitting with.", description: "Thoughtfully written pieces that give an idea room to breathe. Stories, engineering decisions, and considered reflections, shaped with context, care, and a little distance.", format: "Long-form / Considered / Carefully composed" },
};
export default function NotebookExplorer() {
  const [active, setActive] = useState("thoughts");
  const buttons = useRef({});
  useEffect(() => {
    const sync = () => setActive(window.location.hash === "#blogs" ? "blogs" : "thoughts");
    sync(); window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const select = (value) => { setActive(value); window.history.replaceState(null, "", `#${value}`); };
  const onKeyDown = (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? "thoughts" : event.key === "End" ? "blogs" : active === "thoughts" ? "blogs" : "thoughts";
    select(next); buttons.current[next]?.focus();
  };
  const view = views[active];
  return <>
    <header className="notebook-header"><p className="eyebrow">The notebook / Thoughts &amp; blogs</p><h1>A mind<br />in motion<span className="accent">.</span></h1><p className="editorial-deck">Some ideas arrive in a moment.<br />Others need a few pages.</p></header>
    <div className="notebook-tabs" role="tablist" aria-label="Writing format" onKeyDown={onKeyDown}>{["thoughts", "blogs"].map(key => <button key={key} ref={node => { buttons.current[key] = node; }} role="tab" id={`tab-${key}`} aria-controls={`panel-${key}`} aria-selected={active === key} tabIndex={active === key ? 0 : -1} onClick={() => select(key)}><span aria-hidden="true">{key === "thoughts" ? "✳" : "¶"}</span>{key === "thoughts" ? "Thoughts" : "Blogs"}<small>{key === "thoughts" ? "In the moment" : "In depth"}</small></button>)}</div>
    <section key={active} className="notebook-panel" id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} tabIndex={0}>
      <div className="view-intro"><div><p className="eyebrow">{view.eyebrow}</p><h2>{view.title}</h2></div><div><p>{view.description}</p><span className="view-format">{view.format}</span></div></div>
      {active === "thoughts" ? <div className="thought-feed"><div className="thought-margin"><span aria-hidden="true">✳</span><p>A place for the<br />not-quite-an-essay.</p></div><div>{thoughts.map((thought,i) => <article className="thought-entry" key={thought.id}><div className="essay-meta"><span>Note / 0{i+1}</span>{thought.placeholder && <span className="draft-label">Placeholder</span>}</div><h3>{thought.label}</h3><p>{thought.prompt}</p><footer>{thought.placeholder ? "Your words and date will go here." : thought.date}</footer></article>)}</div></div> : <div className="blog-grid">{notes.map((note,i) => <Link className={`blog-card ${i === 0 ? "blog-featured" : ""}`} href={`/notes/${note.slug}`} key={note.slug}><div className="blog-cover" aria-hidden="true"><span>FIELD NOTES / 0{i+1}</span><strong>{["{ ? }", "Go.", "0.83", "AI / I"][i]}</strong><span>{note.category}</span></div><div className="blog-copy"><div className="essay-meta"><span>{note.category}</span><span className="draft-label">Draft outline</span></div><h3>{note.title}</h3><p>{note.excerpt}</p><span className="essay-cta">Explore the outline <span aria-hidden="true">↗</span></span></div></Link>)}</div>}
      <p className="notebook-disclaimer">{active === "thoughts" ? "These are spaces for future thoughts, not published personal entries." : "These are draft outlines. Publication dates and reading times will be added with the finished writing."}</p>
    </section>
  </>;
}
