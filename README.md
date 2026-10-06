# MMT Funnel: High-Probability Trading Challenge

Landing page for the 5 Day Challenge (5 nights, live on Zoom, 7 PM EST).

## Preview

Hosted on Cloudflare Workers (static assets only), deployed by Cloudflare's Git integration on every push.

| What | URL |
|---|---|
| Current design (Claude Design export) | https://mmt-funnel.team-75f.workers.dev/ |
| Curriculum section, 5 versions | https://mmt-funnel.team-75f.workers.dev/curriculum/ |

Previews send `X-Robots-Tag: noindex` (see `design/_headers`).

## Cost guardrails (Cloudflare Free plan)

Static asset requests are free and unlimited, and the Free plan never bills overages. Keep it that way:

- Do not add a `main` Worker script, enable Workers Caching, or turn on Cloudflare Access.
- Do not upgrade the account to Workers Paid.

## Layout

| Path | Purpose |
|---|---|
| `wrangler.jsonc` | Cloudflare config. `assets.directory` points at the folder being served. |
| `design/` | What the preview serves today: the Claude Design file (`index.html`), its runtime (`support.js`, `image-slot.js`), assets, and review pages such as `curriculum/`. |
| `public/` | Production page (work in progress, not served yet). |
| `assets-src/` | Original proof screenshots and brand marks. |
| `scripts/build_assets.py` | Builds optimized images into `public/assets/img/` (WebP + JPEG, metadata stripped). Run `python3 scripts/build_assets.py`. |

## Deploying by hand

If a push does not show up on the preview, open Cloudflare → Workers & Pages → mmt-funnel → Deployments and retry the latest build, or run `npx wrangler deploy` from the repo root while logged in to the account.
