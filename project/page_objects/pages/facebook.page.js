import { BasePage } from "../../../framework/elements/base.page.js";
import Button from "../../../framework/elements/controls/button.control.js";
import * as waits from "../../../framework/helpers/waits.js";

 class FacebookPage extends BasePage{

    get profileLink(){
        return new Button($('a[href="https://www.facebook.com/owasp.juiceshop/"]'), 'Profile link element');
    }

    async getProfileLinkText(){
        return this.profileLink.getText();
    }

    async isProfileLinkElementExist(){
        return this.profileLink.isExisting();
    }

     async waitForPageAvailable() {
         await waits.waitForDisplayed(await this.profileLink);
         return this;
     }

}

export default new FacebookPage();