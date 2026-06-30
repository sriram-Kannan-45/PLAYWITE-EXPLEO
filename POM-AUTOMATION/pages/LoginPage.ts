import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class LoginPage extends BasePage {

   readonly regName : Locator
   readonly page :Page
   readonly regEmail : Locator
   readonly singup : Locator

   constructor(page : Page)
   {
    super()
    this.page = page

    this.regEmail = page.locator('//input[@data-qa="signup-email"]')
    this.regName  = page.locator('//input[@data-qa="signup-name"]')
    this.singup = page.locator('//button[text()="Signup"]')
   }

   async regStep1(name : string , email : string)
   {
        await this.jsFill(this.regName , name )
        await this.jsFill(this.regEmail, email)
        await this.jsClick(this.singup)
   }
}