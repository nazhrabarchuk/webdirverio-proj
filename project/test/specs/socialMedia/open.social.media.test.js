

import { assert } from "chai";
import aboutPage from "../../../page_objects/pages/about.page.js";
import facebookPage, { FacebookPage } from "../../../page_objects/pages/facebook.page.js";
import MainPage from "../../../page_objects/pages/main.page.js";

const SOCIAL_FACEBOOK_PROFILE_TITLE = 'OWASP Juice Shop';
describe('Open social Faebook testing', () => {
    it('Positive: should switch to Facebook page', async () => {
        MainPage.open();
        await (await MainPage.getHeaderCo()).clickBurgerButton();
        await browser.pause(1000);
        await (await MainPage.getSidebarCo()).clickAboutUsLink();
       await aboutPage.goToSocialFacebook();
        await browser.switchWindow(await aboutPage.getSocialFacebookAttributeHrefLink());
        await browser.pause(5000);
        // expect(await facebookPage.getProfileLinkText()).to.equal(SOCIAL_FACEBOOK_PROFILE_TITLE);
        assert.isTrue(await facebookPage.isProfileLinkElementExist())
    });
});