import { assert, expect  } from "chai";
import loginPage from "../../../page_objects/pages/login.page.js";
import mainpage from "../../../page_objects/pages/main.page.js";
import * as allureWrapper from "../../../../framework/helpers/allure.wrapper.js";

const EMAIL_WRONG_TEXT = 'wrong@test.com';
const PASSWORD_WRONG_TEXT = 'wrongwrong';
const ERROR_TEXT = 'Invalid email or password.';

describe('Login testing', ()=>{
    before(async () => {
        allureWrapper.addAllureDescription('Negative: login test description');
        await mainpage.open();
        await (await mainpage.getHeaderCo()).navigateToLogin();
    });

    it('Negative: should display error login message', async () => {
    await loginPage.login(EMAIL_WRONG_TEXT, PASSWORD_WRONG_TEXT);
    await browser.pause(2000);

    expect(await loginPage.isErrorTextElementExist()).to.be.true;
    expect(await loginPage.getErrorText()).to.equal(ERROR_TEXT);
});
});