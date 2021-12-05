
export class HeaderComponent{

    get accountButton(){
        return $('#navbarAccount');
    }
    get loginButton(){
        return $('#navbarLoginButton');
    }
    get logoutButton(){
        return $('#navbarLogoutButton');
    }
    get burgerButton(){
        return $('button[aria-label="Open Sidenav"]')
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
        await this.openAccountMenu();
        await this.clickLoginButton();
    }

}