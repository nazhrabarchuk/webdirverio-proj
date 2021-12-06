import loginPage from "../../page_objects/pages/login.page";
import registrationPage from "../../page_objects/pages/registration.page";

describe('Registration testing', () => {
    before(async () => {
        MainPage.open();
        await (await MainPage.getHeaderCo()).navigateToLogin();
    });

    it('Positive: should register with valid credentials', async () => {
        await loginPage.clickRegisterButton();

        await registrationPage.selectAnswer();

    });
});