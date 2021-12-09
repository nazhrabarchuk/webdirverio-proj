import { assert } from "chai";
import aboutPage from "../../../page_objects/pages/about.page.js";
import facebookPage from "../../../page_objects/pages/facebook.page.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import * as allureWrapper from "../../../../framework/helpers/allure.wrapper.js";

describe('Open social Faсebook testing', () => {
    before(async () => {
        allureWrapper.addAllureDescription('Positive: Open facebook page test description');
        await mainPage.open();
        await (await mainPage.getHeaderCo()).clickBurgerButton();
    });
    it('Positive: should switch to Facebook page', async () => {
        await browser.pause(1000);

        await (await mainPage.getSidebarCo()).clickAboutUsLink();
        await aboutPage.goToSocialFacebook();
        await browser.switchWindow(await aboutPage.getSocialFacebookAttributeHrefLink());

        await browser.pause(1000);

        assert.isTrue(await facebookPage.isProfileLinkElementExist())
    });
});