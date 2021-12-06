import BasePage from "../../../framework/elements/base.page.js";
import { Button } from "../../../framework/elements/controls/button.control.js";
import { Input } from "../../../framework/elements/controls/input.control.js";
import { TextView } from "../../../framework/elements/controls/text.view.control.js";

const LOGIN_EMAIL_INPUT = '#email';
const LOGIN_PASSWORD_INPUT = '#password';
const LOGIN_SUBMIT_BUTTON = 'button#loginButton';
const ERROR_TEXT_ELEMENT = '.error';

class LoginPage extends BasePage{

    async getEmailInput(){
        return this.getElement(Input, LOGIN_EMAIL_INPUT, 'Login email input');
    }
    async getPasswordInput(){
        return this.getElement(Input, LOGIN_PASSWORD_INPUT, 'Login password input');
    }
    async getLoginSubmitButton(){
        return this.getElement(Button, LOGIN_SUBMIT_BUTTON, 'Login submit button');
    }
    async getErrorTextElement(){
        return this.getElement(TextView, ERROR_TEXT_ELEMENT, 'Error login mesage element');
    }

    open(){
        super.open('/#/login');
    }

    async login(email, pass){
        await this.getEmailInput().setValue(email);
        await this.getPasswordInput().setValue(pass);
        await this.getLoginSubmitButton().click();
    }
    async isErrorTextElementExist(){
        return this.getErrorTextElement().isExisting();
    }
    async getErrorText(){
        return this.getErrorTextElement().getText();
    }

}
export default new LoginPage();