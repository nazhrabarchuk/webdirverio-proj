import mainPage from "../../../../page_objects/pages/main.page.js";
import {clientData} from "../../../../../framework/helpers/client.js";
import basketPage from "../../../../page_objects/pages/basket.page.js";
import {assert} from "chai";
import * as allureWrapper from "../../../../../framework/helpers/allure.wrapper.js";

const SEARCH_ITEM_TEXT = 'Woodruff Syrup "Forest Master X-Treme"';

describe('Buying last items and checking if items are marked as sold-out test', () => {
    before(async () => {
        allureWrapper.addAllureDescription('Positive: Buy last item & check if items sold-out');
        await clientData.register();
        await clientData.getAuthToken();
        await mainPage.open();
        await clientData.setBrowserCreds();

        await browser.pause(2000);

        await mainPage.waitForPageAvailable();
    });
    it('Should buy last items & marked as sold-out', async () => {
        await (await mainPage.getHeaderCo()).search(SEARCH_ITEM_TEXT);
        await mainPage.waitForPageAvailable();

        await (await mainPage.getProductsComponent()).addItemProductToBasket(1);
        await (await mainPage.getHeaderCo()).clickBasketButton();

        await basketPage.waitForPageAvailable();

        await basketPage.plusCountItem();

        //TODO: replace with waits
        // await browser.pause(2000);

        await basketPage.waitForPageAvailable();

        await basketPage.basketPurchaseFlow();

        await (await mainPage.getHeaderCo()).search(SEARCH_ITEM_TEXT);
        await mainPage.waitForPageAvailable();

        assert.isTrue(await (await mainPage.getProductsComponent()).isItemSoldMarkedExisting());
    })
})