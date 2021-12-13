import Button from "../../../../framework/elements/controls/button.control.js";
import TextView from "../../../../framework/elements/controls/text.view.control.js";
import * as waits from "../../../../framework/helpers/waits.js";

export default class BasketSummaryComponent{
    get checkoutButton(){
        return new Button($('#checkoutButton'), 'Checkout summary submit button')
    }

    get confirmationText(){
        return new TextView($('h1.confirmation'), 'Confirmation text').getText();
    }

    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }

    async waitForComponentAvailable() {
        await waits.waitForDisplayed(await this.checkoutButton);
        return this;
    }

    async waitForSummaryMessageAvailable(){
        await waits.waitForDisplayed(await this.confirmationText);
    }

    async isConfirmationTextDisplayed(){
        return this.confirmationText.isDisplayed();
    }
}