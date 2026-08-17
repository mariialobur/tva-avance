import { test, expect } from '@playwright/test';
import fs from 'node:fs';

fs.mkdirSync('screenshots',{recursive:true});

test('capture Level 2 visual references',async({page})=>{
  await page.setViewportSize({width:1440,height:1000});
  await page.goto('/');
  await expect(page.locator('#uxWorkbar')).toBeVisible();
  await page.screenshot({path:'screenshots/level2-desktop.png',fullPage:true});

  await page.setViewportSize({width:390,height:844});
  await page.reload();
  await expect(page.locator('#uxMobileVerify')).toBeHidden();
  await page.screenshot({path:'screenshots/level2-mobile.png',fullPage:true});
});
