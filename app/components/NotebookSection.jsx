import Curtain from "./Curtain";
import NotebookGrid from "./NotebookGrid";
import SectionHeading from "./SectionHeading";

export default function NotebookSection() {
  return (
    <section id="notebook" className="section notebook" aria-labelledby="notebook-title">
      <Curtain number="03" label="Notebook" />
      <div className="writing-heading">
        <SectionHeading number="03" label="Thoughts & blogs" id="notebook-title">A little thought.<br />A longer story<span className="accent">.</span></SectionHeading>
        <p>Two ways of thinking out loud.<br />One place to collect it all.</p>
      </div>
      <NotebookGrid home />
    </section>
  );
}
