import loginPage from "../../../page_objects/pages/login.page.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import registrationPage from "../../../page_objects/pages/registration.page.js";
import { expect  } from "chai";
import * as allureWrapper from "../../../../framework/helpers/allure.wrapper.js";

const REGISTRATION_EMAIL_TEXT = `${registrationPage.randomData}@test.com`
const REGISTRATION_PASS_TEXT = registrationPage.randomData;
const SECURITY_QUESTION_TEXT = "Mother\'s maiden name?";
const SECURITY_ANSWER_TEXT = "Mothers name";

describe('Registration testing', () => {

    it('Positive: should register with valid credentials', async () => {
        allureWrapper.addAllureDescription('Positive: Registration test description');
        await mainPage.open();
        await (await mainPage.getHeaderCo()).navigateToLogin();
        await loginPage.waitForPageAvailable();
        await loginPage.clickRegisterButton();

        await registrationPage.registration(
            REGISTRATION_EMAIL_TEXT,
            REGISTRATION_PASS_TEXT,
            REGISTRATION_PASS_TEXT,
            SECURITY_QUESTION_TEXT,
            SECURITY_ANSWER_TEXT
        )

        await loginPage.waitForPageAvailable();
        // await browser.waitUntil(async () => (await loginPage.registrationButton.isExisting()),
        //     { timeout: 5000,
        //     timeoutMsg: 'expected element does not exist after 5s'});

        expect(await browser.getUrl()).is.equal('http://localhost:3000/#/login');

    });
});