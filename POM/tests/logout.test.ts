import { expect, test } from "../fixtures/baseFixture";
import loginData from "../test-data/loginData.json";

test.describe("Dashboard Tests @logout", () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.navigate();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });

    test('logout',async ({ dashBoardPage ,loginPage }) => {
        await dashBoardPage.logOut();

        await expect(loginPage.loginTittle).toBeVisible()

    });

    test.afterEach('browser close' , async({page})=>
    {
        page.close();
    })

});