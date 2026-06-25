import { chromium } from "@playwright/test";
(async()=>{
    const browser=await chromium.launch({
        headless:false
    })
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.setViewportSize({width:1920,height:1080});
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(5000);
    await browser.close();
    console.log("closed");
});