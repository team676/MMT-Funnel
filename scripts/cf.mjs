#!/usr/bin/env node
// `npm run dev` does the right thing in both places:
//   - inside Cloudflare's build (CI is set): deploy the static assets
//   - on a laptop: serve them locally with hot reload
// Extra arguments pass straight through to wrangler (e.g. `npm run dev -- --dry-run`).
import { spawnSync } from 'node:child_process';

const inCI = ['CI', 'CF_PAGES', 'WORKERS_CI'].some((k) => process.env[k]);
const mode = process.argv[2] || 'dev';
const extra = process.argv.slice(3);

let args;
if (mode === 'deploy' || (mode === 'dev' && inCI)) args = ['deploy', ...extra];
else if (mode === 'preview') args = ['versions', 'upload', ...extra];
else args = ['dev', ...extra];

const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const r = spawnSync(cmd, ['--no-install', 'wrangler', ...args], { stdio: 'inherit', env: { ...process.env, WRANGLER_SEND_METRICS: 'false' } });
process.exit(r.status ?? 1);
