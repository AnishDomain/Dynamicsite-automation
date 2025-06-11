const {test,expect} = require('@playwright/test')

test('mouse hover', async ({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")

      await page.locator('button[ondblclick="myFunction1()"]').dblclick()
      await expect(page.locator('#field2')) .toHaveText("Hello World!") //asserting
})