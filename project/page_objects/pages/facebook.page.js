import { BasePage } from "../../../framework/elements/base.page.js";
import Button from "../../../framework/elements/controls/button.control.js";
import * as waits from "../../../framework/helpers/waits.js";
import TextView from "../../../framework/elements/controls/text.view.control.js";

 class FacebookPage extends BasePage{

    get profileLink(){
        return new Button($('a[href="https://www.facebook.com/owasp.juiceshop\/"]'), 'Profile link element');
    }
    get profileText(){
        return new TextView($('#seo_h1_tag span'), "Profile title text")
    }

    async getProfileLinkText(){
        return this.profileLink.getText();
    }

    async isProfileLinkElementExist(){
        return this.profileLink.isExisting();
    }

    async getProfileTitleText(){
        return this.profileText.getText();
    }
    async isProfileTitleExist(){
        return await this.profileText.isExisting();
    }

     async waitForPageAvailable() {
         await waits.waitForDisplayed(await this.profileLink);
         return this;
     }

}

export default new FacebookPage();