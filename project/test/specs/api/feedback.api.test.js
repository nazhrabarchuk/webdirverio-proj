import {Client, clientData} from "../../../../framework/helpers/client.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import superagent from "superagent";

describe('API Leaving customer feedback tests', () => {
    before(async () => {
        await mainPage.open();

        await clientData.register();
        await clientData.login();

        await browser.refresh();


    });
    it('Should leave feedback with rate 3', async () => {
        const token = await Client.getToken();
        const userId = await Client.getUserId();

        console.log('************* token ******** ', token)
        console.log('************* userId ******** ', userId)
        const requestBody = {
            "id": userId,
            "comment": "I love this shop! Best products in town! Highly recommended! (***in@juice-sh.op)",
            "rating": 3,
            "UserId": userId
        }

        const response = await superagent.post(baseUrl + 'api/Feedbacks/').send(requestBody).set('Authorization', `Bearer ${token}`)
        console.log('****Response****', JSON.stringify(response));
            console.log('****Status Code****', response.statusCode);
    })
})