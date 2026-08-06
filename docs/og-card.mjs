// Regenerates public/og-card.png — the 1200x630 image link previews show
// (LinkedIn, Bluesky, Mastodon, Slack, X). The app is client-rendered, so a
// crawler that does not run JS sees only <head>: without this file a shared
// link is a bare text row.
//
//   npm i -D puppeteer          # or point CHROME_PATH at an existing Chrome
//   node docs/og-card.mjs
//
// It composes the radar screenshot from docs/ into a card in the house style.
// Regenerate it whenever docs/maturity-profile.png is regenerated, or the
// preview will show last month's radar.

import puppeteer from 'puppeteer'
import { readFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'public', 'og-card.png')
mkdirSync(join(ROOT, 'public'), { recursive: true })

const dataUri = (path, mime) =>
  `data:${mime};base64,${readFileSync(join(ROOT, path)).toString('base64')}`

// Self-hosted, like the app: no font CDN reaches this render either.
const inter = dataUri('src/assets/fonts/inter-latin-wght-normal.woff2', 'font/woff2')
const radar = dataUri('docs/maturity-profile.png', 'image/png')

const html = `<!doctype html>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: 'Inter'; font-style: normal; font-weight: 100 900;
    font-display: block; src: url(${inter}) format('woff2-variations');
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  /* No coloured top band: the family reserves coloured edges for items that carry
     a status, and brand violet never encodes meaning. The brand shows up where it
     belongs — the eyebrow and the link — over the same paper surface as the app. */
  body {
    width: 1200px; height: 630px; display: flex; overflow: hidden;
    font-family: 'Inter', sans-serif; background: #fbfaff; color: #1a1730;
  }
  .text { flex: 1 1 auto; padding: 64px 0 56px 72px; display: flex; flex-direction: column; }
  .eyebrow {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 19px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
    color: #6d4aff; margin-bottom: 26px;
  }
  h1 { font-size: 72px; line-height: 1.02; font-weight: 700; letter-spacing: -0.03em; }
  p { font-size: 28px; line-height: 1.42; color: #4a4568; margin-top: 26px; max-width: 19em; }
  .spacer { flex: 1 1 auto; }
  .foot {
    display: flex; align-items: center; gap: 12px; white-space: nowrap;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 17px; color: #4a4568;
  }
  .foot .url { color: #6d4aff; font-weight: 600; }
  .foot .dot { color: #c9c3e4; }
  .art {
    flex: 0 0 452px; position: relative; display: flex; align-items: center;
    justify-content: center; background: #f2effd; border-left: 1px solid #e2ddf5;
  }
  .art img {
    width: 372px; border-radius: 14px; border: 1px solid #e2ddf5; background: #fff;
    box-shadow: 0 18px 44px rgba(40, 24, 110, 0.16);
  }
</style>
<div class="text">
  <div class="eyebrow">Research assessment reform</div>
  <h1>CoARA Action<br>Planner</h1>
  <p>Self-assess against the ten CoARA commitments and draft a prioritised action plan — in your browser.</p>
  <div class="spacer"></div>
  <div class="foot">
    <span class="url">rijdho.github.io/coara-action-planner</span>
    <span class="dot">·</span><span>EN / ES / FR / DE</span>
  </div>
</div>
<div class="art"><img src="${radar}" alt=""></div>`

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: process.env.CHROME_PATH || undefined,
  defaultViewport: { width: 1200, height: 630, deviceScaleFactor: 1 },
})
const page = await browser.newPage()
await page.setContent(html, { waitUntil: 'load' })
await page.evaluate(() => document.fonts.ready)
await page.screenshot({ path: OUT })
await browser.close()
console.log(`OK   ${OUT}`)
