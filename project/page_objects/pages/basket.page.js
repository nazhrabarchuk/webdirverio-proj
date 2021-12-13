import {BasePage} from "../../../framework/elements/base.page.js";
import TextView from "../../../framework/elements/controls/text.view.control.js";
import Button from "../../../framework/elements/controls/button.control.js";
import * as waits from "../../../framework/helpers/waits.js";
import BasketAddressComponent from "../components/basket/basket.address.component.js";


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

    async getBasketAddressComponent(){
        return new BasketAddressComponent();
    }
}

export default new BasketPage();