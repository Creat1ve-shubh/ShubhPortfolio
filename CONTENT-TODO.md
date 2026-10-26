# Portfolio content handoff

Draft writing and the case study are hidden on the live site. Preview them locally with `NEXT_PUBLIC_SHOW_DRAFTS=true npm run dev`.

## Writing
Edit `content/notes.js`. For each of the four outlines supply your own body text, a short excerpt, category, publication date, and any images with captions/permission. Add actual reading times once the bodies are complete. Page rendering is in `app/notes/[slug]/page.js`; replace prompt boxes with article content.

## Flagship case study
Edit `app/work/graduate-outcome-portal/page.js`:
- Original workflow, stakeholder needs, and constraints
- Team size, exact personal ownership, collaborators, dates
- Sanitized screenshots and a public demo with sample data
- Verified architecture and deployment diagram
- Alternatives considered and reasons for decisions
- Measurement window, adoption, evidence, limitations
- Lessons and next steps

## Other projects
Project cards most need screenshots or a short demo: two project links land on sign-in pages. Feedbot needs dataset provenance/split, averaging method, baseline, and failure cases. MUJKite needs beta status, frontend decisions, screenshots, and demo. Distinguish records managed from active users.

## Recommendation
The recommendation section was removed until a real quote exists. Provide an approved quote with name, role, organization, and explicit permission to publish. Never use an invented quote.

## Hiring
Confirm target roles, start date/availability, work arrangement and location preferences. The hiring-details box was removed; add a line to the hero eyebrow or contact section once these are confirmed. The full-stack headline is based on existing resume experience and can be tailored further.

## Local-only work
No push or deployment was requested for this iteration.

## Thoughts and blogs
The homepage and /notes share one bento grid (`app/components/NotebookGrid.jsx`). Blogs show as "In the works" until `published: true`; thoughts only appear once `placeholder: false` with `text` and `date`.
