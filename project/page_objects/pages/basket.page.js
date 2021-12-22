import {BasePage} from "../../../framework/elements/base.page.js";
import TextView from "../../../framework/elements/controls/text.view.control.js";
import Button from "../../../framework/elements/controls/button.control.js";
import * as waits from "../../../framework/helpers/waits.js";
import BasketAddressComponent from "../components/basket/basket.address.component.js";
import BasketDeliveryComponent from "../components/basket/basket.delivery.component.js";
import BasketPaymentComponent from "../components/basket/basket.payment.component.js";
import BasketSummaryComponent from "../components/basket/basket.summary.component.js";
import {ADDRESS_DATA, CARD_DATA} from "../../../framework/helpers/dataProvider.js";


class BasketPage extends BasePage {

    get basketItems() {
        return new TextView($('mat-row.mat-row'), 'Basket items');
    }

    get itemRemoveButton() {
        return new Button($('.cdk-column-remove button'), 'Remove item from basket button')
    }

    get checkoutButton() {
        return new Button($('#checkoutButton'), 'Basket checkout button');
    }

    get snackBar(){
        return new TextView($('//*[contains(text(),\'We are out of stock! Sorry for the inconvenience.\')]'), 'SnackBar modal')
    }
    get plusItemButton(){
        return new Button($('.mat-icon-button.mat-button-base.ng-star-inserted:last-child'), 'Plus count for item in basket');
    }

    async basketNotEmpty() {
        return await this.basketItems.isDisplayed();
    }

    async removeItemFromBasket() {
       await this.itemRemoveButton.click();
    }

    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }

    async waitForPageAvailable() {
        await waits.waitForDisplayed(await this.checkoutButton);
    }

    async isSnackBarExisting(){
        return await this.snackBar.isExisting();
    }

    async plusCountItem(){
        while (!(await this.isSnackBarExisting())){
            await this.plusItemButton.click();
            await browser.pause(50);
        }
    }
    async getBasketAddressCo(){
        return new BasketAddressComponent();
    }
    async getBasketDeliveryCo(){
        return new BasketDeliveryComponent();
    }
    async getBasketPaymentCo(){
        return new BasketPaymentComponent();
    }
    async getBasketSummaryCo(){
        return new BasketSummaryComponent();
    }

    async  basketPurchaseFlow(){
        allure.addStep("Basket purchase flow steps");
        await this.clickCheckoutButton();

        //TODO: delete
        await browser.pause(1000);
        // await (await this.getBasketAddressCo()).waitForComponentAvailable();

        await ((await this.getBasketAddressCo()).addNewAddress(
            ADDRESS_DATA.country,
            ADDRESS_DATA.name,
            ADDRESS_DATA.mobileNumber,
            ADDRESS_DATA.zip,
            ADDRESS_DATA.address,
            ADDRESS_DATA.city,
            ADDRESS_DATA.state
        ));
        await (await this.getBasketAddressCo()).waitForComponentAvailable();

        await (await this.getBasketAddressCo()).chooseAddress();

        await (await this.getBasketDeliveryCo()).waitForPageAvailable();

        await (await this.getBasketDeliveryCo()).chooseDelivery();

        await (await this.getBasketPaymentCo()).waitForComponentsAvailable();

        await (await this.getBasketPaymentCo()).createNewCard(
            CARD_DATA.name,
            CARD_DATA.number,
            CARD_DATA.month,
            CARD_DATA.year
        )
        await (await this.getBasketPaymentCo()).waitForComponentsAvailable();

        await (await this.getBasketPaymentCo()).chooseCard();

        await (await this.getBasketSummaryCo()).waitForComponentAvailable();

        await (await this.getBasketSummaryCo()).clickCheckoutButton();

        await (await this.getBasketSummaryCo()).waitForSummaryMessageAvailable();
    }
}

export default new BasketPage();