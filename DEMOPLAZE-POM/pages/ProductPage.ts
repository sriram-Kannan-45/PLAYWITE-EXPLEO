import { Locator, Page } from "@playwright/test";

export class ProductPage {

    readonly welCome : Locator
    readonly page : Page

    constructor (page : Page)
    {
        this.page = page

        this.welCome = page.locator('//a[contains(text(),"Welcome")]')
        
    }

    assertLogin():Locator {
        
        return this.welCome 

    }
}