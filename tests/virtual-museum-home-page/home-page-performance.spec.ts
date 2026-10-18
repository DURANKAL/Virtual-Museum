// Story: US-001 | Plan: specs/virtual-museum-home-page-test-plan.md | Date: 2026-10-19
import { test, expect } from '@playwright/test';

test.describe('Home page - performance', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-005: Homepage loads without console errors or failed requests [AC-7] @smoke @regression', async ({ page }) => {
    // KNOWN DEFECT D-01
    test.fail(true, 'D-01: /favicon.ico returns 404 and produces a console error');

    // Expected: reloading the homepage produces no console errors or failed HTTP requests
    const consoleErrors: string[] = [];
    const failedResponses: string[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });
    page.on('response', (response) => {
      if (response.status() >= 400) {
        failedResponses.push(`${response.status()} ${response.url()}`);
      }
    });

    await test.step('Reload and inspect console and HTTP responses', async () => {
      await page.reload();
      expect(consoleErrors).toEqual([]);
      expect(failedResponses).toEqual([]);
    });
  });
});
