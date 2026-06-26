import { expect, test } from "@playwright/test";

test("confirm alert", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");

    page.once("dialog", async (dialog) => {
        console.log("Dialog Type:", dialog.type());
        console.log("Alert Message:", dialog.message());

        await dialog.accept("sriram");
    });

    await page.getByRole("button", { name: "Click Me" }).nth(2).click();

    await expect(page.locator('//p[@id="prompt-demo"]')).toContainText("sriram");

});