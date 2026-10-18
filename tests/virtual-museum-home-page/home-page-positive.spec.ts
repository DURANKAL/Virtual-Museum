// Story: US-001 | Plan: specs/virtual-museum-home-page-test-plan.md | Date: 2026-10-19
import { test, expect } from '@playwright/test';
import { exhibitPage, homePage } from '../helpers/virtual-museum-home-page-locators';

test.describe('Home page - positive', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-001: Homepage loads with a meaningful page title [AC-1] @smoke @regression', async ({ page }) => {
    // Expected: the homepage loads with a meaningful museum title
    await test.step('Check the homepage title', async () => {
      await expect(page).toHaveTitle(/museum/i);
    });
  });

  test('TC-002: One main heading welcomes visitors to the Virtual Museum [AC-2] @smoke @regression', async ({ page }) => {
    // Expected: one level-one heading welcomes visitors to the Virtual Museum
    await test.step('Check the main heading', async () => {
      await expect(homePage.mainHeading(page)).toHaveCount(1);
      await expect(homePage.mainHeading(page)).toBeVisible();
    });
  });

  test('TC-003: History, art and culture tagline appears below the heading [AC-3] @smoke @regression', async ({ page }) => {
    // Expected: the tagline is visible beneath the main heading
    await test.step('Check the tagline', async () => {
      await expect(homePage.mainHeading(page)).toBeVisible();
      await expect(homePage.tagline(page)).toBeVisible();
    });
  });

  test('TC-004: Explore Exhibits opens the Exhibit page [AC-4] @smoke @regression', async ({ page }) => {
    // Expected: activating the visible Explore Exhibits link opens the Exhibit page
    await test.step('Open the Exhibit page from the homepage', async () => {
      await expect(homePage.exploreExhibits(page)).toBeVisible();
      await expect(homePage.exploreExhibits(page)).toBeEnabled();
      await homePage.exploreExhibits(page).click();
      await expect(page).toHaveURL(/\/exhibit\.html$/);
      await expect(page).toHaveTitle('Exhibit - Virtual Museum');
      await expect(exhibitPage.heading(page)).toBeVisible();
    });
  });
});
