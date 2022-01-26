import loginPage from '../../../../page_objects/pages/login.page.js'
import mainPage from '../../../../page_objects/pages/main.page.js'
import registrationPage from '../../../../page_objects/pages/registration.page.js'
import { expect } from 'chai'
import * as allureWrapper from '../../../../../framework/helpers/allure.wrapper.js'
import { REGISTRATION_DATA } from '../../../../../framework/helpers/dataProvider.js'

describe('Registration testing', () => {
  it('Positive: should register with valid credentials', async () => {
    allureWrapper.addAllureDescription('Positive: Registration test description')
    await mainPage.open()
    await (await mainPage.getHeaderCo()).navigateToLogin()
    await loginPage.waitForPageAvailable()
    await loginPage.clickRegisterButton()

    await registrationPage.registration(
      REGISTRATION_DATA.email,
      REGISTRATION_DATA.pass,
      REGISTRATION_DATA.pass,
      REGISTRATION_DATA.securityQuestion,
      REGISTRATION_DATA.securityAnswer
    )

    await loginPage.waitForPageAvailable()

    expect(await browser.getUrl()).is.equal('http://localhost:3000/#/login')
  })
})
