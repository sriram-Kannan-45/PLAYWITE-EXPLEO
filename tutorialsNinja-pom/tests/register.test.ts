import { expect, test } from '../fixtures/fixtures';
import { readCSV } from '../utils/csvreader';

const data = readCSV();

let userName = "";
let passWord = "";

test.describe('Register Flow @register', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(process.env.URL! || 'https://tutorialsninja.com/demo/');
    });

    for (const user of data) {

        test(`Register - ${user.firstName}`, async ({ homepage, registerpage }) => {

            await homepage.clickRegister();

            // Generate unique email
            const random = Math.floor(100000 + Math.random() * 900000);
            const uniqueEmail = `${user.email}${random}@gmail.com`;

            await registerpage.resiter(
                user.firstName,
                user.lastName,
                uniqueEmail,
                user.phone,
                user.password,
                user.repetpassword
            );

            const expected = await registerpage.getAssertText();
            expect(expected).toContain('Your Account Has Been Created!');

            userName = uniqueEmail;
            passWord = user.password;

            console.log("Username :", userName);
            console.log("Password :", passWord);
        });

    }

});