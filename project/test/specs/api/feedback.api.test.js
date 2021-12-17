import { clientData} from "../../../../framework/helpers/client.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import {requestSender} from "../../../../framework/helpers/http.request.wrapper.js";
import { expect} from "chai";

const FEEDBACK_TEXT = "Api feedback with rating 3";

describe('API Leaving customer feedback tests', () => {
    before(async () => {
        await clientData.register();
        await clientData.getAuthToken();
        await mainPage.open();
        await clientData.setBrowserCreds();
    });
    it('GET: checking feedbacks', async () => {
        const getRequest = await requestSender.doGetRequest({url: baseUrl + 'api/Feedbacks'});
        expect(getRequest.statusCode).to.equal(200);
    })
    it('Should leave feedback with rate 3', async () => {
        let getCaptcha, getUser;
        try {
            getCaptcha = await requestSender.doGetRequest({
                url: baseUrl + 'rest/captcha/'
            });
            getUser = await requestSender.doGetRequest({
                url: baseUrl + 'rest/user/whoami'
            })
        } catch (e) {
            return e;
        }
        const requestBody = {
            UserId: getUser.body.id,
            captchaId: getCaptcha.body.captchaId,
            captcha: getCaptcha.body.answer,
            comment: FEEDBACK_TEXT,
            rating: 3
        }
        const postRequest = await requestSender.doPostRequest({
            url: baseUrl + 'api/Feedbacks',
            body: requestBody
        })
        expect(postRequest.statusCode).to.equal(201);
    })
})