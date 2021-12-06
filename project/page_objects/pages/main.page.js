import { HeaderComponent } from "../components/header.component.js";
import { SidebarComponent } from "../components/sidebar.component.js";
import BasePage from "../../../framework/elements/base.page.js";
import  Button  from "../../../framework/elements/controls/button.control.js";
import HtmlElement from "../../../framework/elements/element.wrapper.js";

 export class MainPage extends BasePage{
   open(){
       super.open('/#');
       if(await this.closeDialogButton.isExisting()){
            await this.clickCloseDialogButton();
       }
   }

   async clickCloseDialogButton(){
      await this.closeDialogButton.click();
   }
   
   async getHeaderCo(){
       return new HeaderComponent();
   }
   async getSidebarCo(){
       return new SidebarComponent();
   }

   async getHtmlElementCo(){
       return new HtmlElement();
   }
   
   get closeDialogButton(){
    return new Button($('button.close-dialog'), 'Close modal window');
}

     
}

export default new MainPage();
