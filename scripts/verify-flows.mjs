import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const origin = process.env.TEST_URL || 'http://localhost:3016';
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();
const checks = [];
try {
  await page.goto(`${origin}/products/?category=hospitality`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.querySelectorAll('.collection-grid > section').length === 1);
  assert.equal(await page.getByRole('button', { name: 'Hospitality', exact: true }).getAttribute('aria-pressed'), 'true');
  assert.equal(await page.locator('.product-row').count(), 4);
  await page.getByRole('button', { name: 'Industrial', exact: true }).click();
  await page.waitForURL('**/products/?category=industrial');
  assert.equal(await page.locator('.product-row').count(), 4);
  await page.goBack();
  await page.waitForURL('**/products/?category=hospitality');
  await page.waitForFunction(() => document.querySelector('button[aria-pressed="true"]')?.textContent === 'Hospitality');
  await page.goForward();
  await page.waitForFunction(() => document.querySelector('button[aria-pressed="true"]')?.textContent === 'Industrial');
  checks.push('query filter, browser Back and Forward');

  await page.getByRole('link', { name: 'Enquire about Work overalls', exact: true }).click();
  await page.waitForURL('**/contact/?product=Work%20overalls');
  await page.waitForFunction(() => document.querySelector('#quote-garment')?.value === 'Work overalls');
  const form = page.locator('form');
  assert.equal(await form.evaluate((element) => element.checkValidity()), false, 'empty form rejected');
  await page.getByLabel('Your name', { exact: true }).fill('Test Buyer');
  await page.getByLabel('Email', { exact: true }).fill('buyer@example.com');
  await page.getByLabel('Quantity', { exact: false }).fill('0');
  assert.equal(await form.evaluate((element) => element.checkValidity()), false, 'zero quantity rejected');
  await page.getByLabel('Quantity', { exact: false }).fill('24');
  await page.getByLabel('Tell us about your team', { exact: false }).fill('Navy & white. Logo placement: left chest.');
  assert.equal(await form.evaluate((element) => element.checkValidity()), true, 'valid enquiry accepted');
  // Observe the prepared draft only. Do not send email or launch a mail client in this test.
  await page.evaluate(() => addEventListener('click', (event) => {
    if (event.target.closest?.('a[href^="mailto:"]')) event.preventDefault();
  }, true));
  await page.getByRole('button', { name: 'Open email draft', exact: true }).click();
  const draftLink = page.getByRole('link', { name: 'Open draft again', exact: false });
  await draftLink.waitFor();
  const draft = new URL(await draftLink.getAttribute('href'));
  assert.equal(draft.protocol, 'mailto:');
  assert.equal(draft.pathname, 'qworkwearsolution@gmail.com');
  assert.match(draft.searchParams.get('subject'), /Work overalls/);
  const body = draft.searchParams.get('body');
  for (const expected of ['Test Buyer', 'buyer@example.com', 'Work overalls', '24', 'Navy & white. Logo placement: left chest.']) assert.ok(body.includes(expected));
  checks.push('product context, native form validation and encoded email draft');

  await page.goto(`${origin}/contact/?message=${encodeURIComponent('Aprons & chef jackets — sample enquiry')}`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.querySelector('#quote-details')?.value.includes('Aprons & chef jackets'));
  await page.getByText('What should I include in my enquiry?', { exact: true }).click();
  assert.equal(await page.locator('details').first().getAttribute('open'), '');
  assert.equal(await page.locator('a[href^="tel:"], a[href*="wa.me"]').count(), 0, 'unconfirmed channels not published');
  checks.push('message fallback, FAQ and hidden unconfirmed channels');

  await page.goto(`${origin}/products/?category=not-a-category`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.querySelectorAll('.collection-grid > section').length === 4);
  assert.equal(await page.locator('.product-row').count(), 16);
  checks.push('invalid category recovers to all four collections');

  const notFound = await page.goto(`${origin}/does-not-exist/`, { waitUntil: 'networkidle' });
  assert.equal(notFound.status(), 404);
  checks.push('missing route returns HTTP 404');
  console.log(JSON.stringify({ status: 'pass', checks }, null, 2));
} finally {
  await browser.close();
}
