import localFont from "next/font/local";
import "./globals.css";
import { person, siteUrl } from "../content/site";

const geistSans = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-geist-sans", weight: "100 900" });
const geistMono = localFont({ src: "./fonts/GeistMonoVF.woff", variable: "--font-geist-mono", weight: "100 900" });

const title = `${person.name} — Full-stack Engineer & Product Builder`;
const description =
  "Selected work in full-stack development, AI engineering, and reliable systems by Shubh Shrivastava.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s — ${person.name}` },
  description,
  authors: [{ name: person.name, url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: person.name, title, description, locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport = { themeColor: "#f8f7f3" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
