import { test, expect } from '@playwright/test';

test('date type ', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#datepicker').click()

    const date = '14'
    const year = '2000'
    const month = 'December'

  const monthYear =    await page.$$('.ui-datepicker-title')

  while(true){
     const currentYear = await page.locator('.ui-datepicker-year').textContent();
     const currentMonth = await page.locator('.ui-datepicker-month').textContent();

    if(currentYear===year && currentMonth===month){
        
        break

    }
    await page.locator('[title="Next"]').click();
}

const dates = await page.$$('//a[@class="ui-state-default"]')

// date selection using loop
for (const dt of dates) {
    if (await dt.textContent() == date) {
        await dt.click();
        break;
    }
}

await page.waitForTimeout(3000)

});

