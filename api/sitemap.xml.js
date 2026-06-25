/**
 * Dynamic Sitemap Generator
 * Accessible at: /sitemap.xml
 * Includes all static pages (main + www subdomain) plus live blog posts
 * fetched dynamically from the BlogForge embed API.
 */

const BASE_URL  = 'https://titaniumsmiles.in';
const WWW_URL   = 'https://www.titaniumsmiles.in';
const BLOG_URL  = 'https://blog.titaniumsmiles.in';
const BLOG_EMBED_URL = 'https://blog-saas-five.vercel.app/api/embed/titanium-smiles/recent-posts.js';

const routes = [
  { path: '/',         priority: '1.0', changefreq: 'weekly'  },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/gallery',  priority: '0.8', changefreq: 'monthly' },
  { path: '/about',    priority: '0.8', changefreq: 'monthly' },
  { path: '/contact',  priority: '0.7', changefreq: 'monthly' },
];

function buildUrl(loc, { priority, changefreq }, lastmod) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

/** Fetch blog post slugs by parsing the BlogForge JS embed response. */
async function fetchBlogPosts() {
  try {
    const res = await fetch(BLOG_EMBED_URL, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return [];
    const js = await res.text();
    // Extract the posts JSON array embedded in: var posts = [...];
    const match = js.match(/var\s+posts\s*=\s*(\[[\s\S]*?\]);/);
    if (!match) return [];
    const posts = JSON.parse(match[1]);
    return Array.isArray(posts) ? posts : [];
  } catch {
    // If fetch fails, degrade gracefully — sitemap still works without post URLs
    return [];
  }
}

export default async function handler(req, res) {
  const lastmod = new Date().toISOString().split('T')[0];

  // Fetch live blog posts in parallel with building static URL entries
  const [blogPosts] = await Promise.all([fetchBlogPosts()]);

  const urlEntries = [
    // Main domain pages
    ...routes.map((route) => buildUrl(`${BASE_URL}${route.path}`, route, lastmod)),
    // www subdomain pages (same routes, slightly lower implicit weight via canonical)
    ...routes.map((route) => buildUrl(`${WWW_URL}${route.path}`, route, lastmod)),
    // Blog root
    buildUrl(BLOG_URL, { priority: '0.9', changefreq: 'daily' }, lastmod),
    // Individual blog posts
    ...blogPosts.map((post) =>
      buildUrl(
        // Use the post's own URL if available, otherwise construct from slug
        post.url || `${BLOG_URL}/${post.slug}`,
        { priority: '0.7', changefreq: 'monthly' },
        lastmod,
      )
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries.join('\n')}
</urlset>`;

  res
    .setHeader('Content-Type', 'application/xml; charset=utf-8')
    .setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600')
    .status(200)
    .send(sitemap);
}
