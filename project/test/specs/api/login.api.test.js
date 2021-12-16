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
describe('API Login testing', () => {


    it('API POST: Create user', async () => {
     await clientData.register();
        console.log('************** register **********', await clientData.register().then((response)=>{
            console.log(response.status);
        }));
     await clientData.getAuthToken();
        console.log('*********** await clientData.login()*************',await clientData.getAuthToken())
     await browser.refresh();
     await browser.pause(2000);
    });

});

