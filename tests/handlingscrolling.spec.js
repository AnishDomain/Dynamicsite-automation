const {test,expect} = require('@playwright/test')


test('mouse hover', async ({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")

      await page.locator('#comboBox').click()

      const item3 = page.locator('#dropdown .option').nth(2); // 0-based index

      await item3.scrollIntoViewIfNeeded();
      await item3.click();
     
     await expect(await page.locator('#comboBox')).toHaveText('item 3')//asserting

      await page.mouse.wheel(0,15)// scrolling by mouse scroller
      
})   