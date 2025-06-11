const { test, expect } = require('@playwright/test');

test('Drag And Drop', async ({ page }) => {
  await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

const minHandle = await page.locator('.ui-slider-handle').first();
const sliderTrack = await page.locator('#slider-range');

const trackBox = await sliderTrack.boundingBox();
const handleBox = await minHandle.boundingBox();

if (handleBox && trackBox) {
  const initialX = handleBox.x;
  const trackStart = trackBox.x;
  const trackWidth = trackBox.width;

  // Move by 100px to the right
  const moveBy = 100;

  await page.mouse.move(handleBox.x + handleBox.width / 2, handleBox.y + handleBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(handleBox.x + moveBy, handleBox.y + handleBox.height / 2);
  await page.mouse.up();

  // Calculate new handle position
  const newBox = await minHandle.boundingBox();
  const newX = newBox?.x ?? 0;

  const pixelOffset = newX - trackStart;
  const totalRange = 1000; // Change this to your slider's actual max value

  const valueMovedTo = (pixelOffset / trackWidth) * totalRange;

  console.log(`Slider moved to approximately: ₹${Math.round(valueMovedTo)}`);
}

});
