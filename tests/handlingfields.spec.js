import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#name').fill('manish')
    await page.locator('#email').fill('mago@gmail.com')
    await page.locator('#phone').fill('22232323')

    await page.locator('textarea.form-control').fill('kjnm,bmbxvcxvbxcvbmxcvm,cxbv')


});

