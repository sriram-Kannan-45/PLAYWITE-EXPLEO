import { expect, test } from "../fixtures/baseFixture";
import loginData from "../test-data/loginData.json";

test.describe("Dashboard Tests @hooks", () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.navigate();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });

    test("Dashboard should be displayed", async ({ dashBoardPage }) => {

        await expect(dashBoardPage.dashboardTitle).toBeVisible({ timeout: 10000 });
        await expect(dashBoardPage.quickLaunch).toBeVisible();
        await expect(dashBoardPage.myActions).toBeVisible();
        await expect(dashBoardPage.timeAtWorkCard).toBeVisible();

    });
    

    test.afterEach(async ({ dashBoardPage }) => {
        await dashBoardPage.logOut();
    });

});