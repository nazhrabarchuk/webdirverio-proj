import {requestSender} from "./http.request.wrapper.js";
import {REGISTRATION_DATA} from "./dataProvider.js";

global.EMAIL_DEFAULT_TEXT = REGISTRATION_DATA.email;
global.PASSWORD_DEFAULT_TEXT = `testtest`;

let question;

const REGISTER_USER_POST_BODY_DATA = {
    email: EMAIL_DEFAULT_TEXT,
    password: PASSWORD_DEFAULT_TEXT,
    passwordRepeat: PASSWORD_DEFAULT_TEXT,
    securityQuestion: question,
    securityAnswer: 'test',
}
const LOGIN_USER_POST_BODY_DATA = {
    email: EMAIL_DEFAULT_TEXT,
    password: PASSWORD_DEFAULT_TEXT
}

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
        return JSON.stringify(responseGetSecurityQuestion.body);
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
        await browser.execute('sessionStorage.clear()');
        await browser.deleteCookies(['token'])
        await browser.execute(setLocalStorageToken);
        await browser.execute(setSessionStorageBid);
        await browser.setCookies({
            name: 'token',
            value: Client.TOKEN
        })
        await browser.refresh();
    }

    /**
     * Return TOKEN of logged user
     * @return {Promise} || string
     */
    async getAuthToken() {
        let response;
        if (!Client.TOKEN) {
            response = await this.loginUser();
            console.log('******* Client.TOKEN ********', Client.TOKEN);
            console.log('******* Client.BID ********', Client.BID);
            Client.TOKEN = response.body.authentication.token;
            Client.BID = response.body.authentication.bid;
        }
        return Client.TOKEN;
    }

    /**
     * Login user
     * @return {Promise}
     */
    async loginUser() {
        return await requestSender.doPostRequest({
            url: `${baseUrl}rest/user/login/`,
            body: LOGIN_USER_POST_BODY_DATA
        }).then((response) => {
            console.log('******* STATUS CODE LOGIN USER ********', response.statusCode);
            return response;
        })
    }

    /**
     * Register user on site
     * @returns {Promise<*>}
     */
    async register() {

        /** Get json string of quest **/
        question = await this.securityQuestionGet();

        /** Send post request for register user **/
        return await requestSender.doPostRequest({
            url: baseUrl + 'api/Users/',
            body: REGISTER_USER_POST_BODY_DATA
        }).then((response) => {
            return response;
        });
    }
}

export const clientData = new Client();