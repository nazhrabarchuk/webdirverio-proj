import loginPage from "../../../page_objects/pages/login.page.js";
import mainPage from "../../../page_objects/pages/main.page.js";
import registrationPage from "../../../page_objects/pages/registration.page.js";

describe('Registration testing', () => {
    before(async () => {
        mainPage.open();
        await (await mainPage.getHeaderCo()).navigateToLogin();
    });

    it('Positive: should register with valid credentials', async () => {
        await loginPage.clickRegisterButton();

        await registrationPage.selectQuestion("Mother\'s maiden name?");
        await browser.pause(5000);

        await registrationPage.setSecurityAnswer("Example name");
        await browser.pause(1000);

    });
});