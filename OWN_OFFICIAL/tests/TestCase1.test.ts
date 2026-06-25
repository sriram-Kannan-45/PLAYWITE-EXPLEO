import { expect, test } from '@playwright/test';

test("Testcase 1 - Register User",async({page})=>{
   
    await page.goto("https://automationexercise.com/")
    await expect(page).toHaveTitle("Automation Exercise")

    await page.click("//a[normalize-space()='Signup / Login']");

    await page.fill("//input[@placeholder='Name']","sriram")
    await page.fill("//input[@data-qa='signup-email']","srti@gmail.com")

    await page.click("//button[normalize-space()='Signup']")

    await page.fill("//input[@id='password']","1234")

    await page.fill("//input[@id='first_name']","sriram")
    await page.fill("//input[@id='last_name']","K")

    await page.fill("//input[@id='state']","TamilNadu")
    await page.fill("//input[@id='city']","salem")

    await page.fill("//input[@id='address1']","address")
    await page.fill("//input[@id='zipcode']","611222104")

    await page.fill("//input[@id='mobile_number']","9092174486")

    await page.click("//button[normalize-space()='Create Account']")

    await expect("//b[normalize-space()='Account Created!']").toContain("Created")

});