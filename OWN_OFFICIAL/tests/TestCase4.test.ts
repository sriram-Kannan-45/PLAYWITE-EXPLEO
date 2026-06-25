import { expect, test } from '@playwright/test';

test("Testcase 4 - Log out ",async({page})=>{
   
    await page.goto("https://automationexercise.com/")

    await page.click("//a[normalize-space()='Signup / Login']");

    await page.fill("//input[@data-qa='login-email']","titooram123@gmail.com")
    await page.fill("//input[@placeholder='Password']","sriram123@")

    await page.click("//button[normalize-space()='Login']")

    await expect(page.locator("//*[@id='header']/div/div/div/div[2]/div/ul/li[10]/a")).toContainText("Logged in")

    await page.click("//a[normalize-space()='Logout']")

    await expect(page.locator("//h2[normalize-space()='Login to your account']")).toContainText("Login")

});