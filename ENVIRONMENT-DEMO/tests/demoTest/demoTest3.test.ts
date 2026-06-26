import { chromium, test } from '@playwright/test';

test('alerts', async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');

    page.once('dialog', async (dialog) => {
        console.log(dialog.type());
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.locator('(//button[text()="Click Me"])[1]').click();

    await page.waitForTimeout(3000);

    await browser.close();
});