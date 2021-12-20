import * as allureWrapper from "../../../../../framework/helpers/allure.wrapper.js";
import mainPage from "../../../../page_objects/pages/main.page.js";
import basketPage from "../../../../page_objects/pages/basket.page.js";
import {assert, expect} from "chai";
import {clientData} from "../../../../../framework/helpers/client.js";

const CONFIRMATION_TEXT = 'Thank you for your purchase!';

describe('Purchase flow test', () => {
    before(async () => {
        allureWrapper.addAllureDescription('Complete basket purchase flow test');
        await clientData.register();
        await clientData.getAuthToken();
        await mainPage.open();
        await clientData.setBrowserCreds();

        await mainPage.waitForPageAvailable();

    });
    it('Should correct buy item from basket', async () => {
        await (await mainPage.getProductsComponent()).addItemProductToBasket(1);
        await (await mainPage.getHeaderCo()).clickBasketButton();

        await basketPage.basketPurchaseFlow();

        assert.isTrue(await (await basketPage.getBasketSummaryCo()).isConfirmationTextDisplayed());
        expect(await (await basketPage.getBasketSummaryCo()).getConfirmationText()).is.equal(CONFIRMATION_TEXT);
    });
})
