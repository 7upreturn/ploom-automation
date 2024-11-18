import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ShopPage } from '../pages/shopPage';
import { CartPage } from '../pages/cartPage';
import { captureAllRequests } from './captureRequests';

/**
 * Interface defining the page objects available in the test fixtures
 */
type Pages = {
    homePage: HomePage;
    shopPage: ShopPage;
    cartPage: CartPage;
};

/**
 * Base test fixture that provides initialized page objects
 * Extends Playwright's base test with HomePage, ShopPage and CartPage instances
 */
export const test = base.extend<Pages>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    shopPage: async ({ page }, use) => {
        const shopPage = new ShopPage(page);
        await use(shopPage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    }
});

/**
 * Specialized test fixture that sets up a common test scenario
 * Performs the following setup steps:
 * 1. Navigates to homepage
 * 2. Handles cookie consent and age verification
 * 3. Navigates to shop page
 * 4. Selects and adds specific item to cart
 * 5. Verifies cart quantity
 * 
 * Use this fixture when testing scenarios that require an item to already be in the cart
 */
export const addItemToCartFixture = test.extend({
    page: async ({ page }, use) => {
        const homePage = new HomePage(page);
        const shopPage = new ShopPage(page);
        const cartPage = new CartPage(page);

        //   Pre-condition steps
        await homePage.navigateToHomePage();
        await homePage.closeCookies();
        await homePage.ageConfirmation();
        await homePage.goToShopPage();
        await shopPage.openItemBySku(shopPage.sku);
        await shopPage.addToCart();
        await cartPage.assertCartQuantity();

        await use(page);
    }
});

export const navigateToItemPageFixture = test.extend({
    page: async ({ page }, use) => {
        const homePage = new HomePage(page);
        const shopPage = new ShopPage(page);

        await homePage.navigateToHomePage();
        await homePage.closeCookies();
        await homePage.ageConfirmation();
        await homePage.goToShopPage();
        

        await shopPage.openItemBySku(shopPage.sku);
        await captureAllRequests(page);
        await use(page);
    }
})

