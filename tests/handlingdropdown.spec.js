import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#male').check()

    await expect(page.locator('#country')).selectOption('India')//based on name
    //await expect(page.locator('#country')).selectOption({value:"India"})//based on value

     const value = await expect(page.locator('#country')).textContent()
     await expect(value.includes('India')).toBeTruthy() //assertion

    

});

