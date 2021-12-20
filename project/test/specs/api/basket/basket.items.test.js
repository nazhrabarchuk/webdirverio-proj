import superagent from "superagent";
import {expect} from "chai";
import {clientData} from "../../../../../framework/helpers/client.js";
import * as allureWrapper from "../../../../../framework/helpers/allure.wrapper.js";

describe('API Basket tests', () => {
    let token;
    let getItemBasket;
    before(async () => {
        allureWrapper.addAllureDescription('Positive API: Basket add items');
        await clientData.register();
        token = await clientData.getAuthToken();
    })

    it('API POST: add card to basket', async () => {
        getItemBasket = await superagent
            .get(baseUrl + 'rest/basket/29')
            .set("Authorization", `Bearer ${token}`)
            .catch((e) => {
                console.log(e);
                return e;
            });
        const requestBody = {ProductId: 1, BasketId: getItemBasket.body.id, quantity: 1};
        const response = await superagent
            .post(baseUrl + 'api/BasketItems/')
            .send(requestBody)
            .set("Authorization", `Bearer ${token}`)
            .catch((e) => {
                console.log(e);
                return e;
            });

        expect(response.statusCode).to.equal(200);
    })

})