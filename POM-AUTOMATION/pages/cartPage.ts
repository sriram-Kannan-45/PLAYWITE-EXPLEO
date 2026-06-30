import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class cartPage extends BasePage {

    readonly page: Page;
    readonly cart : Locator;
    readonly placeHolder : Locator
    readonly order : Locator
    readonly cardname : Locator
    readonly cardNo : Locator
    readonly csv : Locator
    readonly month :Locator
    readonly year : Locator
    readonly confirm :Locator
    readonly assertOrder : Locator
    constructor(page: Page) {
        super();
        this.page = page;
        this.cart = page.locator('//a[text()=" Cart"]')
        this.placeHolder = page.locator('//a[text()="Proceed To Checkout"]')
        this.order = page.locator('//a[text()="Place Order"]')
        this.cardname = page.locator('//input[@name="name_on_card"]')
        this.cardNo = page.locator('//input[@name="card_number"]')
        this.csv = page.locator('//input[@name="cvc"]')
        this.month = page.locator('//input[@name="expiry_month"]')
        this.year = page.locator('//input[@name="expiry_year"]')
        this.confirm = page.locator('#submit')
        this.assertOrder = page.locator('//b[text()="Order Placed!"]')
    }

    async placeOrder() 
    {
        await this.jsClick(this.cart)
        await this.jsClick(this.placeHolder)
        await this.jsClick(this.order)
        await this.jsFill(this.cardname , "Sriram")
        await this.jsFill(this.cardNo , "47987298767879")
        await this.jsFill(this.csv , "455")
        await this.jsFill(this.month , "12")
        await this.jsFill(this.year, "2045")
        await this.jsClick(this.confirm)
        
    }

   
}