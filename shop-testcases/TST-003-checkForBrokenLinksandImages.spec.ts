import { expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ShopPage } from '../pages/shopPage';
import { CartPage } from '../pages/cartPage';
import { addItemToCartFixture, navigateToItemPageFixture } from '../helpers/fixtures';
import { ProductPage } from '../pages/productPage';
let homePage: HomePage;
let shopPage: ShopPage;
let cartPage: CartPage;
let productPage: ProductPage;
const test = navigateToItemPageFixture;

test.describe('Check for broken links and images', () => {
    test('Check for broken links and images', async ({ page }) => {
        const shopPage = new ShopPage(page);

    const productPage = new ProductPage(page);

    await test.step("Check in stock icon", async () => {
        await productPage.checkInStockIcon()
    })

    await test.step("Check header logo", async () => {
       await productPage.checkHeaderLogo()
    })

    await test.step("Check buy now button", async () => {
        await productPage.checkBuyNowButton()
    })

    await test.step("Check carousel gallery images", async () => {
        await productPage.checkCarouselGalleryImages()
    })

    await test.step("Check carousel images", async () => {
        await productPage.checkCarouselImages()
    })

    await test.step("Check read more link", async () => {
        await productPage.checkReadMoreLink()
    })
    })
}) 

