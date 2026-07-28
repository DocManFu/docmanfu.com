import { readFile, readdir, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const root = resolve('_site');
const required = [
  'index.html',
  'features/index.html',
  'self-hosted-document-management/index.html',
  'evernote-alternative/index.html',
  'getting-started/index.html',
  'privacy/index.html',
  '404.html',
  'sitemap.xml',
  'robots.txt',
  'site.webmanifest'
];
const errors = [];

for (const file of required) {
  try { await stat(join(root, file)); } catch { errors.push(`Missing ${file}`); }
}

async function walk(dir) {
  const out = [];
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    const info = await stat(path);
    if (info.isDirectory()) out.push(...await walk(path));
    else out.push(path);
  }
  return out;
}

const htmlFiles = (await walk(root)).filter((file) => file.endsWith('.html'));
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = file.slice(root.length + 1);
  for (const needle of ['<title>', 'name="description"', 'rel="canonical"', 'property="og:title"', '<h1']) {
    if (!html.includes(needle)) errors.push(`${relative}: missing ${needle}`);
  }

  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) errors.push(`${relative}: expected one h1, found ${h1Count}`);

  const idList = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const ids = new Set(idList);
  if (ids.size !== idList.length) errors.push(`${relative}: duplicate id attribute`);

  for (const script of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const parsed = JSON.parse(script[1]);
      if (!parsed['@context'] || !parsed['@type']) throw new Error('missing @context or @type');
    } catch (error) {
      errors.push(`${relative}: invalid JSON-LD (${error.message})`);
    }
  }

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    const [pathname, hash] = url.split('#');
    if (!pathname && hash && !ids.has(hash)) errors.push(`${relative}: missing #${hash}`);
    if (!pathname) continue;
    let target = join(root, pathname);
    if (pathname.endsWith('/')) target = join(target, 'index.html');
    try { await stat(target); } catch { errors.push(`${relative}: broken internal URL ${url}`); }
  }
}

const notFound = await readFile(join(root, '404.html'), 'utf8');
if (!notFound.includes('name="robots" content="noindex, follow"')) errors.push('404 must be noindex, follow');
if (notFound.includes('application/ld+json')) errors.push('404 must not emit empty JSON-LD');

for (const path of ['evernote-alternative/index.html', 'self-hosted-document-management/index.html']) {
  const html = await readFile(join(root, path), 'utf8');
  if (!html.includes('property="og:type" content="article"')) errors.push(`${path}: expected og:type article`);
}

const home = await readFile(join(root, 'index.html'), 'utf8');
if (home.includes('role="img"') && home.includes('<button')) errors.push('Homepage mock must not nest controls inside role=img');

const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
for (const url of ['/features/', '/privacy/', '/getting-started/']) {
  if (!sitemap.includes(`https://docmanfu.com${url}`)) errors.push(`Sitemap missing ${url}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Verified ${required.length} outputs and ${htmlFiles.length} HTML pages: metadata, JSON-LD, headings, IDs, internal links, robots directives, Open Graph types, assets, and sitemap.`);
