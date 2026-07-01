import { Locator, Page } from '@playwright/test';
import { BasePage } from "../pages/BasePage";

export class HomePage extends BasePage{

    readonly page :Page
    readonly myAccount : Locator
    readonly registerButton : Locator

    constructor(page :Page)
    {
        super()
        this.page = page

        this.myAccount = page.locator('//a[@title="My Account"]')

        this.registerButton = page.locator('//a[text()="Register"]')
    }

    async clickRegister ()
    {
        await this.jsClick(this.myAccount)
        await this.jsClick(this.registerButton)
    }
}