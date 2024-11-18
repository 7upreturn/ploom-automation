import { expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ShopPage } from '../pages/shopPage';
import { CartPage } from '../pages/cartPage';
import { addItemToCartFixture } from '../helpers/fixtures';
let homePage: HomePage;
let shopPage: ShopPage;
let cartPage: CartPage;

const test = addItemToCartFixture;

test.describe('Remove item from cart test', () => {
    test('Remove product from cart and verify cart is empty', async ({ page }) => {
        const cartPage = new CartPage(page);

    await test.step("Remove item from cart", async () => {
        await cartPage.removeItemFromCart()
        await cartPage.assertNoItemsInCart()
    })
})  

})
