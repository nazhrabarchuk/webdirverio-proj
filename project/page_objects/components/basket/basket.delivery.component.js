import Button from "../../../../framework/elements/controls/button.control.js";

export default class BasketDeliveryComponent{

    get standardDeliveryButton(){
        return new Button($('label[for=mat-radio-42-input]'), 'Standard delivery button')
    }

    get continueButton(){
        return new Button($('button[aria-label="Proceed to delivery method selection"]'), 'Proceed to delivery method selection button')
    }

    async clickStandardDeliveryButton(){
        await this.standardDeliveryButton.click();
    }

    async clickContinueButton(){
        await this.continueButton.click();
    }

    async chooseDelivery(){
        await this.clickStandardDeliveryButton();
        await this.clickContinueButton();
    }
}