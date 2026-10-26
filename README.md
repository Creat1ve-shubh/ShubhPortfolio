# shubh. — portfolio

Personal portfolio of Shubh Shrivastava, built with Next.js (App Router) and React 19. Styling is plain CSS in `app/globals.css`; Tailwind is only used for its base reset.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

- `content/site.js` — name, email, socials, resume path, site URL and the drafts flag
- `content/portfolio.js` — projects, experience, skills, education
- `content/notes.js`, `content/thoughts.js` — blogs and short thoughts for the notebook grid
- `app/components/` — one component per homepage section
- `app/opengraph-image.js`, `app/icon.svg`, `app/sitemap.js`, `app/robots.js` — sharing and SEO

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production URL used for canonical links, Open Graph and the sitemap. Falls back to the Vercel production URL. |
| `NEXT_PUBLIC_SHOW_DRAFTS` | Set to `true` to preview unpublished blog outlines and the case study draft. |

## Publishing writing

Set `published: true` on a note in `content/notes.js` and add `date`, `readingTime` and `body` (one string or an array of paragraphs per section). For a thought, set `placeholder: false` and add `text` and `date`.
