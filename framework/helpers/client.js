import {requestSender} from "./http.request.wrapper.js";
import registrationPage from "../../project/page_objects/pages/registration.page.js";
import superagent from "superagent";

global.EMAIL_DEFAULT_TEXT = `${registrationPage.randomData}@test.com`;
global.PASSWORD_DEFAULT_TEXT = `testtest`;

export class Client {

    static TOKEN = null;
    static BID = null;
    static ID = null;

    /**
     * Get security question by request
     * @return {Promise<string>|string}
     */
    async securityQuestionGet() {
        const responseGetSecurityQuestion = await requestSender.doGetRequest({
            url: baseUrl + 'api/SecurityQuestions/?id=1'
        })
        return JSON.stringify(responseGetSecurityQuestion);
    }

    /**
     * If token is null login user else get token line
     * @return {string}
     */


    static async getUserId() {
        if (!Client.ID) {
            await (new Client()).login().then((response) => {
                console.log("\n\n\n LINE: 28  get response for token \n\n\n", response);
                Client.ID = response.body.authentication.bid;
            });
        }
        return Client.ID;
    }

    /**
     * Basic login of create and login user
     * Get token || bid || umail of user
     * @returns {Promise}
     */
    async setBrowserCreds() {

        const setLocalStorageToken = `localStorage.setItem('token', '${Client.TOKEN}')`;
        const setSessionStorageBid = `sessionStorage.setItem('bid', '${Client.BID}')`;

        await browser.execute('localStorage.clear()');
        await browser.execute(setLocalStorageToken);
        await browser.execute(setSessionStorageBid);
        await browser.setCookies({
            name: 'token',
            value: Client.TOKEN
        })
        await browser.refresh();
    }


    async getAuthToken() {
        let response;
        if (!Client.TOKEN) {
            response = await requestSender.doPostRequest({
                url: `${baseUrl}rest/user/login/`,
                body: {
                    email: EMAIL_DEFAULT_TEXT,
                    password: PASSWORD_DEFAULT_TEXT
                }
            });
            // console.log('******* response ********', response);
            Client.TOKEN = response.body.authentication.token;
            Client.BID = response.body.authentication.bid;
            // console.log('******* Client.BID ********', Client.BID);
        }
        return Client.TOKEN;
    }


    /**
     * Register user on site
     * @returns {Promise<*>}
     */
    async register() {

        /** Get json string of quest **/
        const question = await this.securityQuestionGet();

        /** Send post request for register user **/
        return await requestSender.doPostRequest({
            url: baseUrl + 'api/Users/',
            body: {
                "email": EMAIL_DEFAULT_TEXT,
                "password": PASSWORD_DEFAULT_TEXT,
                "passwordRepeat": PASSWORD_DEFAULT_TEXT,
                "securityQuestion": question,
                "securityAnswer": 'test',
            }
        }).then((response) => {
            console.log('******** RESPONSE **********', response)
            return response;
        });
    }

}

export const clientData = new Client();