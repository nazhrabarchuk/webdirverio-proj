import { assert, expect  } from "chai";
import loginPage from "../../../page_objects/pages/login.page.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import * as allureWrapper from '../../../../framework/helpers/allure.wrapper.js';

const EMAIL_DEFAULT_TEXT = 'test@test.com';
const PASSWORD_DEFAULT_TEXT = 'testtest';

describe('Login testing', () => {
    before(async () => {
      allureWrapper.addAllureDescription('Positive: login test description');
       await mainPage.open();
        await (await mainPage.getHeaderCo()).navigateToLogin();
    });

    it('Positive: should login with valid credentials', async () => {

        await loginPage.login(EMAIL_DEFAULT_TEXT, PASSWORD_DEFAULT_TEXT);
        await browser.pause(1000);

        await (await mainPage.getHeaderCo()).openAccountMenu();
        await browser.pause(1000);

        assert.isTrue(await (await mainPage.getHeaderCo()).isLogoutButtonExist());
    });
});

