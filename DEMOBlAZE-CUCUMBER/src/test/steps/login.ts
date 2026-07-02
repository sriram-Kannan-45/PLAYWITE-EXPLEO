import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("the user is on the automation exercise home page", async function () {
  await this.page.goto("https://automationexercise.com/", {
    waitUntil: "domcontentloaded",
  });
});

Given("user clicks on the Signup or Login link", async function () {
  await this.page.locator("a[href='/login']").click();
});

When("user enters the email as {string}", async function (email) {
  await this.page.locator("input[data-qa='login-email']").fill(email);
});

When("user enters the password as {string}", async function (password) {
  await this.page.locator("input[data-qa='login-password']").fill(password);
});

When("user clicks on the login button", async function () {
  await this.page.locator("button[data-qa='login-button']").click();
});

Then("user should be logged in successfully", async function () {
  await expect(
    this.page.locator("a:has-text('Logged in as')")
  ).toBeVisible();
  await this.page.close();
});

Then("user should see an invalid login error", async function () {
  await expect(
    this.page.locator(".login-form p")
  ).toHaveText("Your email or password is incorrect!");
  await this.page.close();
});