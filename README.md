# DocManFu.com

Conversion-focused, SEO-friendly marketing site for [DocManFu](https://github.com/DocManFu/DocManFu), built with Eleventy 3 and served as a static site from nginx.

## Local development

Requirements: Node.js 20+.

```bash
npm ci
npm run dev
```

The development server runs at `http://localhost:8080` by default.

## Quality gates

```bash
npm test          # clean Eleventy build + output/metadata/link verification
docker build -t docmanfu-marketing .
docker run --rm -p 8080:80 docmanfu-marketing
```

The verifier checks required pages, SEO metadata, JSON-LD, internal links, static assets, heading structure, and sitemap inclusion.

## Production deployment

Production uses `docker-compose.yml`, exposing nginx on host loopback port `8530` for local health checks and joining the existing `caddy_default` Docker network. Caddy terminates TLS and proxies `docmanfu.com` and `www.docmanfu.com` to the `docmanfu-marketing` container.

```bash
docker compose up -d --build
curl -fsS http://127.0.0.1:8530/healthz
```

## Site structure

- `/` — conversion-focused homepage
- `/features/` — complete product capability overview
- `/self-hosted-document-management/` — privacy and ownership search landing page
- `/evernote-alternative/` — migration and comparison search landing page
- `/getting-started/` — Docker installation guide

## License

Site content and design © DocManFu. DocManFu application code is available separately under the MIT License.
