import { test,expect, Dialog } from '@playwright/test';

test("Testcase 6 - Contact Us Form",async({page})=>{

    await page.goto("https://automationexercise.com/")
    await expect(page).toHaveTitle("Automation Exercise")

    await page.click("//a[normalize-space()='Contact us']");

    await expect(page.locator("//h2[text() = 'Get In Touch']")).toBeVisible()

    await page.fill("//input[@name = 'name']", "Vigneshwaran");
    await page.fill("//input[@name = 'email']", "Vigneshwaran@gmail.com");
    await page.fill("//input[@name = 'subject']", "Sample Mail");
    await page.fill("//textarea[@id = 'message']", "Hi");
    

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.click("//input[@data-qa  = 'submit-button']")

    await expect(page.locator("//div[@class = 'status alert alert-success']")).toBeVisible()
})