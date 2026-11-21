# Juliano Sena’s portfolio

A single-page Vue 3 portfolio. Vite serves the app during development. Vite SSG renders the complete page to HTML for production, including the projects, sources and resume links.

## Local development

From this directory, use Node.js 22.12 or later and run:

```sh
npm ci
npm run dev
```

## Production

Run `npm run build` to generate `dist/`. Run `npm run preview` to serve that build locally. Publish the contents of `dist/` to a static host.

## Project layout

- `src/App.vue` composes the page sections.
- `src/components/` contains the introduction, projects, technologies, career history, profile and contact information.
- `src/data/` contains the technology descriptions and dated roles.
- `src/styles/` and `src/assets/` hold the stylesheet and its architectural background.
- `public/` contains the downloadable resume and images served under stable filenames.
- `specs/portfolio/` holds the requirements, design and QA history.
- `infrastructure/` is the independent AWS CDK project with its own dependencies and commands.
