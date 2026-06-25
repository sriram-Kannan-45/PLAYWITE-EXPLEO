import { test,chromium,expect,Page,Browser } from '@playwright/test';

test("Testcase 2 - Login using valid credentials ",async({page})=>{
   
    await page.goto("https://automationexercise.com/")

    await page.click("//a[normalize-space()='Signup / Login']");

    await page.fill("//input[@data-qa='login-email']","bvetrivel@gmail.com1000")
    await page.fill("//input[@placeholder='Password']","Vetri@12345")

    await page.click("//button[normalize-space()='Login']")

    await expect(page.locator("//*[@id='header']/div/div/div/div[2]/div/ul/li[10]/a")).toContainText("Logged in")

});