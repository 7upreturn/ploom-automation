import config from './config.json';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Environment configuration determined by ENVIRONMENT and COUNTRY env variables
 * Defaults to 'dev' environment and 'uk' country if not specified
 */
const env = process.env.ENVIRONMENT || 'dev';
const country = process.env.COUNTRY || 'uk';
const environmentConfig = config[env]?.[country];
console.log(`Current environment: ${env} and country: ${country}`);
if(!environmentConfig) {
    throw new Error(`Environment config for ${env} not found`);
}

/**
 * Configuration object containing environment-specific settings
 * Contains URLs, locators, and SKUs for the specified environment and country
 */
export default environmentConfig;

/**
 * Gets the homepage URL for the current environment/country
 * @returns {string} The homepage URL
 */
export function getHomepageURL() {
    return environmentConfig.homePageURL;
}

/**
 * Gets the text for the close cookies button locator
 * @returns {string} The button text used to close the cookies notification
 */
export function getCloseCookiesButton() {
    return environmentConfig.locators.closeCookiesButton;
}

/**
 * Gets the SKU for the target product in the current environment
 * @returns {string} The product SKU
 */
export function getTargetProduct() {
    return environmentConfig.sku.targetProduct;
}


