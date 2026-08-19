import { test, expect } from '@playwright/test';

const ids='ABCDEFGHIJKLMNOPQR'.split('');
const masteredRecords=count=>Object.fromEntries(ids.slice(0,count).map(id=>[id,{bestEvaluationScore:100}]));

async function clean(page){await page.goto('/');await page.evaluate(()=>localStorage.clear());await page.reload()}

test('desktop: Level 2 exposes 18 dossiers through the scalable workbar and locks the final exam initially',async({page})=>{
  await clean(page);await expect(page.getByRole('heading',{name:'TVA suisse — méthode effective'})).toBeVisible();await expect(page.locator('.brand p')).toContainText('Niveau 2 · Pratique fiduciaire avancée');await expect(page.locator('#globalProgress')).toContainText('0 / 18');await expect(page.locator('#tabs button')).toHaveCount(18);await expect(page.locator('#tabs')).toBeHidden();await expect(page.locator('#uxWorkbar')).toBeVisible();await expect(page.locator('#caseSelect')).toBeVisible();await expect(page.locator('#caseSelect option')).toHaveCount(18);await expect(page.locator('#uxCaseCount')).toContainText('1 / 18');await expect(page.locator('#uxLevelPlanOpen')).toBeVisible();await expect(page.getByRole('button',{name:'Rubriques utiles'})).toBeVisible();await expect(page.locator('#startFinal')).toBeDisabled();await expect(page.locator('#finalEvaluation')).toContainText('Progression: 0/18')
});

test('Plan du niveau groups all 18 dossiers, reflects progress and opens a chosen dossier',async({page})=>{
  await clean(page);
  await page.evaluate(()=>localStorage.setItem('tva_avance_v1_state',JSON.stringify({records:{A:{bestEvaluationScore:100},B:{practiceAttempts:1}},drafts:{}})));
  await page.locator('#uxLevelPlanOpen').click();
  const dialog=page.getByRole('dialog',{name:'Plan du niveau'});
  await expect(dialog).toBeVisible();await expect(dialog).toContainText('1/18 maîtrisés');await expect(dialog.locator('[data-plan-case-index]')).toHaveCount(18);await expect(dialog.getByText('International, immobilier & financements',{exact:true})).toBeVisible();await expect(dialog.getByText('Contrôle, valeur & clôture',{exact:true})).toBeVisible();await expect(dialog.getByText('Maîtrisé ✓',{exact:true})).toHaveCount(1);await expect(dialog.getByText('En cours',{exact:true})).toHaveCount(1);
  await dialog.locator('[data-plan-case-index="17"]').click();await expect(dialog).toBeHidden();await expect(page.locator('#uxCaseCount')).toContainText('18 / 18');await expect(page.locator('#sidebar')).toContainText('Fiduciaire Horizon')
});

test('controlled SaaS variants stay compact by default, break the foreign-provider equals ch383 reflex and do not change 18-case progression',async({page})=>{
  await clean(page);const panel=page.locator('#controlledVariantsA');await expect(panel).toBeVisible();await expect(panel).toContainText('Fournisseur étranger ≠ automatiquement ch. 383');await expect(panel.locator('.cv-card')).toHaveCount(0);await panel.getByRole('button',{name:'Ouvrir les variantes'}).click();await expect(panel.locator('.cv-card')).toBeVisible();
  await panel.locator('input[name="cv-AA"][value="0"]').check();await panel.getByRole('button',{name:'Vérifier la variante'}).click();await expect(panel).toContainText('1/3');await panel.getByRole('tab',{name:/A-B/}).click();await panel.locator('input[name="cv-AB"][value="1"]').check();await panel.getByRole('button',{name:'Vérifier la variante'}).click();await expect(panel).toContainText('2/3');await panel.getByRole('tab',{name:/A-C/}).click();await panel.locator('input[name="cv-AC"][value="1"]').check();await panel.getByRole('button',{name:'Vérifier la variante'}).click();await expect(panel).toContainText('3/3');await expect(page.locator('#globalProgress')).toContainText('0 / 18')
});

test('controlled SaaS variants are hidden during scored evaluation mode',async({page})=>{
  await clean(page);await expect(page.locator('#controlledVariantsA')).toBeVisible();await page.locator('[data-mode="evaluate"]').click();await expect(page.locator('#controlledVariantsA')).toHaveCount(0)
});

