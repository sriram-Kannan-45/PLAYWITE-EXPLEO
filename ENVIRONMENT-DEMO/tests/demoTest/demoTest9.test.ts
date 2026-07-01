import { test } from "@playwright/test";

test('iterate new Window', async ({ page, context }) => {

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

    
    const pages = context.pages();

    console.log(pages.length);

    for (const p of pages)
    {
        if (await p.title() === 'demosite' )
        {
            console.log("parent")
            
        }

        else{

            console.log('child')
        }
    }

})