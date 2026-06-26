import { expect, test } from "@playwright/test";

test('Handle new Window', async ({ page, context }) => {

    await page.goto("https://demoqa.com/browser-windows");

    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await tab.waitForLoadState("domcontentloaded");

    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);

    await newWindow.waitForLoadState();

    
    const text = await newWindow.locator("#sampleHeading").textContent();

    console.log(text);

    expect(text).toBe('This is a sample page')

    
})