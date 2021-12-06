import BasePage from "../../../framework/elements/base.page.js";
import { TextView } from "../../../framework/elements/controls/text.view.control.js";

const PROFILE_LINK_TEXT_ELEMENT =  $('a[href="https://www.facebook.com/owasp.juiceshop/"]');

export class FacebookPage extends BasePage{
    get profileLinkText(){
        return new TextView(PROFILE_LINK_TEXT_ELEMENT, 'Profile link element');
    }

    async getProfileLinkText(){
        return this.profileLinkText.getText();
    }

    async isProfileLinkElementExist(){
        return this.profileLinkText.isExisting();
    }

}

export default new FacebookPage();