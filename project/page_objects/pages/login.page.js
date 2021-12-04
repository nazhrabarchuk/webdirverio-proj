import BasePage from "./base.page.js";

class LoginPage extends BasePage{

    get emailInput(){
        return $('#email');
    }
    get passwordInput(){
        return $('#password');
    }
    get loginSubmitButton(){
        return $('button#loginButton');
    }
    get errorTextElement(){
        return  $('.error');
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