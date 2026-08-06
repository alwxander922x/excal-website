# Excal Group — website

React + TypeScript + Tailwind CSS + shadcn/ui-style components + Framer Motion. Built from the Modernist design system (flat, architectural, red-on-white, Archivo type, zero corner radius).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Push to GitHub

```bash
cd excal-website
git init
git remote add origin https://github.com/alwxander922x/excal-website.git
git add -A
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

## Structure

- `src/data/content.ts` — all copy in EN/RU/RO, and the 7 services
- `src/context/LanguageContext.tsx` — language state + persistence
- `src/components/ui/` — shadcn-style Button/Input/Textarea primitives
- `src/components/` — Nav, Footer, CookieBanner, Reveal (scroll animation), Marquee
- `src/pages/` — Home, About, Service (dynamic per service id), Contact, Legal (Terms/Privacy/Cookies)

## Notes

- The contact form is not wired to a backend yet — wire `src/pages/Contact.tsx`'s `onSubmit` to your email/API provider.
- Replace `public/logo.png` and the photo placeholders in Home/About with real assets when ready.
- Cookie consent state persists to `localStorage` (`excal_cookie_consent`), language to `excal_lang`.
