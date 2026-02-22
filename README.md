# Dostupné vozy (Next.js + Supabase)

Plnohodnotný základ projektu s veřejným webem a admin částí.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (black + gold theme)
- Zod + React Hook Form
- Supabase (schema + RLS SQL připraveno)

## Hotové části
- Veřejné stránky: `/`, `/vozy`, `/vozy/[slug]`, `/o-nas`, `/sluzby`, `/recenze`, `/faq`, `/kontakt`
- Admin: `/admin/vozy`, `/admin/vozy/new`, `/admin/vozy/[id]`, `/admin/leady`, `/admin/media`, `/admin/nastaveni`
- Preview: `/preview/vozy/[id]?token=...` + iframe v editoru
- SEO: metadata, `sitemap.xml`, `robots.txt`
- Bezpečnostní základ: honeypot + jednoduchý throttling lead formuláře

## Supabase
SQL soubory:
- `supabase/schema.sql`
- `supabase/rls.sql`

## Spuštění
```bash
npm install
npm run dev
```
