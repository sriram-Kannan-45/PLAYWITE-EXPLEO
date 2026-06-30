import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class HomePage extends BasePage {

    readonly page: Page;
    readonly signUp: Locator;

    constructor(page: Page) {
        super();
        this.page = page;
        this.signUp = page.locator('//a[text()=" Signup / Login"]');
    }

    async clickSignUp() {
        await this.jsClick(this.signUp);
        
    }

   
}