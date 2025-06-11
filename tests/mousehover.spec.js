const {test,expect} = require('@playwright/test')

test('mouse hover', async ({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")

      await page.locator('.dropbtn').hover()
})