test('workbar previous/next and selector reach the professional dossiers',async({page})=>{
  await clean(page);await page.locator('#uxNextCase').click();await expect(page.locator('#uxCaseCount')).toContainText('2 / 18');await expect(page.locator('#sidebar')).toContainText('ImmoDev SA');await page.locator('#caseSelect').selectOption('9');await expect(page.locator('#sidebar')).toContainText('Alpina Distribution');await expect(page.locator('#uxCaseCount')).toContainText('10 / 18');await page.locator('#caseSelect').selectOption('17');await expect(page.locator('#sidebar')).toContainText('Fiduciaire Horizon');await expect(page.locator('#uxCaseCount')).toContainText('18 / 18');await expect(page.locator('#uxNextCase')).toBeDisabled()
});

test('mobile Verify becomes sticky only after the original advanced action is scrolled past',async({page})=>{
  await page.setViewportSize({width:390,height:844});await clean(page);await expect(page.locator('#uxWorkbar')).toBeVisible();await expect(page.locator('#caseSelect')).toBeVisible();await expect(page.locator('.ux-sidebar-toggle')).toBeVisible();await expect(page.locator('#sidebar .case-nav')).toBeHidden();await expect(page.locator('#uxMobileVerify')).toBeHidden();await page.locator('#caseSelect').selectOption('17');await expect(page.locator('#sidebar')).toContainText('Fiduciaire Horizon');await expect(page.locator('#sidebar')).toContainText('grand livre, corrections et concordance');await page.locator('#form').scrollIntoViewIfNeeded();await page.evaluate(()=>window.scrollBy(0,250));await expect(page.locator('#uxMobileVerify')).toBeVisible();await expect(page.locator('input[data-field="ch200"]')).toBeVisible();await expect(page.getByRole('heading',{name:'Décompte pédagogique — méthode effective'})).toBeVisible()
});

test('memo stays focused on declaration mechanics',async({page})=>{
  await clean(page);await page.getByRole('button',{name:'Mémo avancé'}).click();await expect(page.getByText('Réflexe déclaration en 60 secondes',{exact:true})).toBeVisible();await expect(page.getByText('Importation, acquisition et DTe',{exact:true})).toBeVisible();await expect(page.getByText('Personnes liées et compensations',{exact:true})).toBeVisible();await expect(page.getByText('Concordance annuelle et rectification',{exact:true})).toBeVisible();await expect(page.getByText('Réflexe déclaration',{exact:true})).toBeVisible()
});

test('shared progress combines Level 1 and Level 2 into 36 effective practices',async({page})=>{
  await page.addInitScript(({l1,l2})=>{localStorage.setItem('tva_effective_v2_state',JSON.stringify({records:l1}));localStorage.setItem('tva_avance_v1_state',JSON.stringify({records:l2}))},{l1:masteredRecords(4),l2:masteredRecords(5)});await page.goto('/');const bar=page.locator('#effectivePathProgress');await expect(bar).toContainText('Niveau 1 4/18');await expect(bar).toContainText('Niveau 2 5/18');await expect(bar).toContainText('Total 9/36')
});

test('18 mastered dossiers unlock a structured 15-question final evaluation',async({page})=>{
  await page.addInitScript(records=>{localStorage.setItem('tva_avance_v1_state',JSON.stringify({records}))},masteredRecords(18));await page.goto('/');await expect(page.locator('#globalProgress')).toContainText('18 / 18');await expect(page.locator('#startFinal')).toBeEnabled();await page.locator('#startFinal').click();await expect(page.locator('#avanceExamLayer')).toBeVisible();await expect(page.locator('#avanceExamLayer .exam-q')).toHaveCount(15);await expect(page.locator('#avanceExamLayer')).toContainText('5 blocs de compétences');await expect(page.locator('#avanceExamLayer')).toContainText('12/15')
});

test('legacy random-exam pass does not grant the new blueprint attestation',async({page})=>{
  await page.addInitScript(records=>{
    localStorage.setItem('tva_avance_v1_state',JSON.stringify({records}));
    localStorage.setItem('tva_avance_final_evaluation_v2',JSON.stringify({score:15,total:15,percent:100,passed:true,date:new Date().toISOString()}));
  },masteredRecords(18));
  await page.goto('/');
  await expect(page.locator('#startFinal')).toBeEnabled();
  await expect(page.locator('#openAttestation')).toHaveCount(0);
  expect(await page.evaluate(()=>localStorage.getItem('tva_avance_final_evaluation_v3_blueprint'))).toBeNull();
});
