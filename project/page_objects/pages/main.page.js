import { HeaderComponent } from "../components/header.component.js";
import { SidebarComponent } from "../components/sidebar.component.js";
import BasePage from "../../../framework/elements/base.page.js";
import { Button } from "../../../framework/elements/controls/button.control.js";

const CLOSE_MODAL_WINDOW_BUTTON = 'button.close-dialog';

 export class MainPage extends BasePage{

   async getCloseDialogButton(){
       return this.getElement(Button, CLOSE_MODAL_WINDOW_BUTTON, 'Close modal window');
   }
  
   open(){
       super.open('/#');
    //    if(this.closeDialogButton.isExisting()){
        this.clickCloseDialogButton();
    //    }
   }

   async clickCloseDialogButton(){
      await this.getCloseDialogButton().click();
   }
   
   async getHeaderCo(){
       return new HeaderComponent();
   }
   async getSidebarCo(){
       return new SidebarComponent();
   }
      
}

export default new MainPage();
