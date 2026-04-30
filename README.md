# Interactive Developer Portfolio

A modern React + Vite + Tailwind CSS portfolio with a soft dark theme, glassmorphism cards, Framer Motion animations, typing text, parallax background elements, mouse trail, scroll progress, project cards, skills, achievements, profiles, contact, and resume actions.

## Customize

Edit the portfolio content in:

```txt
src/data/portfolio.js
```

Update:

- `name`
- `email`
- profile and project links
- project titles, descriptions, images, tech stacks
- resume path

Put your resume PDF at:

```txt
public/resume.pdf
```

## Run Locally

```bash
npm install
npm run dev
```

If PowerShell blocks `npm`, use:

```bash
npm.cmd install
npm.cmd run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as `Vite`.
4. Use `npm run build` as the build command.
5. Use `dist` as the output directory.
6. Deploy.
