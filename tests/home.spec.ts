import { test, expect } from '@playwright/test';

test.skip('homepage has correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/منصة ثمانية/);
});
