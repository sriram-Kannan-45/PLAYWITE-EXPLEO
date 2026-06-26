import { chromium, expect, test } from "@playwright/test";

test("demotest", async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");

    const demoTest = await page.locator('//input[@placeholder="Please enter your Message"]').getAttribute("placeholder");

    console.log(demoTest);

    const empty = await page.locator('//p[@id="message"]').innerText()

    

    console.log(`befor enter : ${empty}`)

    await page.locator('//input[@placeholder = "Please enter your Message"]').fill("sriram")

    const nonempty = await page.locator('//input[@placeholder = "Please enter your Message"]').inputValue();

    console.log(`after enter : ${nonempty}`)

    await page.locator('//button[@id="showInput"]').click()

    await expect (page.locator('//p[@id="message"]').isVisible({}))

    


});