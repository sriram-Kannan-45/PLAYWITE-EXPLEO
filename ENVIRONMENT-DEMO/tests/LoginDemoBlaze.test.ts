import { expect, test } from '@playwright/test';

test('Login Test', async ({ page }) => {

    await page.goto(process.env.BASE_URL!);

    await page.fill('#username', process.env.NAME!);

    await page.fill('#password', process.env.PASSWORD!);

    console.log("URL:", process.env.BASE_URL);
    console.log("USERNAME:", process.env.NAME);
    console.log("PASSWORD:", process.env.PASSWORD);

    await page.click('button[type="submit"]');

    await expect(page.locator('.flash.success')).toBeVisible();
});