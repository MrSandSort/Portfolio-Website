# Portfolio Website

Modern personal portfolio built with Next.js App Router and Tailwind CSS.

## Stack

- Next.js
- React
- Tailwind CSS
- TypeScript
- next-themes
- lucide-react

## Run

```bash
npm install
npm run dev
```

## Docker

Build the production image:

```bash
docker build -t portfolio-website .
```

Run it on port `3000`:

```bash
docker run --rm -p 3000:3000 portfolio-website
```

Or use Compose:

```bash
docker compose up --build
```

## Folder Structure

```text
.
|-- app
|   |-- globals.css
|   |-- icon.svg
|   |-- layout.tsx
|   `-- page.tsx
|-- components
|   |-- contact-form.tsx
|   |-- footer.tsx
|   |-- header.tsx
|   |-- reveal.tsx
|   |-- section-heading.tsx
|   |-- theme-toggle.tsx
|   |-- providers
|   |   `-- theme-provider.tsx
|   `-- sections
|       |-- about-section.tsx
|       |-- contact-section.tsx
|       |-- experience-section.tsx
|       |-- github-section.tsx
|       |-- hero-section.tsx
|       |-- projects-section.tsx
|       `-- skills-section.tsx
|-- lib
|   |-- portfolio-data.ts
|   `-- utils.ts
|-- .dockerignore
|-- Dockerfile
|-- docker-compose.yml
|-- next.config.mjs
|-- package.json
|-- postcss.config.js
|-- tailwind.config.ts
`-- tsconfig.json
```

## Notes

- Update personal content in `lib/portfolio-data.ts`.
- The contact form uses a `mailto:` handoff to keep the project backend-free by default.
- GitHub stats are static placeholders so the site stays fast and does not rely on third-party widgets.
- The Docker image uses Next.js standalone output for a smaller production runtime.
# Portfolio-Website
