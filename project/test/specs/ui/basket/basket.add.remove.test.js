import * as allureWrapper from '../../../../../framework/helpers/allure.wrapper.js'
import mainPage from '../../../../page_objects/pages/main.page.js'
import basketPage from '../../../../page_objects/pages/basket.page.js'
import { assert } from 'chai'
import { clientData } from '../../../../../framework/helpers/client.js'

describe('Add/remove items to the basket', () => {
  before(async () => {
    allureWrapper.addAllureDescription('Add/remove items to the basket')
    await clientData.register()
    await clientData.getAuthToken()
    await mainPage.open()
    await clientData.setBrowserCreds()

    await mainPage.waitForPageAvailable()
  })
  it('Add item to basket', async () => {
    await (await mainPage.getProductsComponent()).addItemProductToBasket(1)
    await (await mainPage.getHeaderCo()).clickBasketButton()

    await basketPage.waitForPageAvailable()

    // TODO: delete
    await browser.pause(2000)

    assert.isTrue(await basketPage.basketNotEmpty())
  })
  it('Remove item from basket', async () => {
    await browser.refresh()
    await basketPage.waitForPageAvailable()

    // TODO: delete
    await browser.pause(2000)

    await basketPage.removeItemFromBasket()

    await browser.refresh()

    assert.isFalse(await basketPage.basketNotEmpty())
  })
})
