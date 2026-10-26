# Portfolio content handoff

All new writing and case-study pages are explicitly drafts and marked noindex. Do not publish them as finished work without replacing the placeholders.

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
Homepage project notes reserve space for ownership and evidence. Feedbot needs dataset provenance/split, averaging method, baseline, and failure cases. MUJKite needs beta status, frontend decisions, screenshots, and demo. Distinguish records managed from active users.

## Recommendation
Provide an approved quote with name, role, organization, and explicit permission to publish. Never use an invented quote.

## Hiring
Confirm target roles, start date/availability, work arrangement and location preferences. Current values intentionally say “To be confirmed.” The full-stack headline is based on existing resume experience and can be tailored further.

## Local-only work
No push or deployment was requested for this iteration.

## Thoughts and blogs
The dedicated /notes page switches between #thoughts and #blogs. Edit content/thoughts.js for quick entries; replace prompt text with real entries and supply dates. Blogs retain the four outlines in content/notes.js. Both collections are explicitly placeholders until real writing is supplied.
