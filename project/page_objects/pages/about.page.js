import { BasePage } from "../../../framework/elements/base.page.js";
import  Button  from "../../../framework/elements/controls/button.control.js";
import * as waits from "../../../framework/helpers/waits.js"

 export class AboutPage extends BasePage{

    get socialFacebookLink(){
        return new Button($('a[href="https://www.facebook.com/owasp.juiceshop"]'), 'Social facebook link element');
    }

    open(){
        super.open('#/about');
    }

    async getSocialFacebookAttributeHrefLink(){
        return await this.socialFacebookLink.getAttribute('href');
    }

    async goToSocialFacebook(){
        allure.addStep("`Open Facebook page");

        await this.waitForPageAvailable();
        await browser.execute(() => {
            const elemToRemove = document.querySelector('.mat-drawer-backdrop.ng-star-inserted');
            elemToRemove.remove();
        });
        // await browser.clearElement($('.mat-drawer-backdrop.ng-star-inserted'));
        await this.socialFacebookLink.click();
        // await browser.executeScript("a[href=\"https://www.facebook.com/owasp.juiceshop\"].click()")
        // await browser.newWindow(await this.getSocialFacebookAttributeHrefLink());

    }
     async waitForPageAvailable() {
         await waits.waitForDisplayed(await this.socialFacebookLink);
         return this;
     }
}
export default new AboutPage();