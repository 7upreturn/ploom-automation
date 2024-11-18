import {expect, Page} from '@playwright/test';
import environmentConfig from '../config';

/**
 * Class representing the Cart Page of the e-commerce website
 * Provides methods and locators for interacting with the shopping cart functionality
 */
export class CartPage {
    readonly page: Page;
    readonly homepageURL: string;

    /**
     * Creates an instance of CartPage
     * @param page - Playwright Page object
     */
    constructor(page: Page) {
        this.page = page;
    }

    // Locators for cart elements
    /** Gets the cart quantity indicator element */
    cartQuantity = () => this.page.getByTestId('cartQuantity')
    /** Gets the checkout button in mini cart */
    cartCheckoutButton = () => this.page.getByTestId('miniCartCheckoutButton')
    /** Gets the cart icon/button element */
    cartButton = () => this.page.getByTestId('miniCart')
    /** Gets the list of items in cart */
    cartContentList = () => this.page.getByTestId('mini-cart-list').locator('div')
    /** Gets the first item link in basket */
    itemInBasket = () => this.page.getByRole('link', { name: environmentConfig.locators.itemInBasket }).first()
    /** Gets the remove item button */
    removeItemButton = () => this.page.getByTestId('cartRemoveButton')
    /** Gets the empty cart message container */
    noItemsInCartText = () => this.page.getByTestId('emptyCartContainer')

    /**
     * Verifies that cart quantity is 1
     */
    public async assertCartQuantity() {
        await expect(this.cartQuantity()).toHaveValue('1', {timeout: 10000});
    }

    /**
     * Opens the shopping cart/basket
     */
    public async openBasket() {
        await this.cartButton().click();
    }

    /**
     * Verifies that an item is visible in the basket
     */
    public async checkBasketContent() {
        await expect(this.itemInBasket()).toBeVisible();
    }

    /**
     * Removes an item from the cart
     */
    public async removeItemFromCart() {
        await this.removeItemButton().click();
    }

    /**
     * Verifies that the cart is empty
     */
    public async assertNoItemsInCart() {
        await expect(this.noItemsInCartText()).toBeVisible();
    }
}