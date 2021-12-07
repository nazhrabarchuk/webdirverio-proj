import { BasePage } from "../../../framework/elements/base.page.js";
import Button from "../../../framework/elements/controls/button.control.js";

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

}

export default new FacebookPage();