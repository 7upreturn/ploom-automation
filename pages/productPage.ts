import {expect, Page} from '@playwright/test';
import environmentConfig from '../config';

export class ProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    //Images
    carouselImage0 = () => this.page.getByTestId('aem-carousel__thumbnail-0')
    carouselImage1 = () => this.page.getByTestId('aem-carousel__thumbnail-1')
    carouselImage2 = () => this.page.getByTestId('aem-carousel__thumbnail-2')
    carouselImage3 = () => this.page.getByTestId('aem-carousel__thumbnail-3')
    carouselImage4 = () => this.page.getByTestId('aem-carousel__thumbnail-4')
    inStockIcon = () => this.page.getByTestId('inStockBlock').getByRole('img')
    headerLogo = () => this.page.getByTestId('headerLogo').first()
    carouselGalleryImage0 = () => this.page.getByTestId('aem-carousel__gallery-image-0')
    carouselGalleryImage1 = () => this.page.getByTestId('aem-carousel__gallery-image-1')
    carouselGalleryImage2 = () => this.page.getByTestId('aem-carousel__gallery-image-2')
    carouselGalleryImage3 = () => this.page.getByTestId('aem-carousel__gallery-image-3')
    carouselGalleryImage4 = () => this.page.getByTestId('aem-carousel__gallery-image-4')


    //Links
    readMoreLink = () => this.page.getByRole('link', {name: environmentConfig.locators.readMoreLink})
    readLessLink = () => this.page.getByRole('link', {name: environmentConfig.locators.readLessLink})
    buyNowButtonProduct1 = () => this.page.getByTestId('all_skus').getByRole('link', { name: environmentConfig.locators.buyNowButton}).first()
    buyNowButtonProduct2 = () => this.page.getByTestId('all_skus').getByRole('link', { name: environmentConfig.locators.buyNowButton}).nth(1)
    buyNowButtonProduct3 = () => this.page.getByTestId('all_skus').getByRole('link', { name: environmentConfig.locators.buyNowButton}).nth(2)


    public async checkCarouselImages() {
        await expect(this.carouselImage0()).toBeVisible();
        await expect(this.carouselImage1()).toBeVisible();
        await expect(this.carouselImage2()).toBeVisible();
        await expect(this.carouselImage3()).toBeVisible();
        await expect(this.carouselImage4()).toBeVisible();
        const src0 = await this.carouselImage0().getAttribute('src');
        const src1 = await this.carouselImage1().getAttribute('src');
        const src2 = await this.carouselImage2().getAttribute('src');
        const src3 = await this.carouselImage3().getAttribute('src');
        const src4 = await this.carouselImage4().getAttribute('src');

        await expect(src0?.length).toBeGreaterThan(0);
        await expect(src1?.length).toBeGreaterThan(0);
        await expect(src2?.length).toBeGreaterThan(0);
        await expect(src3?.length).toBeGreaterThan(0);
        await expect(src4?.length).toBeGreaterThan(0);
    }

    public async checkCarouselGalleryImages() {
        await this.carouselImage0().click()
        await expect(this.carouselGalleryImage0()).toBeVisible();
        await this.carouselImage1().click()
        await expect(this.carouselGalleryImage1()).toBeVisible();
        await this.carouselImage2().click()
        await expect(this.carouselGalleryImage2()).toBeVisible();
        await this.carouselImage3().click()
        await expect(this.carouselGalleryImage3()).toBeVisible();
        await this.carouselImage4().click()
        await expect(this.carouselGalleryImage4()).toBeVisible();

        const srcGallery0 = await this.carouselGalleryImage0().getAttribute('src');
        const srcGallery1 = await this.carouselGalleryImage1().getAttribute('src');
        const srcGallery2 = await this.carouselGalleryImage2().getAttribute('src');
        const srcGallery3 = await this.carouselGalleryImage3().getAttribute('src');
        const srcGallery4 = await this.carouselGalleryImage4().getAttribute('src');

        await expect(srcGallery0?.length).toBeGreaterThan(0);
        await expect(srcGallery1?.length).toBeGreaterThan(0);
        await expect(srcGallery2?.length).toBeGreaterThan(0);
        await expect(srcGallery3?.length).toBeGreaterThan(0);
        await expect(srcGallery4?.length).toBeGreaterThan(0);
    }

    public async checkInStockIcon() {
        await this.page.waitForLoadState('load');
        await expect(this.inStockIcon()).toBeVisible();
       
    }
    public async checkHeaderLogo() {
        await this.headerLogo().waitFor({state: 'attached'});
        await expect(this.headerLogo()).toBeVisible();
        
    }

    public async checkBuyNowButton() {
        await expect(this.buyNowButtonProduct1()).toBeVisible();
        await expect(this.buyNowButtonProduct2()).toBeVisible();
        await expect(this.buyNowButtonProduct3()).toBeVisible(); 
        const href1 = await this.buyNowButtonProduct1().getAttribute('href');
        const href2 = await this.buyNowButtonProduct2().getAttribute('href');
        const href3 = await this.buyNowButtonProduct3().getAttribute('href');
        console.log(href1)
        console.log(href2)
        console.log(href3)


        await expect(href1).toBeTruthy();
        await expect(href2).toBeTruthy(); 
        await expect(href3).toBeTruthy();
    }

    public async checkReadMoreLink() {
        await expect(this.readMoreLink()).toBeVisible();
        await this.readMoreLink().click({force: true});
        await expect(this.readLessLink()).toBeVisible();
        await this.readLessLink().click({force: true});
    }
}
   
