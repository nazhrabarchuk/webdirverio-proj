import { HeaderComponent } from "../components/header.component.js";
import BasePage from "./base.page.js";

 export class MainPage extends BasePage{

   get closeDialogButton(){
       return $('button.close-dialog');
   }
  
   open(){
       super.open('/#');
       if(this.closeDialogButton.isExisting()){
        this.clickCloseDialogButton();
       }
   }

   async clickCloseDialogButton(){
      await this.closeDialogButton.click();
   }
   
   async getHeaderCo(){
       return new HeaderComponent();
   }
      
}

export default new MainPage();
