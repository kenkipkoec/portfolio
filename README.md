# Portfolio Website

A professional Next.js portfolio website for **Ngetich Ken**.

## Files

- `app/page.tsx` — homepage content and portfolio sections
- `app/components/ContactForm.tsx` — contact form component with client-side submission
- `app/api/contact/route.ts` — API route to process contact form POST requests
- `app/globals.css` — global styling and animated UI
- `scripts/generate-resume.js` — generates `public/resume.pdf`
- `public/` — static assets and generated resume PDF

## Setup

1. Run `npm install`
2. Run `npm run generate-resume` to build the PDF resume
3. Run `npm run dev` to start the Next.js development server

## Notes

- The contact form sends submissions to `/api/contact`.
- The hub includes animated project cards, image sections, and a downloadable resume.
- Update the project descriptions and links in `app/page.tsx` as needed.
