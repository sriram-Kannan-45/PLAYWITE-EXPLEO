import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { productPage } from '../pages/productPage';
import { registerPage } from '../pages/registerPage';
import { cartPage } from './../pages/cartPage';
import { HomePage } from './../pages/HomePage';

type Fixtures = {

    homepage : HomePage
    loginpage : LoginPage
    registerpage : registerPage

    productpage : productPage

    cartpage : cartPage
}

export const test = base.extend<Fixtures>(
    {
        homepage : async ({page} , use) =>
        {
            await use(new HomePage(page))
        },

        loginpage : async ({page} , use) =>
        {
            await use(new LoginPage(page))
        },

        registerpage : async ({page} , use) =>
        {
            await use(new registerPage(page))
        },

        productpage : async ({page} , use) =>
        {
            await use(new productPage(page))
        },

        cartpage: async ({page} , use) =>
        {
            await use(new cartPage(page))
        }
    }
)

export { expect };

