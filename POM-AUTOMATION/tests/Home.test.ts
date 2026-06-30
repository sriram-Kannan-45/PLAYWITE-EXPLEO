
import { expect, test } from '../fixture/fixtures';

test.describe('home' , ()=>
{
    test.beforeEach('url',async({page})=>
    {
        await page.goto('https://automationexercise.com/')
    })

    test('register' , async({homepage , loginpage , registerpage , productpage , cartpage})=>{

        await homepage.clickSignUp()

        await loginpage.regStep1("sriram" , "sfsdadhhdfajsfajjjkhkzjfhcajgnkjs@gmail.com")

        await registerpage.register("sriram123@", "sriram","kannan","abc","tamilnadu","salem","434","354323")

        // await expect(registerpage.delete).toBeVisible()

        await productpage.addTocartItem()

        await cartpage.placeOrder() 
        await expect(cartpage.assertOrder).toBeVisible()
    })
})