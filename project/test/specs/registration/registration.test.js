import loginPage from "../../../page_objects/pages/login.page.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import registrationPage from "../../../page_objects/pages/registration.page.js";
import { assert, expect  } from "chai";
const REGISTRATION_EMAIL_TEXT = `${registrationPage.randomData}@test.com`
const REGISTRATION_PASS_TEXT = registrationPage.randomData;
const SECURITY_QUESTION_TEXT = "Mother\'s maiden name?";
const SECURITY_ANSWER_TEXT = "Mothers name";

describe('Registration testing', () => {
    before(async () => {
        await mainPage.open();
        await (await mainPage.getHeaderCo()).navigateToLogin();
    });

    it('Positive: should register with valid credentials', async () => {
        await loginPage.clickRegisterButton();

        await registrationPage.registration(
            REGISTRATION_EMAIL_TEXT,
            REGISTRATION_PASS_TEXT,
            REGISTRATION_PASS_TEXT,
            SECURITY_QUESTION_TEXT,
            SECURITY_ANSWER_TEXT
        )
        await browser.waitUntil(async () => (await loginPage.registrationButton.isExisting()),
            { timeout: 5000,
            timeoutMsg: 'expected element does not exist after 5s'});

        expect(await browser.getUrl()).is.equal('http://localhost:3000/#/login');

    });
});