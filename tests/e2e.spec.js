import { test, expect } from '@playwright/test';

const ids='ABCDEFGHIJKLMNOPQR'.split('');
const masteredRecords=count=>Object.fromEntries(ids.slice(0,count).map(id=>[id,{bestEvaluationScore:100}]));

async function clean(page){
  await page.goto('/');
  await page.evaluate(()=>localStorage.clear());
  await page.reload();
}

test('desktop: Level 2 exposes all 18 dossiers and locks the final exam initially',async({page})=>{
  await clean(page);
  await expect(page.getByRole('heading',{name:'TVA suisse — pratique avancée'})).toBeVisible();
  await expect(page.locator('#globalProgress')).toContainText('0 / 18');
  await expect(page.locator('#caseSelect option')).toHaveCount(18);
  await expect(page.locator('#tabs button')).toHaveCount(18);
  await expect(page.locator('#startFinal')).toBeDisabled();
  await expect(page.locator('#finalEvaluation')).toContainText('Progression: 0/18');
});

test('desktop navigation reaches the new professional dossiers',async({page})=>{
  await clean(page);
  const tabs=page.locator('#tabs button');
  await tabs.nth(9).click();
  await expect(page.locator('#sidebar')).toContainText('Alpina Distribution');
  await tabs.nth(17).click();
  await expect(page.locator('#sidebar')).toContainText('Fiduciaire Horizon');
});

test('mobile selector reaches the final control dossier and keeps the TVA form visible',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await clean(page);
  await expect(page.locator('#caseSelect')).toBeVisible();
  await page.locator('#caseSelect').selectOption('17');
  await expect(page.locator('#sidebar')).toContainText('Fiduciaire Horizon');
  await expect(page.locator('#sidebar')).toContainText('grand livre, corrections et concordance');
  await expect(page.locator('input[data-field="ch200"]')).toBeVisible();
  await expect(page.getByText('Vue pédagogique du décompte')).toBeVisible();
});

test('memo exposes professional-control topics',async({page})=>{
  await clean(page);
  await page.getByRole('button',{name:'Mémo avancé'}).click();
  await expect(page.getByText('Grand livre → décompte',{exact:true})).toBeVisible();
  await expect(page.getByText('Importation, acquisition et DTe',{exact:true})).toBeVisible();
  await expect(page.getByText('Personnes liées et compensations',{exact:true})).toBeVisible();
  await expect(page.getByText('Concordance annuelle et rectification',{exact:true})).toBeVisible();
});

test('shared progress combines Level 1 and Level 2 into 36 effective practices',async({page})=>{
  await page.addInitScript(({l1,l2})=>{
    localStorage.setItem('tva_effective_v2_state',JSON.stringify({records:l1}));
    localStorage.setItem('tva_avance_v1_state',JSON.stringify({records:l2}));
  },{l1:masteredRecords(4),l2:masteredRecords(5)});
  await page.goto('/');
  const bar=page.locator('#effectivePathProgress');
  await expect(bar).toContainText('Niveau 1 4/18');
  await expect(bar).toContainText('Niveau 2 5/18');
  await expect(bar).toContainText('Total 9/36');
});

test('18 mastered dossiers unlock a randomized 15-question final evaluation',async({page})=>{
  await page.addInitScript(records=>{
    localStorage.setItem('tva_avance_v1_state',JSON.stringify({records}));
  },masteredRecords(18));
  await page.goto('/');
  await expect(page.locator('#globalProgress')).toContainText('18 / 18');
  await expect(page.locator('#startFinal')).toBeEnabled();
  await page.locator('#startFinal').click();
  await expect(page.locator('#avanceExamLayer')).toBeVisible();
  await expect(page.locator('#avanceExamLayer .exam-q')).toHaveCount(15);
  await expect(page.locator('#avanceExamLayer')).toContainText('12/15');
});
