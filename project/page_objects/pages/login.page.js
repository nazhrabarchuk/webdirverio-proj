import {BasePage} from "../../../framework/elements/base.page.js";
import Button from "../../../framework/elements/controls/button.control.js";
import Input from "../../../framework/elements/controls/input.control.js";
import TextView from "../../../framework/elements/controls/text.view.control.js";
import * as waits from "../../../framework/helpers/waits.js";

class LoginPage extends BasePage {

    get emailInput() {
        return new Input($('#email'), 'Login email input');
    }

    get passwordInput() {
        return new Input($('#password'), 'Login password input')
    }

    get loginSubmitButton() {
        return new Button($('button#loginButton'), 'Login submit button');
    }

    get errorTextElement() {
        return new TextView($('.error'), 'Error login message element');
    }

    get registrationButton() {
        return new Button($('a[href="#/register"]'), 'Registration button');
    }

    open() {
        super.open('/#/login');
    }

    async login(email, pass) {
        allure.addStep("Set login credentials");
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(pass);
        await this.loginSubmitButton.click();
    }

    async isErrorTextElementExist() {
        return this.errorTextElement.isExisting();
    }

    async getErrorText() {
        return this.errorTextElement.getText();
    }

    async clickRegisterButton() {
        await this.registrationButton.click();
    }

    async waitForPageAvailable() {
        await waits.waitForDisplayed(await this.emailInput);
        return this;
    }

    async waitForErrorTextExisting() {
        await waits.waitForDisplayed(await this.errorTextElement);
    }

}

export default new LoginPage();