import {expect} from "chai";
import {clientData} from "../../../../../framework/helpers/client.js";
import * as allureWrapper from "../../../../../framework/helpers/allure.wrapper.js";

describe('API Login testing', () => {
    before(async () => {
        allureWrapper.addAllureDescription('Positive API: Register & login (authorization)');
    });
    it('API POST: user registration', async () => {
     const response = await clientData.register();
        expect(response.statusCode).to.equal(201);
    });

    it('API POST: user login', async () => {
        const response = await clientData.loginUser();
        expect(response.statusCode).to.equal(200);
    });

});

