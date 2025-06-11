import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#singleFileInput').setInputFiles('/tests/upload files/test (1).pdf')

    await page.waitForTimeout(4000)
    


});