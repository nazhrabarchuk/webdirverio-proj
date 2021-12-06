import BasePage from "./base.page.js";

export class FacebookPage extends BasePage{
    get profileLinkText(){
        return $('a[href="https://www.facebook.com/owasp.juiceshop/"]')
    }

    async getProfileLinkText(){
        return this.profileLinkText.getText();
    }

    async isProfileLinkElementExist(){
        return this.profileLinkText.isExisting();
    }

}

export default new FacebookPage();