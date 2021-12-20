import {BasePage} from "../../../framework/elements/base.page.js";
import Dropdown from "../../../framework/elements/controls/dropdown.control.js";
import Input from "../../../framework/elements/controls/input.control.js";
import Button from "../../../framework/elements/controls/button.control.js";
import Randomstring from "randomstring";
import * as waits from "../../../framework/helpers/waits.js";
import TextView from "../../../framework/elements/controls/text.view.control.js";

class RegistrationPage extends BasePage {

    get registrationEmailInput() {
        return new Input($('#emailControl'), 'Registration email input');
    }

    get registrationPasswordInput() {
        return new Input($('#passwordControl'), 'Registration password input');
    }

    get registrationRepeatEmailInput() {
        return new Input($('#repeatPasswordControl'), 'Registration repeat password input');
    }

    get registrationSecurityAnswerInput() {
        return new Input($('#securityAnswerControl'), 'Registration secutiry answer input');
    }

    get registrationSubmitButton() {
        return new Button($('button#registerButton'), 'registration submit button');
    }

    get questionDropdown() {
        return new Dropdown($('[name="securityQuestion"]'), 'Security question');
    }

    get errorEmailCo() {
        return new TextView($('//*[contains(@class,\'mat-error\') and contains(text(),\'Email address is not valid.\')]'), 'Error email text');
    }

    get passNotMatchCo() {
        return new TextView($('//*[contains(@class,\'mat-error\') and contains(text(),\'Passwords do not match\')]'), 'Error pass not match text');
    }

    // get randomData() {
    //     return Randomstring.generate({
    //         charset: 'alphabetic',
    //         length: 7,
    //         capitalization: 'lowercase'
    //     })
    // }

    async getErrorEmailText() {
        return this.errorEmailCo.getText();
    }

    async getPassNotMatchText() {
        return this.passNotMatchCo.getText();
    }

    async isErrorEmailTextExisting() {
        return await this.errorEmailCo.isExisting();
    }

    async isPassNotMatchCoExisting() {
        return await this.passNotMatchCo.isExisting();
    }

    async selectQuestion(text) {
        await this.questionDropdown.select(text);
    }

    async setSecurityAnswer(value) {
        await this.registrationSecurityAnswerInput.setValue(value);
    }

    async registration(email, pass, repeatPass, securityQuestion, securityAnswer) {
        allure.addStep("Set registration credentials");
        await this.registrationEmailInput.setValue(email);
        await this.registrationPasswordInput.setValue(pass);
        await this.registrationRepeatEmailInput.setValue(repeatPass);
        await this.selectQuestion(securityQuestion);
        await this.setSecurityAnswer(securityAnswer);

        await waits.waitForDisplayed(await this.registrationSubmitButton);

        await this.registrationSubmitButton.click();
    }

    async waitForPageAvailable() {
        await waits.waitForDisplayed(await this.registrationEmailInput);
    }
}

export default new RegistrationPage();