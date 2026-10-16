import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const origin = process.env.TEST_URL || 'http://localhost:3016';
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();
const checks = [];
try {
  // 1. Header Collections disclosure dropdown
  await page.goto(`${origin}/`, { waitUntil: 'networkidle' });
  const collectionsBtn = page.getByRole('button', { name: 'Collections', exact: false });
  await collectionsBtn.click();
  const dropdown = page.locator('#header-collections-dropdown');
  assert.equal(await dropdown.isVisible(), true, 'collections dropdown opens on click');
  assert.equal(await dropdown.getByRole('menuitem').count(), 5, '4 sector items + All collections link');
  // Test Escape key closes dropdown
  await page.keyboard.press('Escape');
  assert.equal(await dropdown.isVisible(), false, 'Escape closes dropdown');
  // Re-open and click sector
  await collectionsBtn.click();
  assert.equal(await dropdown.isVisible(), true, 'reopens on click');
  await dropdown.getByRole('menuitem', { name: 'Hospitality', exact: false }).click();
  await page.waitForURL('**/products/?category=hospitality');
  checks.push('header collections disclosure dropdown, Escape key, and sector routing');

  // 2. Interactive SVG Garment Explorer on Homepage
  await page.goto(`${origin}/`, { waitUntil: 'networkidle' });
  const garmentRail = page.getByRole('tablist', { name: 'Workwear category selector' });
  assert.equal(await garmentRail.getByRole('tab').count(), 4, '4 SVG category tabs in rail');
  
  // Default is corporate
  assert.equal(await page.locator('#garment-tab-corporate').getAttribute('aria-selected'), 'true');
  assert.ok((await page.locator('.garment-spotlight-title').textContent()).includes('Corporate'));
  
  // Select Industrial tab
  await page.locator('#garment-tab-industrial').click();
  assert.equal(await page.locator('#garment-tab-industrial').getAttribute('aria-selected'), 'true');
  assert.ok((await page.locator('.garment-spotlight-title').textContent()).includes('Industrial'));
  assert.equal(await page.locator('.garment-svg-selected').count(), 1, 'active SVG garment highlighted');
  
  // Click explore collection in spotlight
  await page.locator('.garment-spotlight-actions').getByRole('link', { name: 'Explore collection' }).click();
  await page.waitForURL('**/products/?category=industrial');
  checks.push('interactive SVG garment explorer selection, spotlight update and collection handoff');

  // 3. Category filters and browser history
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

  // 4. Product enquiry form and mailto draft
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
  for (const expected of ['Test Buyer', 'buyer@example.com', 'Work overalls', '24', 'Navy & white. Logo placement: left chest.']) {
    assert.ok(body.includes(expected));
  }
  checks.push('product context, native form validation and encoded email draft');

  // 5. Message fallback, FAQ and hidden unconfirmed channels
  await page.goto(`${origin}/contact/?message=${encodeURIComponent('Aprons & chef jackets — sample enquiry')}`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.querySelector('#quote-details')?.value.includes('Aprons & chef jackets'));
  await page.getByText('What should I include in my enquiry?', { exact: true }).click();
  assert.equal(await page.locator('details').first().getAttribute('open'), '');
  assert.equal(await page.locator('a[href^="tel:"], a[href*="wa.me"]').count(), 0, 'unconfirmed channels not published');
  checks.push('message fallback, FAQ and hidden unconfirmed channels');

  // 6. Invalid category recovery
  await page.goto(`${origin}/products/?category=not-a-category`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.querySelectorAll('.collection-grid > section').length === 4);
  assert.equal(await page.locator('.product-row').count(), 16);
  checks.push('invalid category recovers to all four collections');

  // 7. Lookbook cards and enquiry handoff
  await page.goto(`${origin}/work/`, { waitUntil: 'networkidle' });
  assert.equal(await page.locator('.lookbook-card').count(), 6, '6 curated lookbook items render');
  assert.equal(await page.locator('.lookbook-lane-badge').isVisible(), true, 'concept notice badge present');
  await page.getByRole('link', { name: 'Enquire', exact: true }).first().click();
  await page.waitForURL('**/contact/?product=**');
  const prefilledProduct = await page.locator('#quote-garment').inputValue();
  assert.ok(prefilledProduct.length > 0, 'product prefilled from lookbook enquire click');
  checks.push('lookbook 6 curated cards, concept lane badge and enquiry handoff');

  // 8. Missing route 404
  const notFound = await page.goto(`${origin}/does-not-exist/`, { waitUntil: 'networkidle' });
  assert.equal(notFound.status(), 404);
  checks.push('missing route returns HTTP 404');

  console.log(JSON.stringify({ status: 'pass', checks }, null, 2));
} finally {
  await browser.close();
}
