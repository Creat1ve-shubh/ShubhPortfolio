export function Badge({ text }) {
  return (
    <span className="px-4 py-1 text-sm rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 text-black font-medium shadow-sm">
      {text}
    </span>
  );
}
