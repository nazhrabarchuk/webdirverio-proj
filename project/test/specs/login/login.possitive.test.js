import {assert, expect} from "chai";
import loginPage from "../../../page_objects/pages/login.page.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import * as allureWrapper from '../../../../framework/helpers/allure.wrapper.js';
import superagent from "superagent";

const baseUrl = 'http://localhost:3000/';
const EMAIL_DEFAULT_TEXT = 'test2@test.com';
const PASSWORD_DEFAULT_TEXT = 'testtest';
describe('Login testing', () => {

    before(async () => {
        allureWrapper.addAllureDescription('Positive: login test description');
        await mainPage.open();
        await (await mainPage.getHeaderCo()).navigateToLogin();
        await loginPage.waitForPageAvailable();
    });
    it('API POST: Create user', async () => {
        const responseGetSecurityQuestion = await superagent.get(baseUrl + 'api/SecurityQuestions/?id=1');
        const responseSecurityQuestionStringify = JSON.stringify(responseGetSecurityQuestion.body);

        const requestBody = {
            "email": "test2@test.com", "password": "testtest", "passwordRepeat": "testtest",
            "securityQuestion": responseSecurityQuestionStringify,
            "securityAnswer": "test"
        };

        const response = await superagent.post(baseUrl + 'api/Users/', requestBody);

        expect(response.statusCode).to.equal(201);
    });


    it('Positive: should login with valid credentials', async () => {
        await loginPage.login(EMAIL_DEFAULT_TEXT, PASSWORD_DEFAULT_TEXT);

        await mainPage.waitForPageAvailable();

        global.token = await browser.execute( (key) => {
            return this.localStorage.getItem(key)
        }, 'token')

        await (await mainPage.getHeaderCo()).openAccountMenu();

        await browser.pause(2000);

        assert.isTrue(await (await mainPage.getHeaderCo()).isLogoutButtonExist());
    });
});

