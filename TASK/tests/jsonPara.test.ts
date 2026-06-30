import { expect, test } from '@playwright/test';
import loginData from '../test-data/loginData.json';

interface LoginData {
    testName: string;
    username: string;
    password: string;
    expectedResult: "Success" | "Failure";
    expectedMessage: string;
}

const users = loginData as LoginData[];

for (const data of users) {
    test(`${data.testName} - ${data.username || "blank user"}`, async ({ page }) => {

        await page.goto("https://www.demoblaze.com/");
        await page.click('#login2');
        await page.fill('#loginusername', data.username);
        await page.fill('#loginpassword', data.password);

        if (data.expectedResult === 'Failure')
        {
            page.once('dialog' , async dialog =>{
                expect(dialog.message());
                await dialog.accept()
            })

            await page.click('//button[text()="Log in"]' )
        }

        if (data.expectedResult === 'Success')
        {
            await page.click('//button[text()="Log in"]' , {timeout : 10000})

            await expect(page.locator('#nameofuser')).toBeVisible({
                timeout : 10000
            })
        }


        console.log(data)

    });
}