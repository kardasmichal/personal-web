# kardas.cz

Next.js personal website for Michal Kardaš.

## Deploy
Import the repository into Vercel with:
- Framework: Next.js
- Root Directory: ./
- Build / Output / Install: defaults

## Canonical domain
The code uses **https://kardas.cz** as the canonical URL everywhere (metadata, schema, sitemap, robots, llms.txt).
In Vercel Domains, make `kardas.cz` the production domain and redirect `www.kardas.cz` -> `kardas.cz` with a permanent redirect.

## SEO / GEO
- canonical metadata
- ProfilePage + Person + WebSite JSON-LD
- robots.txt with OAI-SearchBot allowed
- sitemap.xml
- llms.txt
- static Open Graph / Twitter image with portrait and square-crop-safe composition
- all Firma/Agentura and Firmy/E-shopy/Startupy content is present in server-rendered HTML; toggles only control visual visibility
