

import aboutPage from "../../../page_objects/pages/about.page.js";
import facebookPage from "../../../page_objects/pages/facebook.page.js";
import MainPage from "../../../page_objects/pages/main.page.js";

const SOCIAL_FACEBOOK_PROFILE_TITLE = 'OWASP Juice Shop';
describe('Open social Faebook testing', () => {
    before(async () => {
        MainPage.open();
        await (await MainPage.getHeaderCo()).clickBurgerButton();
        await browser.pause(1000);
        await (await MainPage.getSidebarCo()).clickAboutUsLink();
    });

    it('Positive: should switch to Facebook page', async () => {
       await aboutPage.goToSocialFacebook();
        await browser.switchWindow(await aboutPage.getSocialFacebookAttributeHrefLink());
        await browser.pause(2000);
        expect(await facebookPage.getProfileLinkText()).to.equal(SOCIAL_FACEBOOK_PROFILE_TITLE);
    });
});