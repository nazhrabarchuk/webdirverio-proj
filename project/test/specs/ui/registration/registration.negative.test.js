import loginPage from '../../../../page_objects/pages/login.page.js'
import mainPage from '../../../../page_objects/pages/main.page.js'
import registrationPage from '../../../../page_objects/pages/registration.page.js'
import { expect } from 'chai'
import * as allureWrapper from '../../../../../framework/helpers/allure.wrapper.js'
import { REGISTRATION_DATA } from '../../../../../framework/helpers/dataProvider.js'

const ERROR_EMAIL_TEXT = 'Email address is not valid.'
const ERROR_PASS_NOT_MATCH_TEXT = 'Passwords do not match'

describe('Registration testing', () => {
  before(async () => {
    allureWrapper.addAllureDescription('Negative: Registration test description')
    await mainPage.open()
    await (await mainPage.getHeaderCo()).navigateToLogin()
    await loginPage.waitForPageAvailable()
    await loginPage.clickRegisterButton()
  })
  it(`Negative: should exist "${ERROR_EMAIL_TEXT}" with invalid email creds`, async () => {
    await registrationPage.registration(
      REGISTRATION_DATA.pass,
      REGISTRATION_DATA.email,
      REGISTRATION_DATA.email,
      REGISTRATION_DATA.securityQuestion,
      REGISTRATION_DATA.securityAnswer
    )
    expect(await registrationPage.isErrorEmailTextExisting()).to.be.true
    expect(await registrationPage.getErrorEmailText()).to.equal(ERROR_EMAIL_TEXT)
  })
  it(`Negative: should exist "${ERROR_PASS_NOT_MATCH_TEXT}" with different pass & pass match creds`, async () => {
    await registrationPage.registration(
      REGISTRATION_DATA.email,
      REGISTRATION_DATA.pass,
      REGISTRATION_DATA.email,
      REGISTRATION_DATA.securityQuestion,
      REGISTRATION_DATA.securityAnswer
    )
    expect(await registrationPage.isPassNotMatchCoExisting()).to.be.true
    expect(await registrationPage.getPassNotMatchText()).to.equal(ERROR_PASS_NOT_MATCH_TEXT)
  })
})
