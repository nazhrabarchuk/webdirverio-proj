import superagent from "superagent";
import {assert, expect} from "chai";
import mainPage from "../../../page_objects/pages/main.page.js";
import {Client, clientData} from "../../../../framework/helpers/client.js";
import {requestSender} from "../../../../framework/helpers/http.request.wrapper.js";

describe('API Basket tests', () => {
    before(async () => {


        // await mainPage.open();

    })

    it('API POST: add card to basket', async () => {
        await clientData.register();
        await clientData.getAuthToken();
        await mainPage.open();
        await clientData.setBrowserCreds();
        const token = await clientData.getAuthToken();
        // await browser.refresh();


        const requestBody = {"ProductId": 2, "BasketId": 8, "quantity": 1};
        // console.log('********* `Bearer ${await clientData.getAuthToken()}` ***********', `Bearer ${await clientData.getAuthToken()}`)
        const response = await superagent.post(baseUrl + 'api/BasketItems/').send(requestBody).set("Authorization", `Bearer ${token}`);
        // const response = await requestSender.doPostRequest({
        //     "url": baseUrl + 'api/BasketItems/',
        //     "body": requestBody
        // })
        console.log('****Response z****', response);
        console.log('****Status Code z****', response.statusCode);
        expect(response.statusCode).to.equal(200);
    })
})