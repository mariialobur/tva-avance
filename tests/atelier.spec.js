import {test,expect} from '@playwright/test';

const reviewAnswers={subsidy200:'0',export220:'1',france221:'2',cloud383:'3',dte:'1',option205:'2',sub420:'0',period:'3'};
const closingFields={d200:'15000',d303:'15000',d383base:'10000',d383tax:'810',d399:'2025',d400:'2010',d420:'1800',d479:'210',netDue:'1815',d900:'25000'};
const closingAnswers={annualOnlyDiff:'0',isolatedT2:'1',deadline180:'2'};

async function clean(page){await page.goto('/');await page.evaluate(()=>localStorage.clear());await page.reload()}

test('Level 2 exposes two declaration-focused synthesis exercises without changing 18-dossier progression',async({page})=>{
  await clean(page);
  const launcher=page.locator('#level2Ateliers');
  await expect(launcher).toBeVisible();
  await expect(launcher).toContainText('Corriger un décompte & traiter une concordance');
  await expect(launcher).toContainText('sans audit de dossier');
  await expect(launcher.getByRole('button',{name:'Décompte à corriger'})).toBeVisible();
  await expect(launcher.getByRole('button',{name:'Rectificatif / concordance'})).toBeVisible();
  await expect(page.locator('#globalProgress')).toContainText('0 / 18');
});

test('declaration correction exercise validates eight direct corrections without a document-audit step',async({page})=>{
  await clean(page);
  await page.getByRole('button',{name:'Décompte à corriger'}).click();
  const dialog=page.locator('#level2ReviewDialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('[data-review-card]')).toHaveCount(8);
  await expect(dialog.locator('[data-review-doc]')).toHaveCount(0);
  for(const [id,value] of Object.entries(reviewAnswers)) await dialog.locator(`input[name="review-${id}"][value="${value}"]`).check();
  await dialog.locator('[data-review-check]').click();
  await expect(dialog.locator('#level2ReviewResult')).toContainText('100 %');
  await expect(dialog.locator('#level2ReviewResult')).toContainText('Décompte corrigé');
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('tva_avance_atelier_review_v1')));
  expect(saved.scope).toBe('declaration-review-v2');
  expect(saved.bestScore).toBe(100);
  await expect(page.locator('#globalProgress')).toContainText('0 / 18');
});

test('rectificatif/concordance exercise reconstructs declaration differences and net amount due',async({page})=>{
  await clean(page);
  await page.getByRole('button',{name:'Rectificatif / concordance'}).click();
  const dialog=page.locator('#level2ClosingDialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('[data-closing-field]')).toHaveCount(10);
  for(const [key,value] of Object.entries(closingFields)) await dialog.locator(`[data-closing-field="${key}"]`).fill(value);
  for(const [id,value] of Object.entries(closingAnswers)) await dialog.locator(`input[name="closing-${id}"][value="${value}"]`).check();
  await dialog.locator('[data-closing-check]').click();
  await expect(dialog.locator('#level2ClosingResult')).toContainText('100 %');
  await expect(dialog.locator('#level2ClosingResult')).toContainText('CHF 1’815.00');
  await expect(dialog.locator('#level2ClosingResult')).toContainText('Déclaration cohérente');
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('tva_avance_atelier_closing_v1')));
  expect(saved.scope).toBe('declaration-closing-v2');
  expect(saved.bestScore).toBe(100);
});
