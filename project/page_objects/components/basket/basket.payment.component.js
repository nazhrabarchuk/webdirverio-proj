import TextView from "../../../../framework/elements/controls/text.view.control.js";
import Input from "../../../../framework/elements/controls/input.control.js";
import Dropdown from "../../../../framework/elements/controls/dropdown.control.js";
import Button from "../../../../framework/elements/controls/button.control.js";

export default class BasketPaymentComponent{
    get newCardElement(){
        return new TextView($('#mat-expansion-panel-header-0 .mat-expansion-panel-header-description'), 'Add new card slide down element');
    }

    get newCardNameInput(){
        return new Input($('#mat-input-8'), 'New card name input')
    }
    get newCardNumberInput(){
        return new Input($('#mat-input-9'), 'New card number input')
    }

    get newCardExpiryMonthDropdown(){
        return new Dropdown($('#mat-input-10'), 'New card expiry month dropdown');
    }
    get newCardExpiryYearDropdown(){
        return new Dropdown($('#mat-input-11'), 'New card expiry year dropdown');
    }

    get itemCardButton(){
        return new Button($('label[for="mat-radio-43-input"]'), 'Choose item card button')
    }
    get submitButton(){
        return new Button($('#submitButton'), 'New card data submit button');
    }
    get continueButton(){
        return new Button($('button[aria-label="Proceed to review"]'), 'Proceed to review button')
    }

    async clickNewCardElement(){
        await this.newCardElement.click();
    }
    async clickItemCardButton(){
        await this.itemCardButton.click();
    }

    async createNewCard(){
        // TODO: createNewCard()
    }

    async chooseCard(){
        // TODO: chooseCard()
    }
}