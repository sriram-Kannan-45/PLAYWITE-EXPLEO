import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly LoginLink: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.LoginLink = page.locator('#login2');
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.loginButton = page.locator('//button[text()="Log in"]');
    }

    async validLogin(username: string, password: string) {
        await this.LoginLink.click();

        await this.username.fill(username);

        await this.password.fill(password);

        await this.loginButton.click();
    }

    async invalidLogin(username: string, password: string) {
        await this.LoginLink.click();

        await this.username.fill(username);

        await this.password.fill(password);

        this.page.on('dialog', async (dialog) => 
        {
                console.log(dialog.message());
                await dialog.accept();
        });
        await this.loginButton.click();
    }
}