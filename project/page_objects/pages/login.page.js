import BasePage from "../../../framework/elements/base.page.js";
import { Button } from "../../../framework/elements/controls/button.control.js";
import { Input } from "../../../framework/elements/controls/input.control.js";
import { TextView } from "../../../framework/elements/controls/text.view.control.js";

const LOGIN_EMAIL_INPUT = $('#email');
const LOGIN_PASSWORD_INPUT = $('#password');
const LOGIN_SUBMIT_BUTTON = $('button#loginButton');
const ERROR_TEXT_ELEMENT = $('.error');

class LoginPage extends BasePage{

    get emailInput(){
        return new Input(LOGIN_EMAIL_INPUT, 'Login email input');
    }
    get passwordInput(){
        return new Input(LOGIN_PASSWORD_INPUT, 'Login password input')
    }
    get loginSubmitButton(){
        return new Button(LOGIN_SUBMIT_BUTTON, 'Login submit button');
    }
    get errorTextElement(){
        return  new TextView(ERROR_TEXT_ELEMENT, 'Error login mesage element');
    }

    open(){
        super.open('/#/login');
    }

    async login(email, pass){
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(pass);
        await this.loginSubmitButton.click();
    }
    async isErrorTextElementExist(){
        return this.errorTextElement.isExisting();
    }
    async getErrorText(){
        return this.errorTextElement.getText();
    }

}
export default new LoginPage();