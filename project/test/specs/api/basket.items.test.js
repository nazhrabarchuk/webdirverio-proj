import superagent from "superagent";
import {expect} from "chai";
import mainPage from "../../../page_objects/pages/main.page.js";
import {clientData} from "../../../../framework/helpers/client.js";

describe('API Basket tests', () => {
    let token;
    before(async () => {
        await clientData.register();
        token = await clientData.getAuthToken();
        await mainPage.open();
        await clientData.setBrowserCreds();

    })

    it('API POST: add card to basket', async () => {
        let getItemBasket;
        try {
            getItemBasket = await superagent.get(baseUrl + 'rest/basket/29').set("Authorization", `Bearer ${token}`);
        } catch (e) {
            return e;
        }
        const requestBody = {ProductId: 1, BasketId: getItemBasket.body.id, quantity: 1};
        const response = await superagent.post(baseUrl + 'api/BasketItems/').send(requestBody).set("Authorization", `Bearer ${token}`);

        expect(response.statusCode).to.equal(200);
    })
})