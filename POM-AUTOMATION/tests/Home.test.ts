import { expect, test } from '../fixture/fixtures';
import { readLoginData } from '../utils/residerCsv';

const users = readLoginData();

test.describe('Register Tests', () => {

    test.beforeEach(async ({ page }) => {
        console.log("URL: ", process.env.URL);
        await page.goto('');
    });

    test.afterEach(async ({ page }) => {
         await page.close();
    });

    for (const user of users) {

        test(`${user.type} Register Test`, async ({
            homepage,
            loginpage,
            registerpage,
            productpage,
            cartpage
        }) => {

            await homepage.clickSignUp();

            await loginpage.regStep1(
                user.username,
                user.email
            );

            await registerpage.register(
                user.password,
                user.first_name,
                user.last_name,
                user.address,
                user.state,
                user.city,
                user.zipcode,
                user.mobileNumber
            );

            await productpage.addTocartItem();

            await cartpage.placeOrder();

            await expect(cartpage.assertOrder).toBeVisible();
        });

    }

});