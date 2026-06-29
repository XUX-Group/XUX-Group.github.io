# Xuefei Xu's Group Website

A compact academic group website for Xuefei Xu's group at Tsinghua University.

## Site structure

- `/` — group overview, open positions, research directions, and recent publications
- `/members` — PI, postdocs, graduate students, alumni, and gallery
- `/research` — research directions with figures from the previous group website
- `/publications` — recent publications and Google Scholar link for the full list
- `/teaching` — courses
- `/tutorials` — placeholder for group tutorials and notes
- `/software` — TUMME, MSTor, and Polyrate links
- `/links` — support, journals, databases, and internal links
- `/contact` — address, email, telephone, and academic profiles

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The source application lives in `site/`. The build writes the deployable site to
`dist/` and synchronizes the generated entry files and assets to the repository
root for GitHub Pages.
