import { expect, test } from "@playwright/test";

test("sum", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/", {
        waitUntil: 'networkidle'
    });

    const a = 30;
    const b = 20;

    await page.getByPlaceholder("Please enter first value").fill(a.toString());

    await page.getByPlaceholder("Please enter second value").fill(b.toString());

    await page.getByRole("button", { name: "Get Sum" }).click();

    await expect(page.locator("#addmessage")).toBe((a + b).toString());

});