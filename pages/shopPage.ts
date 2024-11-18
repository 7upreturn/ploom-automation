import {expect, Page} from '@playwright/test';
import environmentConfig, {getHomepageURL} from '../config';
import { ProductPage } from './productPage';

/**
 * Class representing the Shop Page of the e-commerce website
 * Provides methods and locators for interacting with product listings and details
 */
export class ShopPage {
    readonly page: Page;
    
    /**
     * Creates an instance of ShopPage
     * @param page - Playwright Page object
     */
    constructor(page: Page) {
        this.page = page;
        
    }

    /** SKU of the target product to interact with */
    sku = environmentConfig.sku.targetProduct
    /** Gets the add to cart button on product detail page */
    addToCartButton = () => this.page.getByTestId('pdpAddToProduct')
    /** Gets a product element by its SKU */
    itemBySku = (sku: string) => this.page.locator(`[data-sku="${sku}"]`)
    headerLogoShopPage = () => this.page.getByTestId('headerLogo').first()


    /**
     * Opens a product's detail page by clicking on its SKU
     * @param sku - The SKU of the product to open
     */
    public async openItemBySku(sku: string) {
        await this.headerLogoShopPage().hover({force: true});
        await this.page.waitForTimeout(1000);
       
        await this.itemBySku(sku).click({force: true});
    }

    /**
     * Adds the currently viewed product to cart
     */
    public async addToCart() {
        await this.addToCartButton().click();
    }
}
