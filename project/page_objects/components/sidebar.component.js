import  Button  from "../../../framework/elements/controls/button.control.js";
import * as waits from "../../../framework/helpers/waits.js";


export default class SidebarComponent{
    
    get aboutUsLink(){
        return new Button($('a[href="#/about"]'), 'About us link')
    }

    async clickAboutUsLink(){
        await this.aboutUsLink.click();
    }

    async waitForComponentAvailable() {
        await waits.waitForDisplayed(await this.aboutUsLink);
        return this;
    }
}