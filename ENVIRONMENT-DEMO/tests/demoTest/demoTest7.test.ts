// import { chromium } from '@playwright/test';
import { expect, test } from '@playwright/test';

test ('frame' , async ({page}) => 
{
    await page.goto('https://letcode.in/frame');

    const allFrames = page.frames()

    console.log(allFrames.length)

    const myFrame = page.frame('firstFr');

    await myFrame?.fill('//input[@name = "fname"]' , "sriram")

    await myFrame?.fill('//input[@name = "lname"]' , "kannan")

    // await page.waitForTimeout(30000)

    const frame = page.frameLocator('//iframe[@name="firstFr"]')

    await expect (frame.locator('//p[@class="text-sm font-semibold text-center"]')).toContainText('sriram')

    const innerFrame = frame.frameLocator('//iframe[@title="Inner Frame"]')

    await innerFrame.locator('(//input[@name = "email"])[1]').fill('titooram123@gmail.com')

    // page.waitForTimeout(3000)

    
})