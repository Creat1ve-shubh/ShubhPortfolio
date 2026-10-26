/** @type {import('tailwindcss').Config} */
// Tailwind is only used for its base reset (preflight); all styling lives in app/globals.css.
module.exports = {
  content: ["./app/**/*.{js,jsx,mdx}"],
  theme: { extend: {} },
  plugins: [],
};
