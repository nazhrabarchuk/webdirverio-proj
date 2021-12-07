// import { assert } from "chai";
// import aboutPage from "../../../page_objects/pages/about.page.js";
// import facebookPage from "../../../page_objects/pages/facebook.page.js";
// import mainPage from "../../../page_objects/pages/main.page.js";

// const SOCIAL_FACEBOOK_PROFILE_TITLE = 'OWASP Juice Shop';
// describe('Open social Faebook testing', () => {
//     it('Positive: should switch to Facebook page', async () => {
//          mainPage.open();
//         await (await mainPage.getHeaderCo()).clickBurgerButton();
//         await browser.pause(1000);
//         await (await mainPage.getSidebarCo()).clickAboutUsLink();
//        await aboutPage.goToSocialFacebook();
//         await browser.switchWindow(await aboutPage.getSocialFacebookAttributeHrefLink());
//         await browser.pause(5000);
//         // expect(await facebookPage.getProfileLinkText()).to.equal(SOCIAL_FACEBOOK_PROFILE_TITLE);
//         assert.isTrue(await facebookPage.isProfileLinkElementExist())
//     });
// });