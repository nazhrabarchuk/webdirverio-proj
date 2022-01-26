import { assert, expect } from 'chai'
import aboutPage from '../../../../page_objects/pages/about.page.js'
import facebookPage from '../../../../page_objects/pages/facebook.page.js'
import mainPage from '../../../../page_objects/pages/main.page.js'
import * as allureWrapper from '../../../../../framework/helpers/allure.wrapper.js'

const EXPECTED_PROFILE_TEXT = 'OWASP Juice Shop'

describe('Open social Faсebook testing', () => {
  it('Positive: should switch to Facebook page', async () => {
    allureWrapper.addAllureDescription('Positive: Open facebook page test description')
    await mainPage.open()
    await (await mainPage.getHeaderCo()).clickBurgerButton()
    await (await mainPage.getSidebarCo()).waitForComponentAvailable()

    await (await mainPage.getSidebarCo()).clickAboutUsLink()
    await aboutPage.goToSocialFacebook()
    // await browser.switchWindow(await aboutPage.getSocialFacebookAttributeHrefLink());

    // TODO:replace with waits
    await browser.pause(2000)

    await browser.switchWindow(await aboutPage.getSocialFacebookAttributeHrefLink())

    await facebookPage.waitForPageAvailable()

    assert.isTrue(await await facebookPage.isProfileTitleExist())
    expect(await await facebookPage.getProfileTitleText()).is.equal(EXPECTED_PROFILE_TEXT)
    // assert.isTrue(await facebookPage.isProfileLinkElementExist())
  })
})
