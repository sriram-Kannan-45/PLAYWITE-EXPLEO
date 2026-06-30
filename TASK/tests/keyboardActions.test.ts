import { expect, test } from "@playwright/test";

test("keyboard action @key", async ({ page }) => {

    await page.goto("https://demoqa.com/text-box");

    const userName = page.locator("#userName");
    const email = page.locator("#userEmail");
    const currentAddress = page.locator("#currentAddress");
    const submit = page.locator("#submit");
    const output = page.locator("#output");

    await userName.click();
    await page.keyboard.type("Sriram Kannan");

    await page.keyboard.press("Tab");
    await page.keyboard.type("wave.init.45@gmail.com");

    await page.keyboard.press("Tab");
    await page.keyboard.type("Salem");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("bengalore");

    await submit.click();

    await expect(output).toBeVisible();

});