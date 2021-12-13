import * as allureWrapper from "../../../../framework/helpers/allure.wrapper.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import loginPage from "../../../page_objects/pages/login.page.js";
import basketPage from "../../../page_objects/pages/basket.page.js";


describe('Purchase flow test', () => {
    before(async () => {
        allureWrapper.addAllureDescription('Complete basket purchase flow test');
        await mainPage.open();
        await (await mainPage.getHeaderCo()).navigateToLogin();
        await loginPage.waitForPageAvailable();
        await loginPage.login('test13@test.com', 'testtest');

        await mainPage.waitForPageAvailable();

    });
    it('Should correct buy item from basket', async () => {
        await (await mainPage.getProductsComponent()).addItemProductToBasket(1);
        await (await mainPage.getHeaderCo()).clickBasketButton();

        await basketPage.clickCheckoutButton();
        await (await basketPage.getBasketAddressCo()).waitForComponentAvailable();

        await ((await basketPage.getBasketAddressCo()).addNewAddress(
            'Country',
            'Name',
            1234567,
            'zip',
            'Address',
            'City',
            'State'
        ));

        await (await basketPage.getBasketAddressCo()).waitForComponentAvailable();

        await (await basketPage.getBasketAddressCo()).chooseAddress();

        await (await basketPage.getBasketDeliveryCo()).waitForPageAvailable();

        await (await basketPage.getBasketDeliveryCo()).chooseDelivery();

        await (await basketPage.getBasketPaymentCo()).waitForComponentsAvailable();

        await (await basketPage.getBasketPaymentCo()).createNewCard(
            'Name 1',
            1234567891234567,
            1,2080
        )
        await (await basketPage.getBasketPaymentCo()).waitForComponentsAvailable();

        await (await basketPage.getBasketPaymentCo()).chooseCard();

        await (await basketPage.getBasketSummaryCo()).waitForComponentAvailable();

        await (await basketPage.getBasketSummaryCo()).clickCheckoutButton();

        await browser.pause(2000);

        assert.isTrue(await (await basketPage.getBasketSummaryCo()).isConfirmationTextDisplayed());
    });
})