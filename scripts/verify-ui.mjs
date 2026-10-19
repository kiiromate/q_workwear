import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { ensureStaticServer } from './static-server-helper.mjs';

const origin = process.env.TEST_URL || 'http://127.0.0.1:3016';
const staticServer = await ensureStaticServer(origin);
const evidence = process.env.TEST_OUTPUT || '.impeccable/review';
const reviewScreenshotsDir = 'docs/review-evidence-2026-10-19/screenshots';
const routes = [
  '/',
  '/products/',
  '/work/',
  '/about/',
  '/contact/',
  '/fr/',
  '/fr/products/',
  '/fr/work/',
  '/fr/about/',
  '/fr/contact/',
];
const viewports = [320, 360, 375, 390, 768, 1024, 1050, 1051, 1440];
const browser = await chromium.launch({ headless: true });
const results = [];
await mkdir(evidence, { recursive: true });
await mkdir(reviewScreenshotsDir, { recursive: true });

try {
  for (const width of viewports) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    for (const route of routes) {
      const response = await page.goto(new URL(route, origin).href, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, `${route} response`);
      await page.evaluate(async () => {
        await document.fonts.ready;
        const images = [...document.images];
        images.forEach((image) => {
          image.loading = 'eager';
        });
        await Promise.all(images.map((image) => image.decode().catch(() => {})));
      });
      assert.equal(await page.locator('main h1').count(), 1, `${route}: one main heading`);
      const expectedLang = route.startsWith('/fr/') ? 'fr' : 'en';
      const state = await page.evaluate(() => ({
        lang: document.documentElement.lang,
        overflow: document.documentElement.scrollWidth > innerWidth,
        failedImages: [...document.images]
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.src),
        text: document.querySelector('main').innerText,
      }));
      assert.equal(state.lang, expectedLang, `${route} html[lang] at ${width}px`);
      assert.equal(state.overflow, false, `${route} overflow at ${width}px`);
      assert.deepEqual(state.failedImages, [], `${route} broken images`);
      assert.doesNotMatch(
        state.text,
        /\b(Ethos|Pathos|Logos|provisional|demonstration only|draft narrative|pending client|EN ISO 20471|300 GSM|interactive vector silhouettes|Curated uniform study|micro-prismatic|3D puff embroidery|Oxford shirts)\b/i,
        `${route} editorial leaks`,
      );
      const axe = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      assert.deepEqual(
        axe.violations.map(({ id, nodes }) => ({ id, targets: nodes.map((node) => node.target) })),
        [],
        `${route} accessibility at ${width}px`,
      );
      if (width === 390 || width === 1440) {
        await page.evaluate(() => scrollTo(0, 0));
        const slug =
          route === '/'
            ? width === 390
              ? 'mobile'
              : 'desktop'
            : route === '/fr/'
              ? `fr-home-${width}`
              : `${route.replace(/^\/|\/$/g, '').replace(/\//g, '-')}-${width}`;
        await page.screenshot({ path: `${evidence}/${slug}.png`, fullPage: true });
        await page.screenshot({ path: `${reviewScreenshotsDir}/${slug}.png`, fullPage: true });
      }
      results.push({ route, width, lang: state.lang, status: 'pass' });
    }
    assert.deepEqual(errors, [], `browser errors at ${width}px`);
    await page.close();
  }

  // Mobile navigation checks (EN and FR)
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(origin, { waitUntil: 'networkidle' });
  const toggle = page.getByRole('button', { name: 'Open navigation', exact: true });
  await toggle.click();
  assert.equal(await page.locator('#mobile-navigation').evaluate((dialog) => dialog.open), true, 'mobile menu opens');
  await page.keyboard.press('Tab');
  assert.equal(
    await page.locator('#mobile-navigation').evaluate((dialog) => dialog.contains(document.activeElement)),
    true,
    'focus remains in dialog',
  );
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#mobile-navigation').evaluate((dialog) => dialog.open), false, 'Escape closes menu');
  assert.equal(await toggle.evaluate((element) => document.activeElement === element), true, 'menu restores focus');
  await toggle.click();
  await page
    .getByRole('navigation', { name: 'Mobile navigation', exact: true })
    .getByRole('link', { name: 'Contact', exact: true })
    .click();
  await page.waitForURL('**/contact/');
  assert.equal(
    await page.locator('#mobile-navigation').evaluate((dialog) => dialog.open),
    false,
    'navigation closes menu',
  );
  results.push({ interaction: 'mobile navigation, focus containment, Escape and route change', status: 'pass' });
  await page.close();
  await writeFile(`${evidence}/ui-results.json`, JSON.stringify(results, null, 2));
  console.log(
    JSON.stringify(
      {
        status: 'pass',
        layoutChecks: results.filter((result) => result.route).length,
        interactions: results.filter((result) => result.interaction),
        evidence,
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
  await staticServer.close();
}
