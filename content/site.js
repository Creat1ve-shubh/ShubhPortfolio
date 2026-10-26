// Site-wide settings. Set NEXT_PUBLIC_SITE_URL to the production domain (e.g. https://shubh.dev).
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

// Draft pages (blog outlines, the case study) stay hidden unless NEXT_PUBLIC_SHOW_DRAFTS=true.
export const showDrafts = process.env.NEXT_PUBLIC_SHOW_DRAFTS === "true";

export const person = {
  name: "Shubh Shrivastava",
  role: "Full-stack engineer & product builder",
  description: "Full-stack engineer building real-world platforms with Next.js, Go, and PostgreSQL.",
  email: "shubhshrivastavawork@gmail.com",
  location: "Jaipur, India",
  timezone: "IST (UTC+5:30)",
  resume: "/Shubh-Shrivastava-Resume.pdf",
  graduation: "August 2027",
  socials: [
    { label: "GitHub", href: "https://github.com/Creat1ve-shubh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shubh-shrivastava/" },
    { label: "LeetCode", href: "https://leetcode.com/u/Creat1ve-shubh/" },
  ],
};
