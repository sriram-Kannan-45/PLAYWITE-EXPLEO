import { expect, test } from '../fixtures/fixtures';

test.describe("Login Tests", () => {

    test.beforeEach("Navigate to URL", async ({ page }) => {
        await page.goto("https://www.demoblaze.com/");
    });

    test("validLogin", async ({ homepage , productpage}) => {
        await homepage.validLogin("admin" , "admin");
        await expect(productpage.assertLogin()).toBeVisible()
    });

    test("invalid", async({homepage})=>
    {
        await homepage.invalidLogin("admin","adiaf");
    })

});