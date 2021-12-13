import TextView from "../../../../framework/elements/controls/text.view.control.js";
import Input from "../../../../framework/elements/controls/input.control.js";
import Dropdown from "../../../../framework/elements/controls/dropdown.control.js";
import Button from "../../../../framework/elements/controls/button.control.js";
import * as waits from "../../../../framework/helpers/waits.js";

export default class BasketPaymentComponent {
    get newCardElement() {
        return new TextView($('.mat-row.cdk-row:last-child label'), 'Add new card slide down element');
    }

    get newCardNameInput() {
        return new Input($(`//*[contains(text(),"Name")]/ancestor::div[contains(@class,"mat-form-field-infix")]/input`), 'New card name input')
    }

    get newCardNumberInput() {
        return new Input($(`//*[contains(text(),"Card Number")]/ancestor::div[contains(@class,"mat-form-field-infix")]/input`), 'New card number input')
    }

    get newCardExpiryMonthDropdown() {
        return new Dropdown($('//*[contains(text(),"Expiry Month")]/ancestor::div[contains(@class,"mat-form-field-infix")]/select'), 'New card expiry month dropdown');
    }

    get newCardExpiryYearDropdown() {
        return new Dropdown($('//*[contains(text(),"Expiry Year")]/ancestor::div[contains(@class,"mat-form-field-infix")]/select'), 'New card expiry year dropdown');
    }

    get itemCardButton() {
        return new Button($('label[for="mat-radio-43-input"]'), 'Choose item card button')
    }

    get submitButton() {
        return new Button($('#submitButton'), 'New card data submit button');
    }

    get continueButton() {
        return new Button($('button[aria-label="Proceed to review"]'), 'Proceed to review button')
    }

    async clickNewCardElement() {
        await this.newCardElement.click();
    }

    async clickItemCardButton() {
        await this.itemCardButton.click();
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async waitForComponentsAvailable() {
        await waits.waitForDisplayed(await this.newCardElement);
        return this;
    }

    async createNewCard(name, number, month, year) {
        // if(typeof number !== 'number' || number.split().length !== 16){
        //     throw Error(`Argument ${number} is not correct. Type must be a number & length equal 16`)
        // }
        await this.newCardElement.click();

        await this.newCardNameInput.setValue(name);
        await this.newCardNumberInput.setValue(number);
        await this.newCardExpiryMonthDropdown.selectItemByLabelValue(month);
        await this.newCardExpiryYearDropdown.selectItemByLabelValue(year);

        await this.submitButton.click();
    }

    async chooseCard() {
        await this.clickItemCardButton();
        await this.clickContinueButton();
    //    TODO: click to continue button & check label payment items !!!
    }
}