import Button from "../../../framework/elements/controls/button.control.js";
import * as waits from "../../../framework/helpers/waits.js";

export default class HeaderComponent{

    get accountButton(){
        return new Button($('#navbarAccount'), 'Account button');
    }
    get loginButton(){
        return new Button($('#navbarLoginButton'), 'Login Button');
    }
    get logoutButton(){
        return new Button($('#navbarLogoutButton'), 'Logout button');
    }
    get burgerButton(){
        return new Button($('button[aria-label="Open Sidenav"]'), 'Burger button');
    }

    async clickAccountButton(){
        await this.accountButton.click();
    }
    async clickLoginButton(){
        await this.loginButton.click();
    }

    async clickBurgerButton(){
        await this.burgerButton.click();
    }

     async isLogoutButtonExist(){
        return this.logoutButton.isExisting();
    }
 
    async openAccountMenu(){
        await this.clickAccountButton();
    }
 
    async navigateToLogin(){
        allure.addStep("Navigate to login form");
        await this.openAccountMenu();
        await this.clickLoginButton();
    }


}