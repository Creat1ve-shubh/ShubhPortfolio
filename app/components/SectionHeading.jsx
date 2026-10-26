export default function SectionHeading({ number, label, id, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{number} / {label}</p>
      <h2 id={id}>{children}</h2>
    </div>
  );
}
