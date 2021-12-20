import * as allureWrapper from "../../../../../framework/helpers/allure.wrapper.js";
import mainPage from "../../../../page_objects/pages/main.page.js";
import profilePage from "../../../../page_objects/pages/profile.page.js";
import {assert, expect} from "chai";
import {Client, clientData} from "../../../../../framework/helpers/client.js";

const NEW_USERNAME = 'Super User';
const NEW_IMAGE_URL = 'https://www.w3schools.com/howto/img_avatar.png';

describe('Edit profile info test', () => {
    before(async () => {
        allureWrapper.addAllureDescription('Edit user profile info');
        console.log("\n\n Start user authorization \n\n");
        await clientData.register();
        await clientData.getAuthToken();

        await mainPage.open();
        await clientData.setBrowserCreds();
        await mainPage.waitForPageAvailable();

        await (await mainPage.getHeaderCo()).navigateToUserProfile();
    })

    it('Positive: Set new username', async () => {
        await profilePage.waitForPageAvailable();
        await profilePage.setUsername(NEW_USERNAME);

        await profilePage.waitForPageAvailable();
        expect(await profilePage.profileNameText).to.have.string(NEW_USERNAME);
    });
    it('Positive: Should change profile photo', async () => {
        await profilePage.waitForPageAvailable();
        await profilePage.setImageUrl(NEW_IMAGE_URL);

        await browser.refresh();

        await profilePage.waitForPageAvailable();
        assert.isTrue(await profilePage.isProfileImgExisting());
    });
})