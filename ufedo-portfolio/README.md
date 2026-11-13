# Abuh Ufedo — Portfolio & Fieldnotes

A responsive personal portfolio and editorial blog built with **Astro 7**, Markdown content collections and a small amount of vanilla JavaScript. It is designed to be static-first: no database, paid plugin, or server is required to publish the site.

## What's included

- Editorial-style homepage and responsive navigation
- About page built around a personal story rather than a CV summary
- Project index and individual case-study pages
- Blog archive with category filters and live search
- Four starter article drafts, clearly marked for review
- Credentials, selected learning and milestones page
- Visual gallery with original vector illustrations
- A “Now” page for current interests and learning
- Contact page that reads your links from one config file
- RSS feed for published articles, sitemap, favicon and social preview image
- Custom responsive styling and accessible focus states

## 1. Run it on your computer

Install **Node.js 22 LTS or newer**. Then:

1. Extract this folder.
2. Open the folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local address printed in the terminal (usually `http://localhost:4321`).

To create a production build:

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## 2. The finishing touches to make before launch

### Personal details, contact links and CV

Open `src/data/site.ts`. This is the central profile configuration. Replace or complete:

- `name` and `initials` if you prefer a different public name format.
- `email` with the email address you want people to use.
- `github`, `linkedin` and `medium` with your real profile URLs.
- `cvUrl` with `/files/your-cv.pdf` after placing the PDF in `public/files/`.
- `portrait` with the path to your own portrait.

Social links and the CV button appear automatically when configured. No contact address or social profile has been invented for you.

### Portrait and gallery photographs

The current images are **original editorial vector illustrations**, not photographs of your actual prototypes. They are visual placeholders designed to make the first version feel cohesive.

To add your portrait:

1. Put a suitably cropped image in `public/images/`, for example `profile.jpg`.
2. Change `portrait` in `src/data/site.ts` to `/images/profile.jpg`.

To replace a gallery illustration, edit `src/data/gallery.ts` and change the corresponding `src` to the path of your image. Add the image file under `public/images/`. The same approach works for project and article cover images.

### Certificates and documents

Place only documents you are comfortable making public inside `public/certificates/`. Add the certificate title, issuer, date and verification link to `src/data/credentials.ts`. The current technical-learning list is deliberately described as selected learning/training rather than claiming that every item is a completed certificate. Verify completion dates and credential status before changing that wording.

### Update the canonical domain

Before launch, change `site` in `astro.config.mjs` from `https://example.com` to the actual public website URL. This value is used for canonical links, RSS, sitemap and robots.txt output.

## 3. How to write a new article

Create a Markdown file in `src/content/blog/`, for example:

`src/content/blog/my-new-article.md`

Start with this frontmatter:

```md
---
title: "A title that makes someone curious"
description: "One or two sentences explaining what the article is about."
pubDate: 2026-11-13
category: "Engineering reflections"
tags: [RF, Electronics, Learning]
draft: true
readTime: "5 min read"
cover: "/images/cover-notes.svg"
featured: false
---

## Your first section

Write your article here in ordinary Markdown.
```

Use `draft: true` while writing and reviewing. When you are happy with the article and have checked every factual claim, change it to `draft: false`. Draft articles are visible on the site with a clear **Starter draft** label, but are excluded from the RSS feed and sitemap until published. The four initial articles are starter drafts based on experiences and project details previously shared. Please personalise their wording and verify the specifics before making them public.

Useful Markdown syntax:

```md
## Section heading

A paragraph with **bold text** and *emphasis*.

- A bullet point
- Another bullet point

> A highlighted quotation or key thought.

[An external link](https://example.com)
```

## 4. How to add a project

Create a Markdown file in `src/content/projects/`, for example `my-new-project.md`:

```md
---
title: "Project name"
summary: "A concise explanation of the problem and what the project does."
category: "Hardware"
period: "2026"
role: "Your role"
status: "In progress"
featured: false
order: 5
cover: "/images/cover-notes.svg"
tags: [Electronics, Prototyping]
---

## The problem

Describe the problem.

## My contribution

Explain precisely what you did.

## What I learned

Document the decisions, results and next steps.
```

Set `featured: true` for projects you want on the homepage. Use `order` to control the order on the project page. Astro automatically creates a page at `/projects/my-new-project/`.

## 5. Important notes about the starter content

- The AfroVax page is intentionally high-level. Do not add detailed thermal design, circuit schematics, proprietary dimensions, material stacks, supplier information or manufacturing drawings until the team has clarified its IP and disclosure strategy.
- The Medvi page describes the 93.4% end-to-end handwriting-conversion result as a reported project-evaluation result. Add the measurement method, test set and evaluation conditions before presenting it as a general accuracy figure.
- The optical-receiver/TIA and spiking-neural-network pages are explicitly presented as learning projects, not completed research results.
- The four initial blog posts are **drafts**. Review the wording, dates, details and personal voice before setting `draft: false`.
- This version has no hosted contact-form backend or newsletter service. Add your email/social links in `src/data/site.ts`; a form or newsletter can be integrated later if you choose a provider.

## 6. Free deployment

### Option A — Cloudflare Pages

1. Create a free Cloudflare account and a GitHub account if you do not already have them.
2. Create a new GitHub repository and push this project to it.
3. In Cloudflare, open **Workers & Pages** and create a Pages project from the Git repository (choose the static-site/Pages flow).
4. Set the production branch to `main`.
5. Set the build command to `npm run build`.
6. Set the build output directory to `dist`.
7. Deploy. Subsequent pushes to `main` trigger a new build and deployment.

Cloudflare's Astro deployment guide documents the Git-based deployment flow: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/

### Option B — Netlify

1. Push this folder to GitHub.
2. In Netlify, import the repository as a new site.
3. Use build command `npm run build` and publish directory `dist`.
4. Deploy. Netlify will rebuild when you push changes.

### Custom domain

You can launch on the free platform-provided subdomain first. A custom domain such as `abuhufedo.com` is optional and usually has an annual registration cost. Add the domain in your host's dashboard and update `site` in `astro.config.mjs` to the final URL.

## Project structure

```text
src/
  components/       reusable header, footer and cards
  content/
    blog/           one Markdown file per article
    projects/       one Markdown file per project
  data/             profile, navigation, credentials and gallery data
  layouts/          shared page layout and metadata
  pages/            homepage and route templates
  styles/           complete visual system
public/
  images/           portrait and cover artwork
  files/            CV and downloadable files
  certificates/     public credential documents
```

## Design decisions

The site uses a warm editorial palette, a serif display face, compact mono labels and a restrained green/orange accent system. It is deliberately not a generic developer dashboard. The aim is to feel like a professional portfolio with the personality of a technical journal.
