import { clientData} from "../../../../../framework/helpers/client.js";
import {requestSender} from "../../../../../framework/helpers/http.request.wrapper.js";
import { expect} from "chai";
import * as allureWrapper from "../../../../../framework/helpers/allure.wrapper.js";

const FEEDBACK_TEXT = "Api feedback with rating 3";

describe('API Leaving customer feedback tests', () => {
    before(async () => {
        allureWrapper.addAllureDescription('Negative API: Leaving customer without captcha feedback');
        await clientData.register();
        await clientData.getAuthToken();
    });
    it('Negative: Should return 401 when leave feedback without captcha', async () => {
        let getUser = await requestSender.doGetRequest({
            url: baseUrl + 'rest/user/whoami'
        })

        const requestBody = {
            UserId: getUser.body.id,
            captchaId: 1,
            captcha: 11,
            comment: FEEDBACK_TEXT,
            rating: 3
        }
        const postRequest = await requestSender.doPostRequest({
            url: baseUrl + 'api/Feedbacks',
            body: requestBody
        })
        expect(postRequest.status).to.equal(401);
    })
})