import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#male').check()

    await expect(page.locator('#male')).toBeChecked()
    await expect(page.locator('#female')).not.toBeChecked()

    await page.locator('#female').check()
    await expect(page.locator('#male')).not.toBeChecked()

});

