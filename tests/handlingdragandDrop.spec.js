const { test, expect } = require('@playwright/test');

test('Drag And Drop', async ({ page }) => {
  await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

   const from = await page.locator('#draggable')
   const to = await page.locator('#droppable')

   await expect(page.locator('#droppable>div')).toHaveText('Dropped!')//assertion

 

  await from.dragTo(to)

  await page.waitForTimeout(4000)
});
