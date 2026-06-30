import { Locator, Page } from "@playwright/test";

export class LoginPage 
{
    readonly page : Page 
    readonly username : Locator
    readonly password : Locator
    readonly loginButton : Locator
    readonly loginTittle : Locator
    readonly errorMessage : Locator

    constructor (page : Page)
    {
        this.page = page ;

        this.username = page.locator('//input[@placeholder = "Username"]')
        this.password = page.locator('//input[@placeholder = "Password"]')
        this.loginButton = page.locator('//button[text() = " Login "]')
        this.loginTittle = page.locator('h5')
        this.errorMessage = page.locator('//p[text() = "Invalid credentials"]')
    }

    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login' , {
            waitUntil : "domcontentloaded"
        })
    
    }

    async getLoginTitle()
    {
        return await this.loginTittle.textContent();
    }

    async login (username : string , password : string)
    {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

    async getErrorMessage()
    {
        return await this.errorMessage.textContent()
    }
}