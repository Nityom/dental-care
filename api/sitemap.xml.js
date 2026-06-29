/**
 * Dynamic Sitemap Generator
 * Accessible at: /sitemap.xml
 * Includes all static pages for both the apex domain and www subdomain.
 */

const BASE_URL = 'https://titaniumsmiles.in';
const WWW_URL  = 'https://www.titaniumsmiles.in';

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

export default function handler(req, res) {
  const lastmod = new Date().toISOString().split('T')[0];

  const urlEntries = [
    ...routes.map((route) => buildUrl(`${BASE_URL}${route.path}`, route, lastmod)),
    ...routes.map((route) => buildUrl(`${WWW_URL}${route.path}`, route, lastmod)),
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

const routes = [
  { path: '/',         priority: '1.0', changefreq: 'weekly'  },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/gallery',  priority: '0.8', changefreq: 'monthly' },
  { path: '/about',    priority: '0.8', changefreq: 'monthly' },
  { path: '/contact',  priority: '0.7', changefreq: 'monthly' },
];
