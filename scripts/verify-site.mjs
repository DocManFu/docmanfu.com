import { readFile, readdir, stat } from 'node:fs/promises';
import { join, dirname, resolve } from 'node:path';

const root = resolve('_site');
const required = ['index.html','features/index.html','self-hosted-document-management/index.html','evernote-alternative/index.html','getting-started/index.html','404.html','sitemap.xml','robots.txt'];
const errors = [];
for (const file of required) {
  try { await stat(join(root, file)); } catch { errors.push(`Missing ${file}`); }
}
async function walk(dir) {
  const out=[];
  for (const name of await readdir(dir)) {
    const path=join(dir,name); const s=await stat(path);
    if (s.isDirectory()) out.push(...await walk(path)); else out.push(path);
  }
  return out;
}
for (const file of (await walk(root)).filter(f => f.endsWith('.html'))) {
  const html=await readFile(file,'utf8');
  for (const needle of ['<title>','name="description"','rel="canonical"','property="og:title"','application/ld+json','<h1']) {
    if (!html.includes(needle)) errors.push(`${file}: missing ${needle}`);
  }
  const ids=new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]));
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url=match[1];
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    const [pathname,hash]=url.split('#');
    if (!pathname && hash && !ids.has(hash)) errors.push(`${file}: missing #${hash}`);
    if (!pathname) continue;
    let target=join(root,pathname);
    if (pathname.endsWith('/')) target=join(target,'index.html');
    try { await stat(target); } catch { errors.push(`${file}: broken internal URL ${url}`); }
  }
}
const sitemap=await readFile(join(root,'sitemap.xml'),'utf8');
if (!sitemap.includes('https://docmanfu.com/features/')) errors.push('Sitemap missing features page');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Verified ${required.length} required outputs, metadata, internal links, assets, and sitemap.`);
