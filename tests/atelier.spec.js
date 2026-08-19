import {test,expect} from '@playwright/test';

const closingFields={d200:'15000',d303:'15000',d383base:'10000',d383tax:'810',d399:'2025',d400:'2010',d420:'1800',d479:'210',netDue:'1815',d900:'25000'};

async function clean(page){await page.goto('/');await page.evaluate(()=>localStorage.clear());await page.reload()}

test('Level 2 exposes two autonomous professional ateliers without changing 18-dossier progression',async({page})=>{
  await clean(page);
  const launcher=page.locator('#level2Ateliers');
  await expect(launcher).toBeVisible();
  await expect(launcher).toContainText('Revue TVA & bouclement');
  await expect(launcher.getByRole('button',{name:'Atelier Revue TVA'})).toBeVisible();
  await expect(launcher.getByRole('button',{name:'Atelier Bouclement'})).toBeVisible();
  await expect(page.locator('#globalProgress')).toContainText('0 / 18');
});

test('Revue TVA atelier validates all eight review points and the professional document set',async({page})=>{
  await clean(page);
  await page.getByRole('button',{name:'Atelier Revue TVA'}).click();
  const dialog=page.locator('#level2ReviewDialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('[data-review-card]')).toHaveCount(8);
  for(const card of await dialog.locator('[data-review-card]').all()) await card.locator('input[type="radio"][value="1"]').check();
  for(const id of ['cloudInvoice','dte','lease','subsidy','ledger','t2']) await dialog.locator(`[data-review-doc="${id}"]`).check();
  await dialog.locator('[data-review-check]').click();
  await expect(dialog.locator('#level2ReviewResult')).toContainText('100 %');
  await expect(dialog.locator('#level2ReviewResult')).toContainText('Tous les contrôles du scénario sont cohérents');
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('tva_avance_atelier_review_v1')));
  expect(saved.bestScore).toBe(100);
  await expect(page.locator('#globalProgress')).toContainText('0 / 18');
});

test('Bouclement atelier reconstructs only the annual differences and reconciles the net amount due',async({page})=>{
  await clean(page);
  await page.getByRole('button',{name:'Atelier Bouclement'}).click();
  const dialog=page.locator('#level2ClosingDialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('[data-closing-field]')).toHaveCount(10);
  for(const [key,value] of Object.entries(closingFields)) await dialog.locator(`[data-closing-field="${key}"]`).fill(value);
  for(const fieldset of await dialog.locator('[data-closing-question]').all()) await fieldset.locator('input[type="radio"][value="0"]').check();
  await dialog.locator('[data-closing-check]').click();
  await expect(dialog.locator('#level2ClosingResult')).toContainText('100 %');
  await expect(dialog.locator('#level2ClosingResult')).toContainText('CHF 1’815.00');
  await expect(dialog.locator('#level2ClosingResult')).toContainText('différences, pas les totaux annuels complets');
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('tva_avance_atelier_closing_v1')));
  expect(saved.bestScore).toBe(100);
});
