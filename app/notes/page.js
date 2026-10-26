import EditorialShell from "../components/EditorialShell";
import MotionEffects from "../components/MotionEffects";
import NotebookGrid from "../components/NotebookGrid";

export const metadata = {
  title: "Thoughts & Blogs",
  description: "Quick thoughts and longer blogs on building, learning, and engineering by Shubh Shrivastava.",
  alternates: { canonical: "/notes" },
};

export default function Notebook() {
  return (
    <EditorialShell>
      <MotionEffects />
      <header className="notebook-header">
        <p className="eyebrow">The notebook / Thoughts &amp; blogs</p>
        <h1>A mind<br />in motion<span className="accent">.</span></h1>
        <p className="editorial-deck">Some ideas arrive in a moment.<br />Others need a few pages.</p>
      </header>
      <NotebookGrid />
    </EditorialShell>
  );
}
