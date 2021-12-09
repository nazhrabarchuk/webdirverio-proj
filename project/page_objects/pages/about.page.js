import { BasePage } from "../../../framework/elements/base.page.js";
import  Button  from "../../../framework/elements/controls/button.control.js";

 export class AboutPage extends BasePage{

    get socialFacebookLink(){
        return new Button($('a[href="https://www.facebook.com/owasp.juiceshop"]'), 'Social facebook link element');
    }

    open(){
        super.open('#/about');
    }

    async getSocialFacebookAttributeHrefLink(){
        return this.socialFacebookLink.getAttribute('href');
    }

    async goToSocialFacebook(){
        allure.addStep("`Open Facebook page");
        await this.socialFacebookLink.click();
    }
}
export default new AboutPage();