
import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class productPage extends BasePage {

    readonly page : Page
    readonly addToCart  : Locator
    readonly productCard :Locator
    readonly productpg : Locator
    readonly continueShopping  :  Locator

    constructor (page :Page)
    {
        super()
        this.page = page
        this.productCard = page.locator('.product-image-wrapper').first();
        this.addToCart = page.locator('.product-overlay a.add-to-cart').first();
        this.productpg = page.locator('//a[text()=" Products"]')
        this.continueShopping = page.locator('//button[text()="Continue Shopping"]')
    }

    

async addTocartItem() {
    await this.jsClick(this.productpg);

    await this.productCard.hover();

    await this.jsClick(this.addToCart);

    await this.continueShopping.waitFor();

    await this.jsClick(this.continueShopping);
}

   
}