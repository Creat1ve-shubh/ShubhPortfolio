import EditorialShell from "../components/EditorialShell";
import NotebookExplorer from "../components/NotebookExplorer";
export const metadata = { title: "Thoughts & Blogs — Shubh Shrivastava", description: "Quick thoughts and carefully composed blogs on building, learning, and life.", robots: { index: false, follow: false } };
export default function Notebook() { return <EditorialShell><NotebookExplorer /></EditorialShell>; }
