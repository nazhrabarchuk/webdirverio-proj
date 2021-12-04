import { MainPage } from "../pages/main.page";


export class HeaderComponent extends MainPage{

    get accountButton(){
        return $('#navbarAccount');
    }
    get loginButton(){
        return $('#navbarLoginButton');
    }
    get logoutButton(){
        return $('#navbarLogoutButton');
    }

    async clickAccountButton(){
        return this.accountButton.click();
    }
    async clickLoginButton(){
        return this.loginButton.click();
    }
     async isLogoutButtonExist(){
        return this.logoutButton.isExisting();
    }
 
    async openAccountMenu(){
        await this.clickAccountButton();
    }
 
    async navigateToLogin(){
        await this.openAccountMenu();
        await this.clickLoginButton();
    }

}