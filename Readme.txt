# E-Commerce Test Automation Framework

This is a test automation framework built using Playwright for testing an e-commerce website. The framework follows the Page Object Model design pattern and includes tests for critical e-commerce functionality.

## Project Structure

This project is structured as follows:
 1. pages - This folder contains the page object models for the e-commerce website. Each page object model represents a page in the website and contains methods for interacting with the page.
 2. shop-testcases - This folder contains the test cases for the e-commerce website. Each test case is a Playwright test file that contains tests for a specific functionality.
 3. helpers - This folder contains helper functions for the tests.
 4. Readme.txt - This file contains the documentation for the project.
 5. .env - This file contains the environment variables for the project.
 6. playwright.config.ts - This file contains the configuration for the Playwright tests.
 7. package.json - This file contains the dependencies and scripts for the project.
 8. config.ts - This file contains the configuration for the project. In this file you can see the methods that will be captured based on the set environment and country.
 9. config.json - This file contains the configuration for the project. In this file you can see the variables based on countries, environments and locators that are market dependant.

## How to run the tests

To run the tests, you can use the following command:

```bash
npx playwright test 

```
You can change the environment and country settings in the .env file (repo is built for prod environment and UK, PL countries)



