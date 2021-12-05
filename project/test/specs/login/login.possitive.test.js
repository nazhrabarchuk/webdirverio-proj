// import { assert, expect  } from "chai";
// import loginPage from "../../../page_objects/pages/login.page.js";
// import MainPage from "../../../page_objects/pages/main.page.js";

// const EMAIL_DEFAULT_TEXT = 'test@test.com';
// const PASSWORD_DEFAULT_TEXT = 'testtest';

// describe('Login testing', () => {
//     before(async () => {
//         MainPage.open();
//         await (await MainPage.getHeaderCo()).navigateToLogin();
//     });

//     it('Positive: should login with valid credentials', async () => {
//         await loginPage.login(EMAIL_DEFAULT_TEXT, PASSWORD_DEFAULT_TEXT);
//         await browser.pause(1000);
//         await (await MainPage.getHeaderCo()).openAccountMenu();
//         await browser.pause(1000);
//         assert.isTrue(await (await MainPage.getHeaderCo()).isLogoutButtonExist());
//     });
// });

