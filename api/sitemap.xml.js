/**
 * Dynamic Sitemap — titaniumsmiles.in
 * Includes static pages + all published blog posts from the blog SaaS.
 */

const BASE_URL    = 'https://titaniumsmiles.in';
const CONVEX_URL  = 'https://scrupulous-pig-245.convex.cloud';
const CLINIC_SLUG = 'titanium-smiles';

const STATIC_ROUTES = [
  { path: '/',         priority: '1.0', changefreq: 'weekly'  },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/gallery',  priority: '0.8', changefreq: 'monthly' },
  { path: '/about',    priority: '0.8', changefreq: 'monthly' },
  { path: '/contact',  priority: '0.7', changefreq: 'monthly' },
  { path: '/blog',     priority: '0.9', changefreq: 'daily'   },
];

function toDate(ts) {
  return new Date(ts).toISOString().split('T')[0];
}

function urlEntry(loc, priority, changefreq, lastmod) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function convexQuery(functionPath, args) {
  const res = await fetch(`${CONVEX_URL}/api/query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: functionPath, args, format: 'json' }),
  });
  if (!res.ok) throw new Error(`Convex ${functionPath} HTTP ${res.status}`);
  const data = await res.json();
  if (data.status !== 'success') throw new Error(`Convex error: ${JSON.stringify(data)}`);
  return data.value;
}

export default async function handler(req, res) {
  const today = toDate(Date.now());

  const entries = STATIC_ROUTES.map(r =>
    urlEntry(`${BASE_URL}${r.path}`, r.priority, r.changefreq, today)
  );

  try {
    const clinic = await convexQuery('clinics:getBySlug', { slug: CLINIC_SLUG });

    if (clinic) {
      const posts = await convexQuery('posts:getPublishedByClinic', { clinicId: clinic._id });

      const sorted = [...posts].sort(
        (a, b) => (b.publishedAt ?? b.createdAt) - (a.publishedAt ?? a.createdAt)
      );

      for (const post of sorted) {
        entries.push(urlEntry(
          `${BASE_URL}/blog/${CLINIC_SLUG}/${post.slug}`,
          '0.8',
          'weekly',
          toDate(post.updatedAt ?? post.publishedAt ?? post.createdAt)
        ));
      }
    }
  } catch (err) {
    console.error('[sitemap] error fetching posts:', err);
    // static pages still returned on error
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  res
    .setHeader('Content-Type', 'application/xml; charset=utf-8')
    .setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    .status(200)
    .send(sitemap);
}

