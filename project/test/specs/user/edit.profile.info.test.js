import * as allureWrapper from "../../../../framework/helpers/allure.wrapper.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import profilePage from "../../../page_objects/pages/profile.page.js";
import {assert, expect} from "chai";

const NEW_USERNAME = 'Super User';
const NEW_IMAGE_URL = 'https://www.w3schools.com/howto/img_avatar.png';

describe('Edit profile info test', ()=>{
    before(async () => {
        allureWrapper.addAllureDescription('Edit user profile info');
        await mainPage.open();
        // await (await mainPage.getHeaderCo()).navigateToLogin();
        // await loginPage.waitForPageAvailable();
        // await loginPage.login('test13@test.com', 'testtest');
        // await mainPage.waitForPageAvailable();

        await (await mainPage.getHeaderCo()).navigateToUserProfile();
        await profilePage.waitForPageAvailable();
    });

    it('Positive: Set new username', async ()=>{
       await profilePage.setUsername(NEW_USERNAME);

       await profilePage.waitForPageAvailable();

       expect(await profilePage.profileNameText).to.have.string(NEW_USERNAME);
    });

    it('Positive: Should change profile photo', async ()=>{
        await profilePage.setImageUrl(NEW_IMAGE_URL);

        await browser.refresh();

        await profilePage.waitForPageAvailable();

        assert.isTrue(await profilePage.isProfileImgExisting());
    });
})