import Button from "../../../../framework/elements/controls/button.control.js";
import Input from "../../../../framework/elements/controls/input.control.js";
import * as waits from "../../../../framework/helpers/waits.js";

export default class BasketAddressComponent {

    get addAddressButton() {
        return new Button($('button[aria-label="Add a new address"]'), "Add new address button");
    }

    get itemAddressButton() {
        return new Button($('label.mat-radio-label'), 'Select address button');
    }

    get continueButton() {
        return new Button($('button[aria-label="Proceed to payment selection"]'), 'Proceed to payment selection игеещт')
    }

    get addressCountryInput() {
        return new Input($('#mat-input-1'), 'Add new address country input');
    }

    get addressNameInput() {
        return new Input($('#mat-input-2'), 'Add new address name input');
    }

    get addressMobileNumberInput() {
        return new Input($('#mat-input-3'), 'Add new address mobile number input');
    }

    get addressZipInput() {
        return new Input($('#mat-input-4'), 'Add new address zip input');
    }

    get addressInput() {
        return new Input($('#mat-input-5'), 'Add new address input');
    }

    get addressCityInput() {
        return new Input($('#mat-input-6'), 'Add new address city input');
    }

    get addressStateInput() {
        return new Input($('#mat-input-7'), 'Add new address state input');
    }

    get addressSubmitButton() {
        return new Button($('#submitButton'), 'Add new address submit button');
    }

    async clickAddressButton() {
        await this.addAddressButton.click();
    }

    async clickItemAddressButton() {
        await this.itemAddressButton.click();
    }
    async clickContinueButton(){
        await this.continueButton.click();
    }

    async addNewAddress(country, name, mobileNumber, zip, address, city, state) {
        if (typeof mobileNumber !== 'number' || mobileNumber.length < 6) {
            throw Error(`Argument ${mobileNumber} must be a number`);
        }
        await this.addressCountryInput.setValue(country);
        await this.addressNameInput.setValue(name);
        await this.addressMobileNumberInput.setValue(mobileNumber);
        await this.addressZipInput.setValue(zip);
        await this.addressInput.setValue(address);
        await this.addressCityInput.setValue(city);
        await this.addressStateInput.setValue(state);

        await this.addressSubmitButton.click();
    }

    async chooseAddress(){
        await this.clickItemAddressButton();
        await this.clickContinueButton();
    }

    async waitForComponentAvailable() {
        await waits.waitForDisplayed(await this.addAddressButton);
    }
}