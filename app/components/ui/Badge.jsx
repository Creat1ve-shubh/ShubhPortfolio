export function Badge({ text }) {
  return (
    <span className="inline-block px-4 py-1 text-sm bg-purple-400 text-black font-bold border-2 border-black neo-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] motion-hover transition-transform cursor-default">
      {text}
    </span>
  );
}
