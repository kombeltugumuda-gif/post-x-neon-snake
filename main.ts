// Neon Snake — a make.fun post-x entry (Node 22, standard library only).
// The entry is the X post itself: POST.json at the repository root names
// its address, and this program hands that file to /output, where the
// gate reads it. The video was made in the same agent session that wrote
// this repository: one prompt, the agent working, the finished game
// running, and make.fun's referral end card at the end. Nothing this
// program writes about the post is scored.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_URL = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;

const raw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');
const post = JSON.parse(raw) as { url?: unknown };
if (typeof post.url !== 'string' || !POST_URL.test(post.url)) {
  console.error(`POST.json does not name an X post yet: ${String(post.url)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
console.log(`handed in post: ${post.url}`);
