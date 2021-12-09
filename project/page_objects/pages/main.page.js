import HeaderComponent  from "../components/header.component.js";
import SidebarComponent  from "../components/sidebar.component.js";
import Button  from "../../../framework/elements/controls/button.control.js";
import HtmlElement from "../../../framework/elements/element.wrapper.js";
import { BasePage } from "../../../framework/elements/base.page.js";
import allureReporter from '@wdio/allure-reporter';
import AllureReporter from "@wdio/allure-reporter";

class MainPage extends BasePage{


    get closeDialogButton(){
        return new Button($('button.close-dialog'), 'Close modal window');
    }

   async clickCloseDialogButton(){
      await this.closeDialogButton.click();
   }

async open(){
       allure.addStep("`Open Main page");
       super.open('/#');
        // if(await this.closeDialogButton.isExisting()){
            await this.clickCloseDialogButton();
        // }
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
      
}

export default new MainPage();
