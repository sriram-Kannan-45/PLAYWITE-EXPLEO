import { expect, test } from "@playwright/test";


 test.beforeEach('Browser', async ({ page }) => {

        page.setDefaultTimeout(10000);

        await page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
            {
                timeout: 15000
            }
        );

    });

test.afterEach('Browser' , async({page} , testInfo)=>
{
    console.log("Title :", testInfo.title);
    console.log("Status :", testInfo.status);
    console.log("Expected :", testInfo.expectedStatus);
    console.log("Duration :", testInfo.duration);
    console.log("Retry :", testInfo.retry);
    console.log("Worker :", testInfo.workerIndex);
    console.log("File :", testInfo.file);
    console.log("Timeout :", testInfo.timeout);


    page.setDefaultTimeout(10000);

    await page.close()
})

test.describe('OHRM-Login', () => {

   

    test('validLogin', async ({ page }) => {

        test.setTimeout(60000);

        await page.getByPlaceholder('Username').fill('Admin', {
            timeout: 5000
        });

        await page.getByPlaceholder('Password').fill('admin123', {
            timeout: 5000
        });

        await page.locator('//button[text()=" Login "]').click({
            timeout: 5000
        });

        await expect(page.locator('//h6[text()="Dashboard"]')).toHaveText('Dashboard', {
            timeout: 3000
        });

    });

    test ('invalid' , async({page})=>
    {
        test.setTimeout(60000);

        await page.getByPlaceholder('Username').fill('Admin', {
            timeout: 5000
        });

        await page.getByPlaceholder('Password').fill('admin', {
            timeout: 5000
        });

         await page.locator('//button[text()=" Login "]').click({
            timeout: 5000
        });

        await expect (page.locator('//p[text()="Invalid credentials"]')).toHaveText('Invalid credentials')
    })

});