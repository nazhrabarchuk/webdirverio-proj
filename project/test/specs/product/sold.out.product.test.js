import mainPage from "../../../page_objects/pages/main.page.js";
import {Client, clientData} from "../../../../framework/helpers/client.js";
import superagent from "superagent";
import loginPage from "../../../page_objects/pages/login.page.js";
import basketPage from "../../../page_objects/pages/basket.page.js";
import {assert} from "chai";

describe('Buying last items and checking if items are marked as sold-out test', () => {
    before(async () => {
        await mainPage.open();

        await clientData.register();
        await (await mainPage.getHeaderCo()).navigateToLogin();
        await loginPage.login(EMAIL_DEFAULT_TEXT, PASSWORD_DEFAULT_TEXT)

    });
    it('Should buy last items & marked as sold-out', async () => {
        await (await mainPage.getHeaderCo()).search('Woodruff Syrup "Forest Master X-Treme"');
        await mainPage.waitForPageAvailable();

        await (await mainPage.getProductsComponent()).addItemProductToBasket(1);
        await (await mainPage.getHeaderCo()).clickBasketButton();

        await basketPage.waitForPageAvailable()

        await basketPage.plusCountItem();
        await browser.pause(2000);
        await basketPage.basketPurchaseFlow();

        await (await mainPage.getHeaderCo()).search('Woodruff Syrup "Forest Master X-Treme"');
        await mainPage.waitForPageAvailable();

        assert.isTrue(await (await mainPage.getProductsComponent()).isItemSoldMarkedExisting());
    })
})