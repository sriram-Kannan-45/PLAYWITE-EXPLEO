import { After, Before, Status, setDefaultTimeout } from "@cucumber/cucumber";

import { chromium } from "@playwright/test";

import { customWorld } from "./world";

setDefaultTimeout(30000);
Before (async function name(this:customWorld) {

    this.browser = await chromium.launch({

        headless : false
    })

    this.context = await this.browser.newContext()

    this.page = await this.context.newPage()
    
})

After (async function ({pickle , result}){

    console.log(result?.status);

    if (result?.status === Status.FAILED)
    {
        const img = await this.page.screenshot({
            path: `test-result/ss/${pickle.name}.png`,
            type: "png"
        });

        await this.attach(img, "image/png");
        
        
    }

    await this.page.close();
    await this.context.close();
    
})