import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    readonly page : Page
    readonly myAcc : Locator
    readonly LoginLink : Locator
    readonly email : Locator
    readonly password : Locator
    readonly loginBtn : Locator

    constructor (page :Page)
    {
        super()
        this.page = page
        this.myAcc = page.locator('//a[@title="My Account"]')
        this.LoginLink = page.locator('(//a[text()="Login"])[1]')
        this.email = page.locator('#input-email')
        this.password = page.locator('#input-password')
        this.loginBtn = page.locator('//input[@type="submit"]')


    }

    async login(email :string , password : string)
    {
        await this.jsClick(this.myAcc)
        await this.jsClick(this.LoginLink)
        await this.email.fill(email)
        await this.password.fill(password)
        await this.jsClick(this.loginBtn)
        
    }
}