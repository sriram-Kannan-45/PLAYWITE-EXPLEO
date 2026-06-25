
import { chromium, test } from '@playwright/test';

test("LOGIN" , async()=>{

    const browser = await chromium.launch({
        headless : false
    });

    const context = await browser.newContext()

    const page = await context.newPage();

    await page.goto("https://www.demoblaze.com/")

    await page.click("//a[@id='login2']")
    await page.fill('//*[@id="loginusername"]' , "admin" )
    await page.fill('//*[@id="loginpassword"]' , "admin")
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')

    await page.waitForTimeout(3000);

    

    await page.goto("https://www.demoblaze.com/cart.html")

    await page.waitForTimeout(3000);

    await page.goBack()

    await page.waitForTimeout(3000);

    await page.goForward()
    await page.waitForTimeout(3000);

    await page.reload()
    await page.waitForTimeout(3000);
    
    await browser.close();


})