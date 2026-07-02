// import { After, Before } from "@cucumber/cucumber";
// import { Browser, chromium } from "@playwright/test";
// import { pageFixture } from "./pageFixtures";

// let browser : Browser

// Before(async function()
// {
//     browser = await chromium.launch({headless : false})
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     pageFixture.page = page
// })

// After(async function()
//  {
//     await pageFixture.page.close()

//     await browser.close()
    
// })

import { After, Before, Status } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "./world";

Before (async function name(this : CustomWorld) {

    this.browser = await chromium.launch({
        headless : false
    })

    this.context = await this.browser.newContext()

    this.page = await this.context.newPage()
    
})

// After (async function name(this : CustomWorld , pickel , result) {

//     await this.page.close()

//     await this.context.close()

//     await this.browser.close()
    
// })


After(async function ({ pickle, result }) {

    console.log(result?.status);

    if (result?.status === Status.FAILED) {

        const img = await this.page.screenshot({
            path: `test-result/ss/${pickle.name}.png`,
            type: "png"
        });

        await this.attach(img, "image/png");
    }

    await this.page.close();
    // await this.context.close();
});