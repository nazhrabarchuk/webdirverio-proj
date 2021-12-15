import Button from "../../../framework/elements/controls/button.control.js";
import Input from "../../../framework/elements/controls/input.control.js";

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
    get userProfileButton(){
        return new Button($('button[aria-label="Go to user profile"]'), 'Go to user profile button')
    }
    get burgerButton(){
        return new Button($('button[aria-label="Open Sidenav"]'), 'Burger button');
    }
    get basketButton(){
        return new Button($('button[routerlink="/basket"]'), 'Basket button');
    }
    get searchButton(){
        return new Button($('#searchQuery'), 'Search button');
    }
    get searchInput(){
        return new Input($('#searchQuery input'), 'Search input');
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

    async clickUserProfileButton(){
        await this.userProfileButton.click();
    }

    async clickBasketButton(){
        await this.basketButton.click();
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

    async navigateToUserProfile(){
        allure.addStep("Navigate to user profile page");
        await this.openAccountMenu();
        await this.clickUserProfileButton();
    }

    async search(text){
        allure.addStep('Search items by text');
        await this.searchButton.click();
        await this.searchInput.setValue(text);
        await browser.keys("\uE007");
    }


}