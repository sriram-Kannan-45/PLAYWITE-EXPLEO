import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { pageFixture } from "../../hooks/pageFixtures";


let dialogMessage: string = '';

Given('user navigate to the wesite Link', async function () {
  
  pageFixture.page.on('dialog', async (dialog) => {
    dialogMessage = dialog.message();
    await dialog.accept();
  });

  await pageFixture.page.goto("https://www.demoblaze.com/", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
});

Given('user click the login Link', async function () {
  await pageFixture.page.locator('#login2').click({ timeout: 10000 });
});

When('user enter the username as {string}', async function (string) {
  await pageFixture.page.locator('#loginusername').fill(string);
});

When('user enter the password as {string}', async function (string) {
  await pageFixture.page.locator('#loginpassword').fill(string);
});

When('user click the login button', async function () {
//   dialogMessage = ''; 
  await pageFixture.page.locator('//button[text()="Log in"]').click();
});

When('user enter the wrong username as {string}', async function (string) {
  await pageFixture.page.locator('#loginusername').fill(string);
});

Then('user should accept the pop message {string}', async function (string) {
  
  await expect.poll(() => dialogMessage, { timeout: 10000 }).toBe(string);
});

Then('user should see the {string}', async function (string) {
  const welcomeText = pageFixture.page.locator('#nameofuser');
  await expect(welcomeText).toHaveText(string, { timeout: 10000 });
});