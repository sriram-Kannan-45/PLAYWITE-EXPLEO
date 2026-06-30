
import { test as base, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { HomePage } from './../pages/HomePage';

type Fixtures = {

    homepage : HomePage
    productpage : ProductPage
}

export const test = base.extend<Fixtures>(
    {
        homepage : async({page} , use)=>
        {
            await use(new HomePage(page))
        },

        productpage : async ({page} , use)=>
        {
            await use(new  ProductPage(page))
        }
    }
)

export { expect };

