# Pragma Novus Systems website

The public site for Pragma Novus Systems (pragmansystems.co.za): who PNS is (a company that develops systems), its systems Ascend and NextStep, Ascend's three customer pages (/parents, /tutors, /organisations) and how to get in touch. React + Vite + Tailwind CSS + Framer Motion, deployed on Vercel.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Brand assets

- `public/logos/pns-logo.png`: full PNS logo
- `public/logos/pns-mark.png`: P-orbit mark (favicon and header)
- `public/og-image.png`: link-preview thumbnail (1200×630)
- `brand-src/`: HTML sources the mark and thumbnail were rendered from (not published)

## Vercel settings

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Optional: `OPENAI_API_KEY` (and `OPENAI_MODEL`) for the PNS Assistant chat at `/api/pns-assistant`
