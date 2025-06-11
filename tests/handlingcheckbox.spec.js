import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('.form-check-input[type="checkbox"]').check()
    await expect(page.locator('.form-check-input[type="checkbox"]')).toBeChecked()

    await page.locator('.form-check-input[type="checkbox"]').uncheck()
    await expect(page.locator('.form-check-input[type="checkbox"]')).not.toBeChecked()
        
    await page.locator('#sunday').check()

    await page.locator('#moday').check()

    const checkboxes = await page.$$('.form-check-input[type="checkbox"]')
    const checkedElement = []

    for(const status of checkboxes){
        if(await page.locator(status).isChecked()){
            console.log(await status.getAttribute('id'))
            checkedElement.push(await status.getAttribute('id'))
        }
    } // asserting the checked elemnt and making sure rest remains unchecked
}); //making sure rest of the unchecked elements stays unchecked

