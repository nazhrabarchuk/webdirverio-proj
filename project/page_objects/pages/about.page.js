import BasePage from "./base.page.js";

 export class AboutPage extends BasePage{

    get socialFacebookLink(){
        return $('a[href="https://www.facebook.com/owasp.juiceshop"]');
    }

    open(){
        super.open('#/about')
    }

    async getSocialFacebookAttributeHrefLink(){
        return this.socialFacebookLink.getAttribute('href');
    }

    async goToSocialFacebook(){
        await this.socialFacebookLink.click();
    }
}
export default new AboutPage();