import * as allureWrapper from "../../../../framework/helpers/allure.wrapper.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import loginPage from "../../../page_objects/pages/login.page.js";
import basketPage from "../../../page_objects/pages/basket.page.js";
import {assert, expect} from "chai";


describe('Add/remove items to the basket', ()=>{
    before(async () => {
        allureWrapper.addAllureDescription('Add/remove items to the basket');
        await mainPage.open();
        await (await mainPage.getHeaderCo()).navigateToLogin();
        await loginPage.waitForPageAvailable();
        await loginPage.login('test13@test.com', 'testtest');

        await mainPage.waitForPageAvailable();

    });
    it('Add item to basket', async ()=>{
       await (await mainPage.getProductsComponent()).addItemProductToBasket(1);
       await (await mainPage.getHeaderCo()).clickBasketButton();

       await basketPage.waitForPageAvailable();

       assert.isTrue(await basketPage.basketNotEmpty());
    });
    it('Remove item from basket', async ()=>{
        await basketPage.removeItemFromBasket();

        await browser.refresh();

        assert.isFalse(await basketPage.basketNotEmpty());
    })
})