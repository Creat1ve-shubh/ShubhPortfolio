import Link from "next/link";
import SmoothScroll from "./SmoothScroll";
export default function EditorialShell({ children }) {
  return <><SmoothScroll /><a className="skip-link" href="#main">Skip to content</a><header className="site-header"><div className="shell nav-inner"><Link className="wordmark" href="/">shubh<span>.</span></Link><nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/notes">Thoughts &amp; blogs</Link><Link href="/#contact">Contact ↗</Link></nav></div></header><main id="main" className="shell editorial">{children}</main><footer className="shell footer"><p>Shubh Shrivastava / A work in progress.</p><Link href="/">Back to portfolio ↗</Link></footer></>;
}
