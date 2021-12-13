import Button from "../../../../framework/elements/controls/button.control.js";

export default class BasketSummaryComponent{
    get checkoutButton(){
        return new Button($('#checkoutButton'), 'Checkout summary submit button')
    }

    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }
}