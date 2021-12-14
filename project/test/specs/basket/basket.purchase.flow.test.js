import * as allureWrapper from "../../../../framework/helpers/allure.wrapper.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import loginPage from "../../../page_objects/pages/login.page.js";
import basketPage from "../../../page_objects/pages/basket.page.js";
import {assert, expect} from "chai";

const CONFIRMATION_TEXT = 'Thank you for your purchase!';

const ADDRESS_DATA = {
    country: 'Country',
    name: 'Name',
    mobileNumber: 1234567,
    zip: 'zip',
    address: 'Address',
    city: 'City',
    state: 'State'
}
const CARD_DATA = {
    name: 'Name 1',
    number: 1234567891234567,
    month: 1,
    year: 2080
}

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
            ADDRESS_DATA.country,
            ADDRESS_DATA.name,
            ADDRESS_DATA.mobileNumber,
            ADDRESS_DATA.zip,
            ADDRESS_DATA.address,
            ADDRESS_DATA.city,
            ADDRESS_DATA.state
        ));
        await (await basketPage.getBasketAddressCo()).waitForComponentAvailable();

        await (await basketPage.getBasketAddressCo()).chooseAddress();

        await (await basketPage.getBasketDeliveryCo()).waitForPageAvailable();

        await (await basketPage.getBasketDeliveryCo()).chooseDelivery();

        await (await basketPage.getBasketPaymentCo()).waitForComponentsAvailable();

        await (await basketPage.getBasketPaymentCo()).createNewCard(
            CARD_DATA.name,
            CARD_DATA.number,
            CARD_DATA.month,
            CARD_DATA.year
        )

        await (await basketPage.getBasketPaymentCo()).waitForComponentsAvailable();

        await (await basketPage.getBasketPaymentCo()).chooseCard();

        await (await basketPage.getBasketSummaryCo()).waitForComponentAvailable();

        await (await basketPage.getBasketSummaryCo()).clickCheckoutButton();

        await (await basketPage.getBasketSummaryCo()).waitForSummaryMessageAvailable();

        assert.isTrue(await (await basketPage.getBasketSummaryCo()).isConfirmationTextDisplayed());
        expect(await (await basketPage.getBasketSummaryCo()).getConfirmationText()).is.equal(CONFIRMATION_TEXT);
    });
})
