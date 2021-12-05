import BasePage from "./base.page.js";

export class FacebookPage extends BasePage{
    get profileLinkText(){
        return $('a[href="https://www.facebook.com/owasp.juiceshop/"] span')
    }

    async getProfileLinkText(){
        return this.profileLinkText.getText();
    }

}

export default new FacebookPage();