import {assert, expect} from "chai";
import loginPage from "../../../page_objects/pages/login.page.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import * as allureWrapper from '../../../../framework/helpers/allure.wrapper.js';
import superagent from "superagent";
import {requestSender} from "../../../../framework/helpers/http.request.wrapper.js";
import registrationPage from "../../../page_objects/pages/registration.page.js";
import {Client, clientData} from "../../../../framework/helpers/client.js";

// const EMAIL_DEFAULT_TEXT = `${registrationPage.randomData}@test.com`;
// const PASSWORD_DEFAULT_TEXT = registrationPage.randomData;
describe('Login testing', () => {

    beforeEach(async () => {
        allureWrapper.addAllureDescription('Positive: login test description');
        await mainPage.open();

        console.log("\n\n\ PREPARE TO GET TOKEN \n\n\n")

        await clientData.register();
        // const token = await Client.getToken();
        //
        // const register = clientData.register();
        //
        // const login = clientData.login().then((t) => {
        //     console.log(t);
        // });


        // console.log("\n\n\ GET TOKEN IS : ", token, '\n\n');


        // console.log('*************** createdUser *************', createdUser)
        // expect(createdUser.statusCode).to.equal(201);
    });
    it('API POST: Create user', async () => {
        // const responseGetSecurityQuestion =  JSON.stringify(await superagent.get(baseUrl + 'api/SecurityQuestions/?id=1').body);
        //
        // const requestBody = {
        //     "email": "test13@test.com", "password": "testtest", "passwordRepeat": "testtest",
        //     "securityQuestion": responseGetSecurityQuestion,
        //     "securityAnswer": "test"
        // };
        // const response = await superagent.post(baseUrl + 'api/Users/', requestBody);
        // expect(response.statusCode).to.equal(201);
    });


    it('Positive: should login with valid credentials', async () => {
        await (await mainPage.getHeaderCo()).navigateToLogin();

        await loginPage.waitForPageAvailable();

        await loginPage.login(EMAIL_DEFAULT_TEXT, PASSWORD_DEFAULT_TEXT);
        //
        await mainPage.waitForPageAvailable();
        //

        //
        await (await mainPage.getHeaderCo()).openAccountMenu();
        //
        await browser.pause(2000);
        //
        assert.isTrue(await (await mainPage.getHeaderCo()).isLogoutButtonExist());
    });
});

