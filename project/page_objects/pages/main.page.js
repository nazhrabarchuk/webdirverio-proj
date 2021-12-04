import BasePage from "./base.page.js";

 class MainPage extends BasePage{

   get closeDialogButton(){
       return $('button.close-dialog');
   }
   get accountButton(){
       return $('#navbarAccount');
   }
   get loginButton(){
       return $('#navbarLoginButton');
   }
   get logoutButton(){
       return $('#navbarLogoutButton');
   }

   open(){
       super.open('/#');
   }

   async clickCloseDialogButton(){
      await this.closeDialogButton.click();
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
      
}

export default new MainPage();
