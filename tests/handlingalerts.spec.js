import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain("I am an alert box!")
        await dialog.accept()
    })

    await page.click('#alertBtn')
    await page.waitForTimeout(3000)
    

});

test('confirmation dialog alert with ok and cancel', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //enabling dilog handler //dialog window handler

  page.on('dialog', async dialog=>{
      expect(dialog.type()).toContain('confirm')
      expect(dialog.message()).toContain("Press a button!")
      await dialog.accept()// closing the dialog/alert by ok
      await dialog.dismiss()// closing by clicking cancel
  })

  await page.click('confirmBtn')

  await expect(page.locator('#demo')).toHaveText("You pressed OK!")
  
  await page.waitForTimeout(3000)

});