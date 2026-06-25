import { test,expect } from '@playwright/test';

test("Testcase 11 - Verify Subscription in Cart page",async({page})=>{
   
    await page.goto("https://automationexercise.com/")
    await expect(page).toHaveTitle("Automation Exercise")

    await page.click("//a[text()=' Products']");
    await page.locator("//div[@class = 'single-products'][1]").scrollIntoViewIfNeeded()
    await page.locator("//div[@class = 'single-products'][1]").hover()
    await page.locator("//a[@data-product-id = '1']").click()


})