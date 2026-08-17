import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{await page.goto('/');await page.evaluate(()=>localStorage.clear());await page.reload()});

test('loads the 18-dossier Level 2 parcours',async({page})=>{
  await expect(page.getByRole('heading',{name:'TVA suisse — pratique avancée'})).toBeVisible();
  await expect(page.locator('#globalProgress')).toContainText('0 / 18');
  await expect(page.locator('#caseSelect option')).toHaveCount(18);
  await expect(page.locator('#tabs button')).toHaveCount(18);
});

test('can navigate to the new professional dossiers',async({page})=>{
  const tabs=page.locator('#tabs button');
  await tabs.nth(9).click();
  await expect(page.locator('#sidebar')).toContainText('Alpina Distribution');
  await tabs.nth(17).click();
  await expect(page.locator('#sidebar')).toContainText('Fiduciaire Horizon');
});

test('memo exposes professional-control topics',async({page})=>{
  await page.getByRole('button',{name:'Mémo avancé'}).click();
  await expect(page.getByText('Grand livre → décompte',{exact:true})).toBeVisible();
  await expect(page.getByText('Importation, acquisition et DTe',{exact:true})).toBeVisible();
});
