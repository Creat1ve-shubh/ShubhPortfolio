import Link from "next/link";
import { person } from "../../content/site";

export default function SiteFooter({ home = false }) {
  return (
    <footer className="shell footer">
      <p>© {new Date().getFullYear()} {person.name}</p>
      {home ? <a href="#home">Back to top ↑</a> : <Link href="/">Back to portfolio ↗</Link>}
    </footer>
  );
}
