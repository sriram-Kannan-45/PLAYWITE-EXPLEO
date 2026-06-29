import { test } from "@playwright/test";

test('download @downLoad' , async({page})=>
{
    await page.goto('https://demoqa.com/upload-download')

    const downLoadEvent = page.waitForEvent('download')

    await page.locator('//a[text()="Download"]').click()

    const downLoad = await downLoadEvent

    await downLoad.saveAs(
        `Downloads/${await downLoad.suggestedFilename()}`
    );

    console.log('download completed')

})