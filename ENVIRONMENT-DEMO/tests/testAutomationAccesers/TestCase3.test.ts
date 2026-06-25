import { test,chromium,expect,Page,Browser } from '@playwright/test';

test("Testcase 3 - Login using invalid credentials ",async({page})=>{
   
    await page.goto("https://automationexercise.com/")

    await page.click("//a[normalize-space()='Signup / Login']");

    await expect(page.locator("//h2[normalize-space()='Login to your account']")).toContainText("Login to your account")

    await page.fill("//input[@data-qa='login-email']","bvetrivel@gmail.com")
    await page.fill("//input[@placeholder='Password']","wrongPassword")

    await page.click("//button[normalize-space()='Login']")

    await expect(page.locator("//p[normalize-space()='Your email or password is incorrect!']")).toContainText("incorrect")

});