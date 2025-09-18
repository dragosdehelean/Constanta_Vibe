import { test, expect } from '@playwright/test';

test('pagina principala afiseaza titlul', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Bun venit in aplicatia Constanta Pass' })).toBeVisible();
});
