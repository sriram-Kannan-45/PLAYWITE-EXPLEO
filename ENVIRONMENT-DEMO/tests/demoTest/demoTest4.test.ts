import { expect, test } from "@playwright/test";

test('confirm alert', async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.once('dialog', async dialog => {
        console.log("Alert message:", dialog.message());
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Click Me' }).nth(1).click();
    expect(page.locator('//p[@id="confirm-demo"]')).toContainText("OK");

});