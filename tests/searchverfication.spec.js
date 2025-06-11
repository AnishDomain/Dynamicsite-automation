import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('.wikipedia-search-input').fill('mango')
    await page.locator('.wikipedia-search-button').click()

    const searchResults = await page.$$('#wikipedia-search-result-link a')
    let status = "fail"

    for (const element of searchResults) {
      const text = await element.textContent();  // or innerText()
    if (text && text.toLowerCase().includes("mango")) {
        status = "pass";
        
    }
}   

});

