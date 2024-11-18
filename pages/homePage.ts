import {expect, Page} from '@playwright/test';
import environmentConfig, {getHomepageURL} from '../config';

/**
 * Class representing the Home Page of the e-commerce website
 * Provides methods and locators for interacting with the main landing page functionality
 */
export class HomePage {
    readonly page: Page;
    readonly homepageURL: string;

    /**
     * Creates an instance of HomePage
     * @param page - Playwright Page object
     */
    constructor(page: Page) {
        this.page = page;
    }

    // Locators not dependant on environment
    /** Gets the shop navigation menu item */
    shopNavBarItem = () => this.page.getByTestId(environmentConfig.locators.shopNavBarItem)
    /** Gets the age confirmation button/overlay */
    ageConfirmationButton = () => this.page.getByText(environmentConfig.locators.ageConfirmationButton)
    /** Gets the close cookies notification button */
    cookiesCloseButton = () => this.page.getByRole('button', { name: environmentConfig.locators.closeCookiesButton })

    /**
     * Navigates to the homepage URL
     */
    public async navigateToHomePage() {
        await this.page.goto(getHomepageURL());
    }

    /**
     * Navigates to the shop page by clicking the shop menu item
     */
    public async goToShopPage() {
        await this.shopNavBarItem().click({force: true});
        await this.page.waitForLoadState('load');
    }

    /**
     * Confirms age verification by clicking the confirmation button
     */
    public async ageConfirmation() {
        await this.ageConfirmationButton().click();
    }

    /**
     * Closes the cookie consent notification if it exists and is visible
     */
    public async closeCookies() {
        if (environmentConfig.locators.closeCookiesButton) {
            if (await this.cookiesCloseButton().isVisible()) {
                await this.cookiesCloseButton().scrollIntoViewIfNeeded();
                await this.cookiesCloseButton().click({force: true});
            }
        }
    }
}