import {requestSender} from "./http.request.wrapper.js";
import registrationPage from "../../project/page_objects/pages/registration.page.js";
import superagent from "superagent";

global.EMAIL_DEFAULT_TEXT = `${registrationPage.randomData}@test.com`;
global.PASSWORD_DEFAULT_TEXT = `testtest`;

export class Client {
    /**
     * Single get token
     * @type {null|string}
     */
    static TOKEN = null;
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
    static async getToken() {

        if (!Client.TOKEN) {
            await (new Client()).login().then((response) => {
                console.log("\n\n\n LINE: 28  get response for token \n\n\n", response);
                Client.TOKEN = response.authentication.token;
            });
        }

        return Client.TOKEN;

    }

    static async getUserId(){
        if (!Client.ID) {
            await (new Client()).login().then((response) => {
                console.log("\n\n\n LINE: 28  get response for token \n\n\n", response);
                Client.ID = response.authentication.bid;
            });
        }
        return Client.ID;
    }

    /**
     * Basic login of create and login user
     * Get token || bid || umail of user
     * @returns {Promise}
     */
    async login() {

        const response = await requestSender.doPostRequest({
            url: `${baseUrl}rest/user/login/`,
            body: {
                'email': EMAIL_DEFAULT_TEXT,
                'password': PASSWORD_DEFAULT_TEXT
            }
        });

        // if (!response.hasOwnProperty('authentication')) {
        //     throw new Error(`\n\n Cant find in response authentication prop`);
        // }
        //
        // if (!response.authentication.hasOwnProperty('token')) {
        //     throw new Error("\n\n Cant find token in authentication user response \n\n ");
        // }

        const token = response.authentication.token;

        const id = response.authentication.bid;

        const command = `localStorage.setItem('token', '${token}')`;

        Client.TOKEN = token;
        Client.ID = id;
        await browser.execute('localStorage.clear()');
        await browser.execute(command);
        console.log('****** TOKEN ******', Client.TOKEN)
        return response;
    }

    /**
     * Register user on site
     * @returns {Promise<*>}
     */
    async register() {

        /** Get json string of quest **/
        const question = await this.securityQuestionGet();

        /** Send post request for register user **/
        const users = async () => {
            return await requestSender.doPostRequest({
                url: baseUrl + 'api/Users/',
                body: {
                    "email": EMAIL_DEFAULT_TEXT,
                    "password": PASSWORD_DEFAULT_TEXT,
                    "passwordRepeat": PASSWORD_DEFAULT_TEXT,
                    "securityQuestion": question,
                    "securityAnswer": 'test',
                }
            });

        };
        return await users().then((response) => {
            console.log('******** RESPONSE **********', response)
            return response;
        });
    }

}

export const clientData = new Client();