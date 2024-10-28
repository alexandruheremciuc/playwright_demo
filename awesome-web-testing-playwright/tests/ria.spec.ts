import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://riasolutionsgroup.com/');
  await page.getByRole('link', { name: 'Services ' }).click();
  await page.locator('section').filter({ hasText: 'Application modernization' }).getByRole('link').nth(2).click();
  await page.locator('#wrapper-navbar').getByRole('link', { name: 'Expertise' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.goto('https://riasolutionsgroup.com/contact/');
});