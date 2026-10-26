import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function EditorialShell({ children }) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="shell editorial">{children}</main>
      <SiteFooter />
    </>
  );
}
