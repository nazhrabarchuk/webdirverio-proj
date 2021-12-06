import BasePage from "../../../framework/elements/base.page.js";
import { Button } from "../../../framework/elements/controls/button.control.js";

const SOCIAL_FACEBOOK_LINK_ELEMENT = 'a[href="https://www.facebook.com/owasp.juiceshop"]';

 export class AboutPage extends BasePage{

    async getSocialFacebookLink(){
        return this.getElement(Button, SOCIAL_FACEBOOK_LINK_ELEMENT, 'Social facebook link element');
    }

    open(){
        super.open('#/about')
    }

    async getSocialFacebookAttributeHrefLink(){
        return this.getSocialFacebookLink().getAttribute('href');
    }

    async goToSocialFacebook(){
        await this.getSocialFacebookLink().click();
    }
}
export default new AboutPage();