
import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class registerPage extends BasePage {

    readonly page : Page
    readonly title : Locator
    readonly password : Locator
    readonly selectDay : Locator
    readonly selectMonth : Locator
    readonly selectYear : Locator
    readonly news : Locator
    readonly offer : Locator
    readonly firstName : Locator
    readonly lastName : Locator
    readonly address : Locator
    readonly selectCountry : Locator
    readonly state : Locator
    readonly city : Locator
    readonly zipcode : Locator
    readonly mobileNumber : Locator
    readonly createAcc : Locator
    readonly home : Locator
    readonly delete : Locator
    
    constructor(page : Page)
    {
        super()

        this.page = page 

        this.title = page.locator('#id_gender1')

        this.password = page.locator('#password')

        this.selectDay = page.locator('//select[@id="days"]')

        this.selectMonth = page.locator('#months')

        this.selectYear = page.locator('#years')

        this.news = page.locator('#newsletter')

        this.address = page.locator('#address1')

        this.offer = page.locator('#optin')

        this.firstName = page.locator('#first_name')

        this.lastName = page.locator('#last_name')

        this.state = page.locator('#state')

        this.zipcode = page.locator('#zipcode')

        this.mobileNumber = page.locator('#mobile_number')

        this.selectCountry = page.locator('#country')

        this.city = page.locator('#city')

        this.createAcc = page.locator('//button[text()="Create Account"]')

        this.home = page.locator('//a[text()=" Home"]')

        this.delete = page.locator('//a[text()=" Delete Account"]')
    }

    async register(password :string , first_name : string , last_name : string , address : string , state : string , city : string , zipcode : string , mobileNumber : string)
    {

        await this.title.check()
        await this.jsFill(this.password , password)
        await this.selectDay.selectOption({index:2})
        await this.selectMonth.selectOption({index:3})
        await this.selectYear.selectOption({index:3})
        await this.news.check()
        await this.offer.check()
        await this.jsFill(this.firstName , first_name)
        await this.jsFill(this.lastName,last_name)
        await this.jsFill(this.address , address)
        await this.selectCountry.selectOption({index : 2})
        await this.jsFill(this.state , state)
        await this.jsFill(this.city , city)
        await this.jsFill(this.zipcode , zipcode)
        await this.jsFill(this.mobileNumber , mobileNumber)
        await this.jsClick(this.createAcc)
        // await this.jsClick(this.home)
        

    }

    async del()
    {
        await this.jsClick(this.delete)
    }

     getDelete():Locator
    {
        return this.delete
    }
}