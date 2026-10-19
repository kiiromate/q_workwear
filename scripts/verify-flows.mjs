import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { ensureStaticServer } from './static-server-helper.mjs';

const origin = process.env.TEST_URL || 'http://127.0.0.1:3016';
const staticServer = await ensureStaticServer(origin);
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();
const checks = [];
try {
  // 1. Header Collections disclosure dropdown + focus-exit regression check
  await page.goto(`${origin}/`, { waitUntil: 'networkidle' });
  const collectionsBtn = page.getByRole('button', { name: 'Collections', exact: false });
  await collectionsBtn.click();
  const dropdown = page.locator('#header-collections-dropdown');
  assert.equal(await dropdown.isVisible(), true, 'collections dropdown opens on click');
  assert.equal(await dropdown.getByRole('link').count(), 5, '4 sector links + All collections link');

  // Regression check: tabbing out of dropdown wrapper closes the dropdown automatically
  for (let i = 0; i < 6; i += 1) {
    await page.keyboard.press('Tab');
  }
  assert.equal(await dropdown.isVisible(), false, 'Tabbing past last dropdown link closes dropdown');

  // Test Escape key closes dropdown and restores focus to trigger button
  await collectionsBtn.click();
  assert.equal(await dropdown.isVisible(), true, 'collections dropdown reopens');
  await page.keyboard.press('Escape');
  assert.equal(await dropdown.isVisible(), false, 'Escape closes dropdown');
  assert.equal(
    await collectionsBtn.evaluate((el) => document.activeElement === el),
    true,
    'Escape returns focus to Collections button',
  );

  // Re-open and click sector
  await collectionsBtn.click();
  assert.equal(await dropdown.isVisible(), true, 'reopens on click');
  await dropdown.getByRole('link', { name: 'Hospitality', exact: false }).click();
  await page.waitForURL('**/products/?category=hospitality');
  checks.push('header collections disclosure dropdown, focus-exit close, Escape focus return, and sector routing');

  // 2. Interactive Homepage Hero Slideshow (prev/next, 01..04, pause/play, direct links)
  await page.goto(`${origin}/`, { waitUntil: 'networkidle' });
  assert.equal((await page.locator('#slide-count').textContent())?.trim(), '01 / 04');
  assert.equal((await page.locator('#hero-slide-title').textContent())?.trim(), 'Corporate uniforms');
  await page.locator('button[data-slide="1"]').click();
  assert.equal((await page.locator('#slide-count').textContent())?.trim(), '02 / 04');
  assert.equal((await page.locator('#hero-slide-title').textContent())?.trim(), 'Hospitality uniforms');
  await page.locator('#hero-next').click();
  assert.equal((await page.locator('#slide-count').textContent())?.trim(), '03 / 04');
  assert.equal((await page.locator('#hero-slide-title').textContent())?.trim(), 'Industrial workwear');
  await page.locator('#hero-prev').click();
  assert.equal((await page.locator('#slide-count').textContent())?.trim(), '02 / 04');
  const pauseBtn = page.locator('#hero-pause');
  const initialPaused = await pauseBtn.getAttribute('aria-pressed');
  await pauseBtn.click();
  assert.notEqual(await pauseBtn.getAttribute('aria-pressed'), initialPaused, 'pause/play button toggles aria-pressed');
  assert.equal(await page.locator('.hero-direct-links a').count(), 4, '4 static direct collection links in hero');
  checks.push('interactive hero slideshow prev/next, 01..04 slide selection, pause/play toggle, and direct collection links');

  // 3. Interactive SVG Garment Explorer + Regression Test for All 4 Tab-Panel DOM Targets + View Toggle
  const garmentRail = page.getByRole('tablist', { name: 'Workwear category selector' });
  assert.equal(await garmentRail.getByRole('tab').count(), 4, '4 SVG category tabs in rail');

  // Regression test: every tab's aria-controls resolves to a mounted tabpanel in DOM
  const tabTargetCheck = await page.evaluate(() => {
    const tabs = [...document.querySelectorAll('[role="tablist"] [role="tab"]')];
    return tabs.map((tab) => {
      const targetId = tab.getAttribute('aria-controls');
      const panel = targetId ? document.getElementById(targetId) : null;
      return {
        tabId: tab.id,
        targetId,
        exists: Boolean(panel),
        role: panel?.getAttribute('role'),
        hidden: panel?.hidden,
      };
    });
  });
  assert.equal(tabTargetCheck.length, 4);
  for (const item of tabTargetCheck) {
    assert.equal(item.exists, true, `${item.tabId} aria-controls target ${item.targetId} exists in DOM`);
    assert.equal(item.role, 'tabpanel', `${item.targetId} has role=tabpanel`);
  }

  // Default is corporate with roving tabindex=0
  assert.equal(await page.locator('#garment-tab-corporate').getAttribute('aria-selected'), 'true');
  assert.equal(await page.locator('#garment-tab-corporate').getAttribute('tabindex'), '0');
  assert.equal(await page.locator('#garment-tab-hospitality').getAttribute('tabindex'), '-1');
  assert.ok(
    (await page.locator('.garment-spotlight:not([hidden]) .garment-spotlight-title').textContent())?.includes(
      'Corporate',
    ),
  );

  // Hovering over another tab must NOT unexpectedly mutate selection
  await page.locator('#garment-tab-branded').hover();
  assert.equal(
    await page.locator('#garment-tab-corporate').getAttribute('aria-selected'),
    'true',
    'hover does not mutate active tab',
  );

  // Keyboard ArrowRight advances focus & selection from Corporate -> Hospitality
  await page.locator('#garment-tab-corporate').focus();
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.locator('#garment-tab-hospitality').getAttribute('aria-selected'), 'true');
  assert.equal(
    await page.locator('#garment-tab-hospitality').evaluate((el) => document.activeElement === el),
    true,
    'ArrowRight moves focus to next tab',
  );

  // Click Industrial tab and test view toggle (Garment example vs Construction & branding detail)
  await page.locator('#garment-tab-industrial').click();
  assert.equal(await page.locator('#garment-tab-industrial').getAttribute('aria-selected'), 'true');
  const activePanel = page.locator('#garment-panel-industrial');
  assert.ok((await activePanel.locator('.garment-spotlight-title').textContent())?.includes('Industrial'));
  assert.equal(await page.locator('.garment-svg-selected').count(), 1, 'active SVG garment highlighted');

  const detailToggleBtn = activePanel.getByRole('button', { name: 'Construction & branding detail' });
  const garmentToggleBtn = activePanel.getByRole('button', { name: 'Garment example' });
  assert.equal(await detailToggleBtn.getAttribute('aria-pressed'), 'true', 'detail view active by default to avoid hero duplication');
  await garmentToggleBtn.click();
  assert.equal(await garmentToggleBtn.getAttribute('aria-pressed'), 'true', 'garment example view toggled on');
  await detailToggleBtn.click();
  assert.equal(await detailToggleBtn.getAttribute('aria-pressed'), 'true', 'detail view toggled back on');

  // Click explore collection in spotlight
  await activePanel.locator('.garment-spotlight-actions').getByRole('link', { name: 'Explore collection' }).click();
  await page.waitForURL('**/products/?category=industrial');
  checks.push(
    'interactive SVG garment explorer all-4-tabpanels DOM resolution, keyboard roving focus, view toggle, and collection handoff',
  );

  // 4. Category filters and browser history
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

  // 5. Product enquiry form, mailto draft, and Regression Test for Live Draft Updates after Edits
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

  await page.evaluate(() =>
    addEventListener(
      'click',
      (event) => {
        if (event.target.closest?.('a[href^="mailto:"]')) event.preventDefault();
      },
      true,
    ),
  );
  await page.getByRole('button', { name: 'Open email draft', exact: true }).click();
  const draftLink = page.getByRole('link', { name: 'Open draft again', exact: false });
  await draftLink.waitFor();
  const draft = new URL(await draftLink.getAttribute('href'));
  assert.equal(draft.protocol, 'mailto:');
  assert.equal(draft.pathname, 'qworkwearsolution@gmail.com');
  assert.match(draft.searchParams.get('subject'), /Work overalls/);
  const body = draft.searchParams.get('body');
  for (const expected of [
    'Test Buyer',
    'buyer@example.com',
    'Work overalls',
    '24',
    'Navy & white. Logo placement: left chest.',
  ]) {
    assert.ok(body.includes(expected));
  }

  // Regression test: edit fields after initial submit WITHOUT clicking submit again -> draftLink updates live!
  await page.getByLabel('Your name', { exact: true }).fill('Updated Buyer Name');
  await page.getByLabel('Quantity', { exact: false }).fill('48');
  await page.getByLabel('Tell us about your team', { exact: false }).fill('Updated note: 48 coveralls with sewn patch.');
  const updatedDraft = new URL(await draftLink.getAttribute('href'));
  const updatedBody = updatedDraft.searchParams.get('body');
  assert.ok(updatedBody.includes('Updated Buyer Name'), 'edited name immediately reflected in Open draft again');
  assert.ok(updatedBody.includes('48'), 'edited quantity immediately reflected in Open draft again');
  assert.ok(
    updatedBody.includes('Updated note: 48 coveralls with sewn patch.'),
    'edited details immediately reflected in Open draft again',
  );
  checks.push('product context, native form validation, encoded email draft, and live post-edit draft synchronization');

  // 6. Message fallback, FAQ and hidden unconfirmed channels
  await page.goto(`${origin}/contact/?message=${encodeURIComponent('Aprons & chef jackets — sample enquiry')}`, {
    waitUntil: 'networkidle',
  });
  await page.waitForFunction(() => document.querySelector('#quote-details')?.value.includes('Aprons & chef jackets'));
  await page.getByText('What should I include in my enquiry?', { exact: true }).click();
  assert.equal(await page.locator('details').first().getAttribute('open'), '');
  assert.equal(await page.locator('a[href^="tel:"], a[href*="wa.me"]').count(), 0, 'unconfirmed channels not published');
  checks.push('message fallback, FAQ and hidden unconfirmed channels');

  // 7. Invalid category recovery
  await page.goto(`${origin}/products/?category=not-a-category`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.querySelectorAll('.collection-grid > section').length === 4);
  assert.equal(await page.locator('.product-row').count(), 16);
  checks.push('invalid category recovers to all four collections');

  // 8. Lookbook cards and enquiry handoff
  await page.goto(`${origin}/work/`, { waitUntil: 'networkidle' });
  assert.equal(await page.locator('.lookbook-card').count(), 12, '12 photoreal lookbook items render');
  assert.equal(await page.locator('.lookbook-disclosure-note').isVisible(), true, 'single gallery disclosure note present');
  await page.getByRole('link', { name: 'Enquire', exact: true }).first().click();
  await page.waitForURL('**/contact/?product=**');
  const prefilledProduct = await page.locator('#quote-garment').inputValue();
  assert.ok(prefilledProduct.length > 0, 'product prefilled from lookbook enquire click');
  checks.push('lookbook 12 photoreal cards, single gallery disclosure note and enquiry handoff');

  // 9. Complete EN/FR Language Switching & Context Preservation
  await page.goto(`${origin}/products/?category=industrial`, { waitUntil: 'networkidle' });
  await page.locator('.header-actions .lang-switcher').getByRole('link', { name: 'Passer le site en français' }).click();
  await page.waitForURL('**/fr/products/?category=industrial');
  assert.equal(await page.evaluate(() => document.documentElement.lang), 'fr');
  assert.equal(
    await page.getByRole('button', { name: 'Industrie & chantier', exact: true }).getAttribute('aria-pressed'),
    'true',
  );

  // Navigate to French contact page with product, fill in-progress enquiry, and switch to English
  await page.goto(`${origin}/fr/contact/?product=Combinaisons%20de%20travail`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.querySelector('#quote-garment')?.value === 'Combinaisons de travail');
  await page.getByLabel('Votre nom', { exact: true }).fill('Jean Dupont');
  await page.getByLabel('E-mail', { exact: true }).fill('jean@example.com');
  await page.getByLabel('Quantité', { exact: false }).fill('35');
  await page.getByLabel('Parlez-nous de votre équipe', { exact: false }).fill('Combinaisons marine pour atelier.');
  await page.locator('.header-actions .lang-switcher').getByRole('link', { name: 'Switch site language to English' }).click();
  await page.waitForURL((url) => url.pathname.endsWith('/contact/') && url.searchParams.get('product') === 'Work overalls');
  await page.waitForFunction(() => document.querySelector('#quote-name')?.value === 'Jean Dupont');
  assert.equal(await page.locator('#quote-email').inputValue(), 'jean@example.com');
  assert.equal(await page.locator('#quote-garment').inputValue(), 'Work overalls');
  assert.equal(await page.locator('#quote-quantity').inputValue(), '35');
  assert.equal(await page.locator('#quote-details').inputValue(), 'Combinaisons marine pour atelier.');
  assert.equal(page.url().includes('jean@example.com'), false, 'personal data never leaked into URL');
  checks.push('EN/FR language switching with category, product translation, and sessionStorage enquiry preservation');

  // 10. Missing route 404
  const notFound = await page.goto(`${origin}/does-not-exist/`, { waitUntil: 'networkidle' });
  assert.equal(notFound.status(), 404);
  checks.push('missing route returns HTTP 404');

  console.log(JSON.stringify({ status: 'pass', checks }, null, 2));
} finally {
  await browser.close();
  await staticServer.close();
}
