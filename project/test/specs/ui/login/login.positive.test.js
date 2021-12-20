import {assert} from "chai";
import loginPage from "../../../../page_objects/pages/login.page.js";
import mainPage from "../../../../page_objects/pages/main.page.js";
import * as allureWrapper from '../../../../../framework/helpers/allure.wrapper.js';
import {clientData} from "../../../../../framework/helpers/client.js";

describe('Login testing', () => {
    before(async () => {
        allureWrapper.addAllureDescription('Positive: login test description');
        await clientData.register();
        await browser.refresh();
        await mainPage.open();

        await mainPage.waitForPageAvailable();

    });
    it('Positive: should login with valid credentials', async () => {
        await (await mainPage.getHeaderCo()).navigateToLogin();

        await loginPage.waitForPageAvailable();

        await loginPage.login(EMAIL_DEFAULT_TEXT, PASSWORD_DEFAULT_TEXT);

        await mainPage.waitForPageAvailable();

        await (await mainPage.getHeaderCo()).openAccountMenu();

        await browser.pause(2000);

        assert.isTrue(await (await mainPage.getHeaderCo()).isLogoutButtonExist());
    });
});

