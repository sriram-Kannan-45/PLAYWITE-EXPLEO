
import { Locator, Page } from "@playwright/test"
import { BasePage } from '../pages/BasePage'

export class registerPage extends BasePage {

    readonly page :Page
    readonly firstName : Locator
    readonly lastName : Locator
    readonly email : Locator
    readonly phone  : Locator
    readonly password : Locator
    readonly repetPassword : Locator
    readonly policy : Locator
    readonly submit : Locator
    readonly assertMSGforCreate : Locator

    constructor (page : Page)
    {
        super()
        this.page = page
        this.firstName = page.locator('#input-firstname')
        this.lastName = page.locator('#input-lastname')
        this.email = page.locator('#input-email')
        this.phone = page.locator('#input-telephone')
        this.password = page.locator('#input-password')
        this.repetPassword = page.locator('#input-confirm')
        this.policy = page.locator('//input[@name = "agree"]')
        this.submit = page.locator('//input[@type="submit"]')
        this.assertMSGforCreate = page.locator('//h1[text()="Your Account Has Been Created!"]')

    }

    async resiter(fname :string , lname:string , email:string , phone:string , password:string , repetPassword:string )
    {
        await this.firstName.fill(fname)
        await this.lastName.fill(lname)
        await this.email.fill(email)
        await this.phone.fill(phone)
        await this.password.fill(password)
        await this.repetPassword.fill(repetPassword)
        await this.policy.check()
        await this.jsClick(this.submit)

    }

    async getAssertText()
    {
        return this.assertMSGforCreate.textContent()
    }
}