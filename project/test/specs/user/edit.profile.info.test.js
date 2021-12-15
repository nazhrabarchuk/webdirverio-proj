import * as allureWrapper from "../../../../framework/helpers/allure.wrapper.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import profilePage from "../../../page_objects/pages/profile.page.js";
import {assert, expect} from "chai";
import loginPage from "../../../page_objects/pages/login.page.js";
import {Client, clientData} from "../../../../framework/helpers/client.js";
import superagent from "superagent";

const NEW_USERNAME = 'Super User';
const NEW_IMAGE_URL = 'https://www.w3schools.com/howto/img_avatar.png';

describe('Edit profile info test', () => {
    before(async () => {
        allureWrapper.addAllureDescription('Edit user profile info');
        await mainPage.open();

        console.log("\n\n Start user authorization \n\n");

        await clientData.register();

        console.log("\n\n FINISH REGISTER USER \n\n");
        // await browser.refresh();

        await (await mainPage.getHeaderCo()).navigateToLogin();
        await loginPage.login(EMAIL_DEFAULT_TEXT, PASSWORD_DEFAULT_TEXT)

        await (await mainPage.getHeaderCo()).navigateToUserProfile();
        await profilePage.waitForPageAvailable();
    })


    it('Positive: Set new username', async () => {
        await profilePage.setUsername(NEW_USERNAME);

        await profilePage.waitForPageAvailable();

        expect(await profilePage.profileNameText).to.have.string(NEW_USERNAME);
    });
    //
    it('Positive: Should change profile photo', async () => {
        await profilePage.setImageUrl(NEW_IMAGE_URL);

        await browser.refresh();

        await profilePage.waitForPageAvailable();

        assert.isTrue(await profilePage.isProfileImgExisting());
    });
})