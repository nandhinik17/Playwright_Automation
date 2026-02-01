const {test, expect} = require('@playwright/test');

test.only('UI Basics Test', async({page})=>{
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto('https://playwright.dev/');
    console.log("Page Title: " + await page.title());
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
});