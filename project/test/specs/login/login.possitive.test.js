import {assert, expect} from "chai";
import loginPage from "../../../page_objects/pages/login.page.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import * as allureWrapper from '../../../../framework/helpers/allure.wrapper.js';
import superagent from "superagent";

const baseUrl = 'http://localhost:3000/';
const EMAIL_DEFAULT_TEXT = 'test9@test.com';
const PASSWORD_DEFAULT_TEXT = 'testtest';
describe('Login testing', () => {

    before(async () => {
        allureWrapper.addAllureDescription('Positive: login test description');
        await mainPage.open();
        await (await mainPage.getHeaderCo()).navigateToLogin();
    });
    it('API POST: Create user', async () => {
        const responseGetSecurityQuestion = await superagent.get(baseUrl + 'api/SecurityQuestions/?id=1');
        const responseSecurityQuestionStringify = JSON.stringify(responseGetSecurityQuestion.body);
        console.log('********* SEC QUEST ********', JSON.stringify(responseGetSecurityQuestion.body))
        const requestBody = {
            "email": "test9@test.com", "password": "testtest", "passwordRepeat": "testtest",
            "securityQuestion": responseSecurityQuestionStringify,
            "securityAnswer": "test"
        };
        const response = await superagent.post(baseUrl + 'api/Users/', requestBody);
        console.log('****Response****', JSON.stringify(response));
        console.log('****Status Code****', response.statusCode);
        expect(response.statusCode).to.equal(201);
    });
    // it('API POST: add card to basket', async () => {
    //     const requestBody = {"ProductId":42, "BasketId":"6","quantity":1};
    //     const response = await superagent.post(baseUrl + 'api/BasketItems/').send(requestBody).set("Authorization",  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwicGFzc3dvcmQiOiIwNWE2NzFjNjZhZWZlYTEyNGNjMDhiNzZlYTZkMzBiYiIsInJvbGUiOiJjdXN0b21lciIsImRlbHV4ZVRva2VuIjoiIiwibGFzdExvZ2luSXAiOiIxMjcuMC4wLjEiLCJwcm9maWxlSW1hZ2UiOiIvYXNzZXRzL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy9kZWZhdWx0LnN2ZyIsInRvdHBTZWNyZXQiOiIiLCJpc0FjdGl2ZSI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMS0xMi0xMCAwODoyNTowNi41MTEgKzAwOjAwIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0xMCAwODoyNToxNi44NjcgKzAwOjAwIiwiZGVsZXRlZEF0IjpudWxsfSwiaWF0IjoxNjM5MTMxMTMzLCJleHAiOjE2MzkxNDkxMzN9.EbNSlWaHH0sPeqMBjuUwLAveOeZBlyTvsvvtcyNfNxr3UHTbCPfnXcXB_a8ZtOTKwEtaTS1wGhCO3LOHF1k_d4mKrV2LUUGEkpZKtsggpDKCWz1pTu1JJPhtELChoG3D_kBljOrSW7WtgMNju8Bc8gUK_jly-owoQwxmlA3jvQA")
    //
    //     console.log('****Response****', JSON.stringify(response));
    //     console.log('****Status Code****', response.statusCode);
    //     expect(response.statusCode).to.equal(200);
    // })

    it('Positive: should login with valid credentials', async () => {
        await loginPage.login(EMAIL_DEFAULT_TEXT, PASSWORD_DEFAULT_TEXT);
        await browser.pause(1000);
        console.log('******* TOKEN LOCAL STORAGE ******');


        let token = await browser.execute(function (key) {
            return this.localStorage.getItem(key)
        }, 'token')

        console.log(`Token CURVA ${token}`);

        await (await mainPage.getHeaderCo()).openAccountMenu();
        await browser.pause(2000);



        assert.isTrue(await (await mainPage.getHeaderCo()).isLogoutButtonExist());
    });
});

