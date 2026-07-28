// Regenerates the README screenshots in this folder by driving a real assessment:
// it fills in all 24 questions with the PROFILE below, then shoots the Results tab.
//
//   npm run dev &                                    # vite, defaults to :5173
//   npm i -D puppeteer                               # or point CHROME_PATH at an existing Chrome
//   node docs/screenshots.mjs docs http://localhost:5173/
//
// Change PROFILE and the README alt text needs updating too — it describes this
// specific shape.

import puppeteer from 'puppeteer'
import { mkdirSync } from 'node:fs'

const OUT = process.argv[2]
const URL = process.argv[3]
mkdirSync(OUT, { recursive: true })

// A plausible mid-maturity institution: some traction on metrics and exchange of
// practice, little on resourcing and communication — so the radar has a real shape
// instead of a flat ring. Values are answer levels (L0–L5) per question.
const PROFILE = {
  C1: [3, 2, 3, 2, 1, 2], C2: [2, 1], C3: [4, 3], C4: [3], C5: [1, 1],
  C6: [2, 2, 1, 3], C7: [3, 2], C8: [4, 3], C9: [1], C10: [2, 2],
}

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: process.env.CHROME_PATH || undefined,
  defaultViewport: { width: 1280, height: 1000, deviceScaleFactor: 2 },
})
const page = await browser.newPage()
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 })

await page.evaluate(() => {
  const input = document.querySelector('input[placeholder*="Institution"]')
  if (input) {
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
    setter.call(input, 'Example University')
    input.dispatchEvent(new Event('input', { bubbles: true }))
  }
  ;[...document.querySelectorAll('button')]
    .find(b => b.innerText.includes('Go to questionnaire'))?.click()
})
await new Promise(r => setTimeout(r, 1200))

const progress = await page.evaluate(async profile => {
  const sleep = ms => new Promise(r => setTimeout(r, ms))
  const groupsNow = () => {
    const opts = [...document.querySelectorAll('button')]
      .filter(b => /\bL[0-5]\s*$/.test(b.innerText.trim()))
    const g = []
    for (let i = 0; i < opts.length; i += 6) g.push(opts.slice(i, i + 6))
    return g
  }
  for (const [code, levels] of Object.entries(profile)) {
    const tab = [...document.querySelectorAll('button')]
      .find(b => new RegExp('^' + code + '\\n').test(b.innerText))
    if (!tab) continue
    tab.click()
    await sleep(400)
    for (let i = 0; i < levels.length; i++) {
      const g = groupsNow() // the list re-renders on every answer, so re-query each time
      if (!g[i]) break
      g[i][levels[i]].click()
      await sleep(300)
    }
  }
  return (document.body.innerText.match(/Progress:\s*\d+\/24/) || ['?'])[0]
}, PROFILE)
console.log(progress)

await page.evaluate(() => {
  ;[...document.querySelectorAll('button, a')]
    .find(b => /^4\s*\n?\s*Results/.test(b.innerText.trim()))?.click()
})
await page.waitForFunction(() => document.body.innerText.includes('Maturity Profile'), { timeout: 30000 })
await new Promise(r => setTimeout(r, 2000))

await page.evaluate(() => {
  document.querySelectorAll('*').forEach(el => {
    const cs = getComputedStyle(el)
    const h = el.getBoundingClientRect().height
    if ((cs.position === 'sticky' || cs.position === 'fixed') && h > 20 && h < 200) {
      el.style.visibility = 'hidden'
    }
  })
})

const shots = [
  ['maturity-profile.png', 'Maturity Profile'],
  ['maturity-by-commitment.png', 'Maturity by commitment'],
  ['recommended-actions.png', 'recommended actions'],
]
for (const [file, heading] of shots) {
  const handle = await page.evaluateHandle(h => {
    const hit = [...document.querySelectorAll('h1,h2,h3,h4')]
      .find(x => x.innerText.trim().toLowerCase().includes(h.toLowerCase()))
    // the heading sits in a flex row; climb until we reach the card that holds the content
    let card = hit
    while (card && card.getBoundingClientRect().height < 250) card = card.parentElement
    card?.scrollIntoView({ block: 'center' })
    return card
  }, heading)
  const el = handle.asElement()
  if (!el) { console.log(`SKIP ${file}`); continue }
  await new Promise(r => setTimeout(r, 500))
  await el.screenshot({ path: `${OUT}/${file}` })
  console.log(`OK   ${file}`)
}

await browser.close()
