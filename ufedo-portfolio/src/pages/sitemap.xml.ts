import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://example.com');
  const staticPaths = ['', 'about/', 'projects/', 'writing/', 'credentials/', 'gallery/', 'now/', 'contact/'];
  const projects = await getCollection('projects');
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const urls = [
    ...staticPaths.map((path) => new URL(path, base).href),
    ...projects.map((project) => new URL(`projects/${project.id}/`, base).href),
    ...posts.map((post) => new URL(`writing/${post.id}/`, base).href),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
