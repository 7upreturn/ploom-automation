import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ShopPage } from '../pages/shopPage';
import { CartPage } from '../pages/cartPage';
import country from '../config';

let homePage: HomePage;
let shopPage: ShopPage;
let cartPage: CartPage;


test(`Testing add to cart functionality for ${country}`, async ({page}) => {
    
        const homePage = new HomePage(page);
        const shopPage = new ShopPage(page);
        const cartPage = new CartPage(page);

    await test.step("Navigate to Website", async () => {
        await homePage.navigateToHomePage()
    })

    await test.step("Confirm age and close cookies", async () => {
    
        await homePage.closeCookies()
        await homePage.ageConfirmation()
    })

    await test.step("Go to Shop Page", async () => {
        await homePage.goToShopPage()  
    })

    await test.step("Navigate to Item Page", async () => {
        await shopPage.openItemBySku(shopPage.sku)
    })

    await test.step("Add item to cart", async () => {
        await shopPage.addToCart()
    })
    
    await test.step("Check the cart quantity", async () => {
        await cartPage.assertCartQuantity()
    })

    await test.step("Check the basket content", async () => {
        await cartPage.checkBasketContent()
    })


})